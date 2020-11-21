import React from 'react';
import { Link } from 'react-router-dom';
import '../components/header.css';

import * as Userdata from '../Userdata.json';
    
class Header extends React.Component{
  
    render() {
        return (
        <div className="header">
            <div className="left">
            <p className="header-text">Admin Section</p>
            <Link className="header-text" to="/member"><p>Members</p></Link>
            <Link className="header-text" to="/produts"><p>Products</p></Link>
            <Link className="header-text" to="/Reporting"><p>Reporting</p></Link>
            <Link className="header-text" to="/Users"><p>Users</p></Link>
            </div>
            <div className="right">

            <p className="header-text"> {Userdata.name}</p>
            <Link className="header-text" to="/"><p>Logout</p></Link>
            </div>
          </div>
        );

}
}
export default Header;