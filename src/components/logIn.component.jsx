import React from "react";
class LogIN extends React.Component {
  state = {
    user: { userName: "", passWord: "" },
  };
  handleSubmit = (e) => {
    e.preventDefault();
  };
  changeHandler = (e) => {
    const username = e.target.value;

    const updatedUser = { ...this.state.user };
    updatedUser.userName = username;
    this.setState({ user: updatedUser });
  };
  render() {
    return (
      
      <div class="container w-25 mx-auto bg-light p-5" style={{'borderRadius': '0 20px 20px 0'}}>
         <h4 className="text-center pb-3 mb-5" style={{ 'borderBottom': '2px dashed gray', 'textTransform': 'uppercase'}}>Log In </h4>
              <form onSubmit={this.handleSubmit}>
   
          <div class="mb-3">            
            <input
              name="userName"
              value={this.state.user.userName}
              type="text"
              class="form-control shadow-none "
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              autoComplete="off"
              placeholder="User Name"
              style={{ 'border': 'none', 'outline': 'none', 'backgroundColor': 'transparent', 'border-bottom': '2px solid gray' }}
              onChange={(e) => this.changeHandler(e)}
            />
         
          </div>
          <div class="mb-3">
            <input
              type="password"
              class="form-control shadow-none"
              placeholder="Password"
              style={{ 'border': 'none', 'outline': 'none', 'backgroundColor': 'transparent', 'border-bottom': '2px solid gray' }}
              id="exampleInputPassword1"
            />
          </div>        
          
          <button type="submit" class="btn w-100 text-white" style={{'backgroundColor': '#121212',  'textTransform': 'uppercase', 'letterSpacing': '3px'}}>
            Submit
          </button>
       
        </form>
         
       
      </div>
      
    );
  }
}

export default LogIN;
