import React from 'react';
import '../components/dashboard.css';
import Header from './header'
import data from '../data/member.json'
   
var ele=[];
class Dashboard extends React.Component{
  constructor(props){
    super(props)
    this.state={
      addModal:false,
      deleteModal:false,
      myList:data,
      selected:'',
      name:'',
      email:'',
      mobile:''
    }
    this.addMember=this.addMember.bind(this)
    this.handleChange = this.handleChange.bind(this);
    this.handleemail = this.handleemail.bind(this);
    this.handlemobile= this.handlemobile.bind(this);

  }
  
  handleChange(event) {
    this.setState({name: event.target.value});
  }
  handleemail(event) {
    this.setState({email: event.target.value});
  }
  handlemobile(event){
    this.setState({mobile: event.target.value});
  }
  Add =() => {    
    this.setState({addModal:true})
  }
  delete=(index)=>{
    this.setState({deleteModal:true, selected:index})
  }
  cancel=()=>{
    this.setState({deleteModal:false,selected:null})
  }
  confirmDelete=()=>{
  
    const index = this.state.selected;
        ele.splice(index,1)
        this.setState({myList:ele, deleteModal: false, selected: null})
      
  }
  
  addMember=()=>{
    let ob={
      'id':this.state.myList.length,
      'name':this.state.name,
      'email':this.state.email,
      'mobile':this.state.mobile
    }
  
    ele.push(ob)
    console.log('ele:: '+JSON.stringify(ele))
  
  this.setState({mylist:ele,addModal:false})
  }
    render() {
      ele=this.state.myList;
        return (
        <div style={{width:'100%',}}>
          <Header/>
          <div>
          <label className = "member">Member list</label>
          </div>
          <input className = "ip" placeholder="Filter by Name"></input>
          <button className = "buttonF"> Filter</button>
          <button className ="cbtn" onClick={() =>this.Add()}>Create a new member</button>
            <div>
              <table className = "table">
              <tbody>
              {this.state.myList.map((item,index)=>{
                  return (
                   <tr key={item.id}>
                   <th scope="row">{item.id}</th>
                   <td style={{color:'blue'}}>{item.name}</td>
                   <td>{item.email}</td>
                   <td style={{color:'blue'}}>{item.mobile}</td>
                   <td><button style={{backgroundColor:'blue',color:'white'}} onClick={this.delete.bind(this,index)}>Delete</button></td>
                </tr>)
              })}
        </tbody>
                
              </table>
              <button className = "last1" onClick = {()=>{console.log('previous pressed')}} >Previous</button>
              <label className = "last2" >"Displyaing 1 to 2 of 2"</label>
            <button className ="last3" onClick = {()=>{console.log('next pressed')}}> Next</button>
            </div>
            {
              this.state.addModal===true?<div style={{height:180,width:500,backgroundColor:'white',position:'absolute',
              top:200,left:450}}>
                <div  style = {{display:"compact",justifyContent:"center",marginTop:15,width:500,height:110}}>
                
        <input placeholder = "enter name"
        style={{marginLeft:12}}
          id="name"
          type="text"  
          onChange={this.handleChange} 
        />
        <br/>
        <input placeholder = "enter email"
        style={{marginLeft:12}}
          id = "em"
          type="text"  
          onChange={this.handleemail}
         />
         <br/>
        <input placeholder = "enter mobile no"
        style={{marginLeft:12}}
           id = "num"
          type="text"  
          onChange={this.handlemobile}
         />
                </div>
                <div style={{display:"flex",marginTop:8,justifyContent:'center'}}>
                <button style={{backgroundColor:'black',color:'white',marginRight:40}} onClick={()=>this.setState({addModal:false})}>Cancel</button>
                <button style={{backgroundColor:'black',color:'white'}} onClick={this.addMember}>Save</button>
                </div>
              </div>:null
            }
            {
              this.state.deleteModal===true?<div style={{height:120,width:500,backgroundColor:'white',position:'absolute',
              top:200,left:350,}}>
                You will lose data related to user. Do you really want to delete user ?
                <div style={{display:"flex",marginTop:40,justifyContent:'center'}}>
                <button style={{backgroundColor:'black',color:'white',marginRight:40}} onClick={()=>this.setState({deleteModal:false,selected:null})}>Cancel</button>
                <button style={{backgroundColor:'black',color:'white'}} onClick={this.confirmDelete}>Delete</button>
                </div>
              </div>:null
            }
          </div>
        );

}
}
export default Dashboard;