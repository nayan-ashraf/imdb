import React from "react";
import Input from "./common/input.component";
import Form from "./common/form.component";
import { ToastContainer } from "react-toastify";

class AddMovies extends Form {
  state = {
    data: {
   title: '',
   poster: '',
   rating: ''
    },
    errors: {
    title: '',
    poster: '',
    rating: ''
    },
  };
  render() {
    return (
      <div
        class="container mx-auto bg-light p-5 box-shadow"
        style={{ 'borderRadius': "0 20px 20px 0", 'width': "400px" , 'minHeight': '430px'}}
      >
        <h4
          className="text-center pb-3 mb-5"
          style={{
            borderBottom: "2px dashed gray",
            textTransform: "uppercase",
          }}
        >
          Add New Movie
        </h4>
        <form onSubmit={this.handleSubmit}>
          <ToastContainer />

          <div class="mb-3">
            <Input
              name="title"
              value={this.state.data.title}
              type="text"
              id="exampleInputEmail1"
              placeholder="Movie Name"
              onChange={(e) => this.changeHandler(e)}
              errors={this.state.errors}
            />
          </div>
          <div class="mb-3">
            <Input
              name="poster"
              value={this.state.data.poster}
              type="text"
              id="exampleInputEmail1"
              placeholder="Poster Url"
              onChange={(e) => this.changeHandler(e)}
              errors={this.state.errors}
            />
          </div>
          <div class="mb-3">
            <Input
              name="rating"
              value={this.state.data.rating}
              type="text"
              id="exampleInputEmail1"
              placeholder="Rating"
              onChange={(e) => this.changeHandler(e)}
              errors={this.state.errors}
            />
          </div>

          <button
            type="submit"
            class="btn w-100 text-white mt-3"
            style={{
              backgroundColor: "#121212",
              textTransform: "uppercase",
              letterSpacing: "3px",
            }}
          >
            Add New Movie
          </button>
        </form>
      </div>
    );
  }
}

export default AddMovies;
