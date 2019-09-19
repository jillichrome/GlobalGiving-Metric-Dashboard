import React from 'react';
import { NavLink } from 'react-router-dom';
import M from 'materialize-css';

class ProjectLinks extends React.Component {
  componentDidMount() {
        let elems = document.querySelectorAll('.dropdown-trigger');
        M.Dropdown.init(elems, {coverTrigger: false});
    };

  render() {
    return (
      <div>
        <a className='dropdown-trigger btn' data-target='dropdown1'>Themes<i className="material-icons right">arrow_drop_down</i></a>
        <ul id='dropdown1' className='dropdown-content'>
          <li><NavLink to='/education'>Education</NavLink></li>
          <li><NavLink to='/women'>Women and Girls</NavLink></li>
          <li><NavLink to='/climate'>Climate Change</NavLink></li>
          <li><NavLink to='/economic'>Economic</NavLink></li>
          <li><NavLink to='/children'>Children</NavLink></li>
        </ul>
      </div>
    )
  }
};

export default ProjectLinks;
