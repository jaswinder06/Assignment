import React from 'react';
import '../components/dashboard.css';
import Header from './header'
    
class Dashboard extends React.Component{
  constructor(props){
    super(props)
  }
    render() {
        return (
          
        <div>
          <Header/>
          <div>
          <label className = "member">Member list</label>
          </div>
          <input className = "ip" placeholder="Filter by Name"></input>
          <button className = "buttonF"> Filter</button>
          <button className ="cbtn">Create a new member</button>
            <div>
              <table className = "table">
                <tr>
                  <th className = "name">
                    ID
                      <tr>
                         <td className = "tdata">SRTYGFH</td> 
                        </tr>
                        <tr>
                          <td className = "tdata" >SRTYGFH</td>
                          </tr>
                        </th>
                  <th className = "name">Name
                    <tr>
                      <td className = "ndata">
                        MissJass 
                      </td>
                    </tr>
                    <tr>
                      <td  className = "ndata">
                       JassKaur
                      </td>
                    </tr>
                    </th> 
                    <tr>
                      <th className = "section">
                        Section
                        <th>1st
                          <tr>
                            <td>
                              0
                            </td>
                          </tr>
                          <tr>
                            <td>
                              1
                            </td>
                          </tr>
                        </th>
                        <th>2st
                        <tr>
                            <td>
                              0
                            </td>
                          </tr>
                          <tr>
                            <td>
                              1
                            </td>
                          </tr>
                        </th>
                        <th>3st
                        <tr>
                            <td>
                              0
                            </td>
                          </tr>
                          <tr>
                            <td>
                              1
                            </td>
                          </tr>
                        </th>
                        <th>4st
                        <tr>
                            <td>
                              0
                            </td>
                          </tr>
                          <tr>
                            <td>
                              1
                            </td>
                          </tr>
                        </th>
                        </th>
                        <th className = "name">Join Date
                        <tr>
                            <td className = "ndata">
                              19/11/2020
                            </td>
                          </tr>
                          <tr>
                            <td className = "ndata">
                              20/11/2020
                            </td>
                          </tr>
                        </th>
                        <th className = "name">Status
                          <tr>
                            <td>
                              <button className = "abtn">Active</button>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <button className = "abtn">Active</button>
                            </td>
                          </tr>
                        </th>
                        <th>........
                        <tr>
                            <td className = "tdata">
                              edit
                            </td>
                          </tr>
                          <tr>
                            <td className ="tdata">
                             edit
                            </td>
                          </tr>
                        </th>
                    </tr>
                    </tr>
              </table>
              <input className = "last1" placeholder="Previous"></input>
              <input className = "last2" placeholder="Displyaing 1 to 2 of 2"></input>
              <input className ="last3" placeholder="Next"></input>
            </div>
          </div>
        );

}
}
export default Dashboard;