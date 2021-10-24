import React from "react";

class SettingsIcon extends React.Component {
        state = {
                clicked: false
        }
        handleClick = () => {
                const clickValue = this.state.clicked;
                this.setState({clicked: !clickValue});
        }
  render() {
    return (
      <>
        <span
          style={{
            display: "block",
            position: "absolute",
            top: "100px",
            right: "10px",
            cursor: "pointer",
          }}
          onClick={this.handleClick}
        >
          <i class="fas fa-cog fa-spin fa-2x text-white"></i>
        </span>
        <span className={this.state.clicked===true?"bg-white":"bg-white d-none"}
          style={{
            display: "block",
            position: "absolute",
            top: "100px",
            right: "35px",
            cursor: "pointer",
            height: "auto",
            width: "100px",
            padding: "20px",
          }}
        >
          <i class="fas fa-cog fa-spin "></i>
        </span>
      </>
    );
  }
}

export default SettingsIcon;
