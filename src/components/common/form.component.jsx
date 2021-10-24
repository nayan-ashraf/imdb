import React from "react";
import { toast } from "react-toastify";
import { startCase } from "lodash";

class Form extends React.Component {
  state = {};

  handleSubmit = (e) => {
    e.preventDefault();
    this.doSubmit();
  }

  changeHandler = (e) => {
    const name = e.currentTarget.name;
    const value = e.target.value;
    const error = this.validateInput(name, value);
    const errors = { ...this.state.errors };

    errors[name] = error;

    const data = { ...this.state.data };
    data[name] = value;
    this.setState({ data, errors });
  };
  validateInput = (name, value) => {
    if (name) {
      if (value.trim() === "") {
        let errorMessage = startCase(`${name} cannot be empty. `);
        toast.error(errorMessage);
        return errorMessage;
      }
    }
    return "";
  };

  render() {
    return null;
  }
}

export default Form;
