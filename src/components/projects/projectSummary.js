import React from 'react';

const ProjectSummary = ({project}) => {
  return(
    <div className='card green z-depth-0 project-summary'>
      <div className='card-content grey-text text-darken-3'>
        <span className='card-title'>{project.title}</span>
        <p>Organization/Theme</p>
        <p>Donation Amount</p>
      </div>
    </div>
  )
}

export default ProjectSummary;
