import React from 'react';
import '../login.css'
import { withRouter } from 'react-router-dom';
import * as Userdata from '../Userdata.json'; 
class Login extends React.Component
{
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      message: "",
      error: false
    }
    }
    onSubmit = () => {
      if (this.state.username === null || this.state.username === undefined || this.state.username.trim().length === 0) {
        this.setState({error: true, message: "Please enter username."});  
        document.getElementById("username").focus();
        return;
      }
    //   if(!this.validateEmail(this.state.username)){
    //     this.setState({'username_error':"Please enter a valid email!"});
    //     document.getElementById('username').focus();
    //     return;
    // }
    // validateEmail(email) 
    // {
    //   var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //   return regex.test(email);
    // }
      if (this.state.password === null || this.state.password === undefined || this.state.password.trim().length === 0) {
        this.setState({error: true, message: "Please enter password."});
          document.getElementById("password").focus();
          return;
      }
      // if(!this.validatePassword(this.state.password))
      // {
      //   this.setState({'password_error':"Please enter minimum of 8 characters with at least one lowercase character,one upppercase character ,one number & one special chracter!"});
      //   document.getElementById('password').focus();
      //   return;
      // }
      if (this.state.username === Userdata.username && this.state.password === Userdata.password) {
        this.setState({error: false});
        this.props.history.push('/dashboard')
      } else {
       this.setState({error: true, message: "Incorrect username or password."});
      }
  };
  render(){
    return(
      <div className = "main">
        <div>
        <h1 className = "label">Login</h1>
        <label >Username</label>
        <input 
          className = "input"
          id="username"
          type="text"  
          value={this.state.username} 
          onChange={(event) => this.setState({username: event.target.value })} 
        />
        <label>Password</label>
        <input 
          className = "input"
          id = "password"
          type="password"  
          value={this.state.password} 
          onChange={(event) => this.setState({password: event.target.value })}
         />
        <button className="button" onClick={() => this.onSubmit()}>Submit</button>
        {this.state.error && <p className="error">{this.state.message}</p>}
        </div>
      </div>
    )
  }
}

export default Login;
