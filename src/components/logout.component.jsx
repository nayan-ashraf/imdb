import React from "react";

class Logout extends React.Component {
  componentDidMount() {
    localStorage.removeItem("accessToken");
    window.location = "/logIn";
  }
  render() {
    return null;
  }
}

export default Logout;
