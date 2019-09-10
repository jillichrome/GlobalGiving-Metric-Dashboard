import React from 'react';

const ProjectSummary = ({project}) => {
  return(
    <div className='card grey z-depth-0 project-summary'>
      <div className='card-content grey-text text-darken-3'>
        <span className='card-title'>{project.title}</span>
        <p>{project.organization}/{project.theme}</p>
        <p>Goal: {project.goal}</p>
        <p>Current Status: {project.funding}</p>
      </div>
    </div>
  )
}

export default ProjectSummary;
