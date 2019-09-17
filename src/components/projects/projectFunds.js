import React from 'react';
import ProjectSummary from './projectSummary';
import {remaining} from '../../store/api';

const max = Math.max(...remaining);
const min = Math.min(...remaining);

export const NeedsFunds = ({projects}) => {
  return(
    <div className='project-list section'>
      { projects.map(project => {
        if(project.remaining === max) {
        return <ProjectSummary project={project} key={project.id} />
      }
    })}
    </div>
  )
}

export const ClosestFunds = ({projects}) => {
  return(
    <div className='project-list section'>
      { projects.map(project => {
        if(project.remaining === min) {
        return <ProjectSummary project={project} key={project.id} />
      }
    })}
    </div>
  )
}
