import React from 'react';
import { connect } from 'react-redux';
import {HealthProj} from '../projects/projectThemes';

class Health extends React.Component {
  render() {
    const {projects} = this.props;
    return (
      <div className='dashboard container'>
        <h4 className='blue-grey-text text-darken-1'>Overview of Projects: Health</h4>
        <div className='divider'></div>
          <div className='section'>
            <div className='row'>
              <div className='col s7 offset-s3'>
                <HealthProj projects={projects} />
              </div>
            </div>
          </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
    projects: state.project.projects,
    graphs: state.graph.graphs,
});

export default connect(mapStateToProps)(Health);
