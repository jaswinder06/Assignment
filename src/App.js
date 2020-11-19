import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Login from "./components/Login";

class App extends React.Component
{
  render(){
    return(
      <Router>
        <Switch>
          <Route path="/" component={Login} />
        </Switch>
      </Router>
    )
  }
}

export default App;
