import React from 'react';
import { connect } from 'react-redux';
import {WandG} from '../projects/projectThemes';

class WomenGirls extends React.Component {
  render() {
    const {projects} = this.props;
    return (
      <div className='dashboard container'>
        <h4 className='blue-grey-text text-darken-1'>Overview of Projects: Women and Girls</h4>
        <div className='divider'></div>
          <div className='section'>
            <div className='row'>
              <div className='col s7 offset-s3'>
                <WandG projects={projects} />
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

export default connect(mapStateToProps)(WomenGirls);
