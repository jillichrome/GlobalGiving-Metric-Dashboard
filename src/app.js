import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './components/dashboard';
import NavBar from './components/navbar';

class App extends React.Component {
  render() {
    return(
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Switch>
            <Route path='/' component={Dashboard} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
