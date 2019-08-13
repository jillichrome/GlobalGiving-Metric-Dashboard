import React from 'react';
import ProjectList from './projects/projectList';
import { connect } from 'react-redux';

class Dashboard extends React.Component {
  render() {
    const { projects } = this.props;
    return(
      <div className='dashboard container'>
        <div className='row'>
          <div className='col s12 m6'>
            <ProjectList projects={projects} />
          </div>
          <div className='col s12 m5 offset-m1'>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    projects: state.project.projects
  }
}

export default connect(mapStateToProps)(Dashboard);
