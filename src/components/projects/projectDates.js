import React from 'react';
import ProjectSummary from './projectSummary';
import {dates} from '../../store/api';

const days = [];
dates.forEach(date => {
  days.push(new Date(date));
  return(days)
})

const minDate = new Date(Math.min(...days));
const maxDate = new Date(Math.max(...days));

export const NewestProject = ({projects}) => {
  return(
    <div className='project-list section'>
      { projects.map(project => {
        let date = new Date(project.approvedDate)
        if(date.valueOf() === maxDate.valueOf()) {
        return <ProjectSummary project={project} key={project.id} />
        }
      })}
    </div>
  )
}

export const OldestProject = ({projects}) => {
  return(
    <div className='project-list section'>
      { projects.map(project => {
        let date = new Date(project.approvedDate)
        if(date.valueOf() === minDate.valueOf()) {
        return <ProjectSummary project={project} key={project.id} />
      }
    })}
    </div>
  )
}
