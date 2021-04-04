import { TextField } from "@material-ui/core";
import axios from "axios";
import React, { Component } from "react";
import "./Setpassword.scss";
class Setpassword extends Component {
constructor()
{
    super()
    this.state={
        password:'',
        repassword:'',
        err:''
    }
}
changehandler=(e)=>
{
this.setState({[e.target.name]:e.target.value})
}
submithandler=()=>
{   const id = sessionStorage.getItem('passwordreset')
    // console.log("id",id)
    if(this.state.password===this.state.repassword)
    {
        
        this.setState({err:"Password updated", password:'',
        repassword:'',})
        axios.post(`/mail/set/${id}`,{password:this.state.password}).then(res=>
            {
                this.props.history.push('/authpage/login')
            }) 
    }
    else
    {
        this.setState({err:"Password doesnt match"})

    }
}
  render() {
    return (
      <div className="set_container">
        <span>Please enter Password</span>
        <TextField id="standard-basic"name='password' type='password' label="Password" value={this.state.password}onChange={this.changehandler}/>
        <TextField id="standard-basic"name='repassword'  type='password' value={this.state.repassword} onChange={this.changehandler} label="Re.enter your password" />
        
        <button className="btn btn-primary" onClick={this.submithandler}>APPLY CHANGES</button>
        {this.state.err && <h1>{this.state.err}</h1>}
      </div>
    );
  }
}

export default Setpassword;
