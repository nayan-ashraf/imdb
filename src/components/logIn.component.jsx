import React from "react";
import Input from './common/input.component';
import { login } from "../services/user-service";
import Form from "./common/form.component";
import { Link } from "react-router-dom";

import { ToastContainer } from 'react-toastify';


class LogIN extends Form {
  state = {
    data: {
      username: "",
      password: "",
    },
    errors: {     
      username: "",
      password: "",
    }
  };
  doSubmit =async () => {  
  try {
     await login(this.state.data);
    window.location = '/movies';
   }
    catch(e) {
      const errors = {...this.state.errors};      
      errors.username = 'username may be incorrect';
      errors.password = 'Password may be incorrect';
      this.setState({...this.state, errors})
    }
  };
  render() {
    return (
      
      <div class="container mx-auto bg-light p-5 box-shadow " style={{'borderRadius': '0 20px 20px 0', 'width': '400px', 'minHeight': '450px'}}>
         <h4 className="text-center pb-3 mb-5" style={{ 'borderBottom': '2px dashed gray', 'textTransform': 'uppercase'}}>Log In </h4>
              <form onSubmit={this.handleSubmit}>
              <ToastContainer />
          <div class="mb-3 mt-2">            
            <Input
              name="username"
              value={this.state.data.username}
              type="text"
              id="exampleInputEmail1"
              placeholder="User Name"
              onChange={(e) => this.changeHandler(e)}
              errors={this.state.errors}
            />
         
          </div>
          <div class="mb-3  mt-2">
            <Input
              name="password"
              type="password"
              placeholder="Password"
              value={this.state.data.passWord}
              id="exampleInputPassword1"
              onChange={(e) => this.changeHandler(e)}
              errors={this.state.errors}

            />
          </div>        
        
          <button type="submit" class="btn w-100 text-white mt-3" style={{'backgroundColor': '#121212',  'textTransform': 'uppercase', 'letterSpacing': '3px'}}>
            Submit
          </button>

          <div className="mt-4">Don't have an account?</div>
          <div className=""><Link to="/signUp">Create a new account</Link></div>
       
        </form>
         
       
      </div>
      
    );
  }
}

export default LogIN;
