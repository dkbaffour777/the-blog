import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import HomePage from './components/HomePage';

const App =()=> {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            component={HomePage}
          />
          <Route
            exact
            path="/dashboard"
            component={Dashboard}
          />
          <Route render={() => <h1>Unknown page!</h1>} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
