import React from 'react';
import '../login.css'
import { withRouter } from 'react-router-dom';
import data from '../data/member.json'
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
    componentDidMount(){
window.localStorage.setItem('list',data)
    }
    onSubmit = () => {
      var regex =/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)$/;
       
      var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/
      
      if (this.state.username === null || this.state.username === undefined || this.state.username.trim().length === 0) {
        this.setState({error: true, message: "Please enter username."});  
        document.getElementById("username").focus();
        return;
      }
    
      else if (this.state.password === null || this.state.password === undefined || this.state.password.trim().length === 0) {
        this.setState({error: true, message: "Please enter password."});
          document.getElementById("password").focus();
          return;
      }
       
        else if (!regex.test(this.state.username.toString().toLowerCase())) {
          this.setState({error: true, message: "Invalid Email."});
      }
      else if (!passwordRegex.test(this.state.password)) {
        this.setState({error: true, message: "password_error: Please enter minimum of 8 characters with at least one lowercase character,one upppercase character ,one number & one special chracter!"});
    }
    else{
      this.onLogin();
    }
  };
  onLogin=()=>{
    if (this.state.username === Userdata.username && this.state.password === Userdata.password) {
       
      this.setState({error: false});
      this.props.history.push('/dashboard')
    } else {
     this.setState({error: true, message: "Incorrect username or password."});
    }
  }
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
