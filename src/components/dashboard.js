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
        <div className='row'>
          <div className='col s12 m6'>
            <ProjectList projects={projects} />
          </div>
          <div className='col s12 m5 offset-m1'>
            <Doughnut data={graphData} options={{responsive: true, maintainAspectRatio: false, legend: {display: false}, title: {display: true, text: 'Projects by Theme', fontSize: 16}}} height='250' />
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
