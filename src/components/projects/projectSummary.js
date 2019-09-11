import React from 'react';

const ProjectSummary = ({project}) => {
  return(
    <div className='card horizontal grey lighten-1 z-depth-0 project-summary'>
      <div className='card-image responsive-img'>
        <img src={project.image} alt='' />
      </div>
      <div className='card-content'>
        <span className='center'><h5>{project.title}</h5></span>
        <p>{project.organization} | {project.theme}</p>
        <p>Goal: {project.goal}</p>
        <p>Current Status: {project.funding}</p>
      </div>
    </div>
  )
}

export default ProjectSummary;
