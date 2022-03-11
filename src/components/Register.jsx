import React, { Component } from 'react'
import axios from 'axios'
export default class Register extends Component {
    user={
        first_name:"",
        last_name:"",
        email:"",
        password:"",

    }
    getFormData = (e) => {
        this.user[e.target.name]=e.target.value
        console.log(this.user)
    }
    sendData=async (e) => {
        e.preventDefault()
    

      let {data} =await axios.post("",this.user)
      if(data.message=="success"){
          e.target.reset()
      }
      console.log(data);
    }
    render() {
        return (
            <>
              <div className="w-75 mx-auto my-5">
              <form onSubmit={this.sendData}>
                <div className="form-group">
                    <input onChange={this.getFormData}  placeholder="Enter First name" name="first_name" type="text" className=" form-control" />
                </div>
                <div className="form-group">
                    <input onChange={this.getFormData} placeholder="Enter Last name" name="last_name" type="text" className=" form-control" />
                </div>
                <div className="form-group">
                    <input onChange={this.getFormData}  placeholder="Enter email" type="email" name="email" className="form-control" />
                </div>
                <div className="form-group">
                    <input  onChange={this.getFormData} placeholder="Enter you password" type="password" name="password" className="form-control" />
                </div>
                <div className="form-group">
                    <input  onChange={this.getFormData} placeholder="confirm Password" type="password" name="confirmPassword" className="form-control" />
                </div>
                <button type="submit" className="btn btn-info w-100">Register</button>
            </form>
                  
                  </div>  
            </>
        )
    }
}
