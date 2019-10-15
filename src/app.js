import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './components/dashboard';
import NavBar from './components/navbar';

import Children from './components/themes/children';
import Climate from './components/themes/climate';
import Economic from './components/themes/economic';
import Education from './components/themes/education';
import WomenGirls from './components/themes/women';
import Health from './components/themes/health';

class App extends React.Component {
  render() {
    return(
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/children' component={Children} />
            <Route path='/climate' component={Climate} />
            <Route path='/economic' component={Economic} />
            <Route path='/education' component={Education} />
            <Route path='/women' component={WomenGirls} />
            <Route path='/health' component={Health} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
