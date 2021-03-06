import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Login from './components/Login';

const App =()=> {
  return (
    <>
      <Router>
        <Header />
        <main>
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
            <Route
              exact
              path="/login"
              component={Login}
            />
            <Route render={() => <h1>Unknown page!</h1>} />
          </Switch>
        </main>
      </Router>
    </>
  );
}

export default App;
