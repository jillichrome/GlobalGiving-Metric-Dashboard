#!/usr/bin/env python3

import argparse
import json
import os
import pymongo
import requests
import subprocess
import config as cfg

def get_projects(starting_project_id):
    # set api-endpoint
    url = "https://api.globalgiving.org/api/public/projectservice/all/projects/active"
    headers = {'Content-type': 'application/json', 'Accept': 'application/json'}
    # set request params
    params = {'api_key':cfg.API_KEY, 'nextProjectId':starting_project_id}
    # send get request and save the response as response object
    response = requests.get(url=url, params=params, headers=headers)
    if response.status_code != 200:
        raise Exception('API call returned {}'.format(response.status_code))
    projects_dict = response.json()
    return projects_dict

def get_bookmarks(projects_dict):
    if 'hasNext' in projects_dict['projects'].keys():
        has_next = projects_dict['projects']['hasNext']
        next_id = projects_dict['projects']['nextProjectId']
        project_list = projects_dict['projects']['project']
        return has_next, next_id, project_list
    has_next = False
    next_id = 1
    project_list = projects_dict['projects']['project']
    return has_next, next_id, project_list

def scrape_projects(starting_project_id):
    projects_dict = get_projects(starting_project_id)
    has_next, next_id, project_list = get_bookmarks(projects_dict)
    print("Added {} projects.".format(len(project_list)))
    while has_next:
        update_dict = get_projects(next_id)
        has_next, next_id, update_list = get_bookmarks(update_dict)
        [project_list.append(project) for project in update_list]
        print("Added {} more projects.".format(len(update_list)))
        print("Current project count {}".format(len(project_list)))
    with open('projects.json', 'w') as outfile:
        json.dump(projects_dict, outfile)

def arg_parse():
    parser = argparse.ArgumentParser(
        description='Scrape GlobalGiving for active projects.',
        epilog='Ensure that you have configured your API key as API_KEY in config.py.'
        )
    parser.add_argument('--start', '--start_project', nargs='?',
                        action="store", type=int, const=41500)
    args = parser.parse_args()
    starting_project_id = args.start

def create_db(db_name, collection_name):
    client = pymongo.MongoClient('localhost', 27017)
    db = client[db_name]
    projects = db[collection_name]
    return client, db

def import_projects(json_input):
    subprocess.Popen(['mongoimport', '--db', 'gg_projects_db', '-c', 'projects', '--file', json_input])


def query_project(db):
    mycol = db["projects"]
    for data in mycol.find({}):
        for project in data['projects']['project']:
            print(project['remaining'])

def delete_db(client, db_name):
    dbs = client.database_names()
    print(dbs)
    client.drop_database(db_name)

#main()

gg_client, gg_db = create_db('gg_projects_db', 'projects')
import_projects("./all_projects.json")
#query_project(gg_db)
#delete_db(gg_client, 'gg_projects_db')
