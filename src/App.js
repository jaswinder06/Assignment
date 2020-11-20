import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Dashboard from './components/dashboard';
import Login from "./components/Login";
import Member from "./components/member";
import Products from "./components/products";
import Reporting from "./components/Reporting";
import Users from "./components/Users";
class App extends React.Component
{
  render(){
    return(
      <Router>
        <Switch>
          <Route  exact path="/" component={Login} />
          <Route exact path ="/dashboard" component={Dashboard}/>
          <Route exact path ="/produts" component = {Products}/>
          <Route exact path ="/Reporting" component = {Reporting}/>
          <Route exact path ="/Users" component = {Users}/>
          <Route exact path ="/Member" component = {Member}/>
        </Switch>
      </Router>
    )
  }
}

export default App;
