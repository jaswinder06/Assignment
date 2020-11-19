import React from 'react';
import '../login.css'
class Login extends React.Component
{
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    }
    }
  render(){
    return(
      <div className = "main">
        <h1 className = "label">Login</h1>
        <label >Username</label>
        <input className = "input"
          type="text"  
          value={this.state.username} 
          onChange={(event) => this.setState({username: event.target.value })} 
        />
        <label>Password</label>
        <input className = "input"
        type="password"  
        value={this.state.password} 
        onChange={(event) => this.setState({password: event.target.value })}
         />
        <button className = "button">Submit</button>
      </div>
    )
  }
}

export default Login;
