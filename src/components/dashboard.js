import React from 'react';
import {Doughnut} from 'react-chartjs-2';
import ProjectList from './projects/projectList';
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

    return(
      <div className='dashboard container'>
        <h3 className='green-text text-darken-2'>Overview of GlobalGiving Projects</h3>
        <div className='divider'></div>
          <div className='section'>
            <Doughnut data={graphData} options={{responsive: true, maintainAspectRatio: false, legend: {display: false}, title: {display: true, text: 'Projects by Theme', fontSize: 16}}} height='250' />
          </div>
          <div className='divider'></div>
          <div className='section'>
            <ProjectList projects={projects} />
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
