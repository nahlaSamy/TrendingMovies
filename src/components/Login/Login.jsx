import React, { Component } from 'react';
import axios from 'axios'

class Login extends Component {
    state={errorMessage:""}
    user={
       
        email:"",
        password:"",

    }
    getFormData = (e) => {
        this.user[e.target.name]=e.target.value
        //this.user.first_name=e.target.value
        console.log(this.user)
    }
    sendData=async (e) => {
        e.preventDefault()


      let {data} =await axios.post("",this.user)
      if(data.message =="success"){
          localStorage.setItem("token", data.token)
          this.props.replace("/home")
      }
      else{
          this.setState({
              errorMessage:data.message
          })
      }
      console.log(data);
    }
    render() {
        return (
            <>
            <div className="w-75 mx-auto my-5">
              <form onSubmit={this.sendData}>
        
                <div className="form-group">
                    <input onChange={this.getFormData}  placeholder="Enter email" type="email" name="email" className="form-control" />
                </div>
                <div className="form-group">
                    <input  onChange={this.getFormData} placeholder="Enter you password" type="password" name="password" className="form-control" />
                </div>
                {this.state.errorMessage}
                <button type="submit" className="btn btn-info w-100">Login</button>
            </form>
                  
                  </div>  
                
            </>
        );
    }
}

export default Login;