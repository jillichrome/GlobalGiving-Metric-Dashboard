import React from 'react';

const ProjectSummary = ({project}) => {
  return(
    <div className='card horizontal grey lighten-1 z-depth-0 project-summary'>
      <div className='card-image'>
        <img src={project.image} alt='' className='responsive-img' />
      </div>
      <div className='card-content'>
        <span><h6 className='center-align black-text darken-4'>{project.title}</h6></span>
        <p>{project.organization} | {project.theme}</p>
        <p>Goal: {project.goal}</p>
        <p>Current Status: {project.funding}</p>
      </div>
    </div>
  )
}

export default ProjectSummary;
