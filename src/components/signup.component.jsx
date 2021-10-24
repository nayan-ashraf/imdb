import React from "react";
import Input from "./common/input.component";
import Form from './common/form.component';
import { register } from "../services/user-service";
import { ToastContainer } from 'react-toastify';


class SignUp extends Form {
  state = {
    data: {
      firstName: "",
      lastName: "",
      username: "",
      password: "",
    },
    errors: {
      firstName: "",
      lastName: "",
      username: "",
      password: "",
    }
  };

  doSubmit = async () => {
   
    const { firstName, lastName, username, password } = this.state.data;
    if(firstName !== '' && lastName !== '' && username !== '' && password !== '') {
            await register(this.state.data);
            this.props.history.push("/logIn");
    }
    else {
        const errors = {...this.state.errors};
        const data = { ...this.state.data };
        if(data.firstName === '') errors.firstName = 'First Name cannot be empty';
        if(data.lastName === '') errors.lastName = 'Last Name cannot be empty';
        if(data.username === '') errors.username = 'UserName cannot be empty';
        if(data.password === '') errors.password = 'Password cannot be empty';
        
        
        this.setState({...this.state, errors})
       
    }
  }



  render() {
    return (
      <div
        class="container mx-auto bg-light p-5 box-shadow"
        style={{ 'borderRadius': "0 20px 20px 0", 'width': "400px", 'minHeight': '450px' }}
      >
        <ToastContainer />
        <h4
          className="text-center pb-3 mb-5"
          style={{
            borderBottom: "2px dashed gray",
            textTransform: "uppercase",
          }}
        >
          Sign Up
        </h4>
        <form onSubmit={this.handleSubmit}>
          <div class="mb-3">
            <Input
              name="firstName"
              value={this.state.data.firstName}
              type="text"
              id="exampleInputEmail1"
              placeholder="First Name"
              onChange={(e) => this.changeHandler(e)}
              errors={this.state.errors}
            />
          </div>
          <div class="mb-3">
            <Input
              name="lastName"
              value={this.state.data.lastName}
              type="text"
              id="exampleInputEmail1"
              placeholder="Last Name"
              onChange={(e) => this.changeHandler(e)}
              errors={this.state.errors}
            />
          </div>
          <div class="mb-3">
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
          <div class="mb-3">
            <Input
              name="password"
              type="password"
              placeholder="Password"
              value={this.state.data.password}
              id="exampleInputPassword1"
              onChange={(e) => this.changeHandler(e)}
              errors={this.state.errors}
            />
          </div>

          <button
            type="submit"
            class="btn w-100 text-white mt-1"
            style={{
              backgroundColor: "#121212",
              textTransform: "uppercase",
              letterSpacing: "3px",
            }}
          >
            Create new account
          </button>
        </form>
      </div>
    );
  }
}

export default SignUp;
