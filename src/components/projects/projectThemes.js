import React from 'react';
import ProjectSummary from './projectSummary';
import {themes} from '../../store/data';

themes.forEach(theme => {
  console.log(theme)
})

export const Child = ({projects}) => {
  return(
    <div className='project-list section'>
      { projects.map(project => {
        if(project.theme === 'Children') {
          return <ProjectSummary project={project} key={project.id} />
        }
    })}
    </div>
  )
}

export const Edu = ({projects}) => {
  return(
    <div className='project-list section'>
      {
        projects.map(project => {
          if(project.theme === 'Education') {
            return <ProjectSummary project={project} key={project.id} />
          }
        })
      }
    </div>
  )
}

export const Change = ({projects}) => {
  return(
    <div className='project-list section'>
      {
        projects.map(project => {
          if(project.theme === 'Climate Change') {
            return <ProjectSummary project={project} key={project.id} />
          }
        })
      }
    </div>
  )
}

export const Econ = ({projects}) => {
  return(
    <div className='project-list section'>
      {
        projects.map(project => {
          if(project.theme === 'Economic Development') {
            return <ProjectSummary project={project} key={project.id} />
          }
        })
      }
    </div>
  )
}

export const WandG = ({projects}) => {
  return(
    <div className='project-list section'>
      {
        projects.map(project => {
          if(project.theme === 'Women and Girls') {
            return <ProjectSummary project={project} key={project.id} />
          }
        })
      }
    </div>
  )
}
