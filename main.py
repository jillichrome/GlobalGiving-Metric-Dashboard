#!/usr/bin/env python3

# importing the requests library
import json
import requests
import config as cfg


# api-endpoint
URL = "https://api.globalgiving.org/api/public/projectservice/all/projects/active"

HEADERS = {'Content-type': 'application/json', 'Accept': 'application/json'}

# defining a params dict for the parameters to be sent to the API
PARAMS = {'api_key':cfg.API_KEY, 'nextProjectId':354}

# sending get request and saving the response as response object
RESPONSE = requests.get(url=URL, params=PARAMS, headers=HEADERS)

# extracting data in json format
INFO = RESPONSE.json()
JOBJ = json.dumps(INFO)
