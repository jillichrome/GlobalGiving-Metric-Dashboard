import React from 'react';
import {Doughnut} from 'react-chartjs-2';
import {Pie} from 'react-chartjs-2';
import { OldestProject, NewestProject } from './projects/projectDates';
import { NeedsFunds, ClosestFunds } from './projects/projectFunds';
import { connect } from 'react-redux';

class Dashboard extends React.Component {
  render() {
    const { projects } = this.props;
    const { graphs } =  this.props;
    const graphData = {
      labels: graphs[0].labels,
      datasets: [{
        data: graphs[0].datasets[0].data,
        backgroundColor: graphs[0].datasets[0].backgroundColor
      }]
    };
    const graphData2 = {
      labels: graphs[1].labels,
      datasets: [{
        data: graphs[1].datasets[0].data,
        backgroundColor: graphs[1].datasets[0].backgroundColor
      }]
    };

    return(
      <div className='dashboard container'>
        <h4 className='blue-grey-text text-darken-1'>Overview of GlobalGiving Projects</h4>
        <div className='divider'></div>
          <div className='section'>
            <div className='row'>
              <div className='col s12 m6'>
                <Doughnut data={graphData} options={{responsive: true, maintainAspectRatio: false, legend: {display: false}, title: {display: true, text: 'Projects by Theme', fontSize: 16}}} height='150' />
              </div>
              <div className='col s12 m6'>
                  <Pie data={graphData2} options={{responsive: true, maintainAspectRatio: false, legend: {display: false}, title: {display: true, text: 'Projects by Region', fontSize: 16}}} height='150' />
              </div>
            </div>
          </div>
        <div className='divider'></div>
        <div className='section'>
          <div className='row'>
            <div className='col s12 m6'>
              <h5>Project Furthest From Goal</h5>
              <NeedsFunds projects={projects} />
              <h5>Project Closest to Goal</h5>
              <ClosestFunds projects={projects} />
            </div>
            <div className='col s12 m6'>
              <h5>Oldest Project</h5>
              <OldestProject projects={projects} />
              <h5>Newest Project</h5>
              <NewestProject projects={projects} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
    projects: state.project.projects,
    graphs: state.graph.graphs,
});

export default connect(mapStateToProps)(Dashboard);
