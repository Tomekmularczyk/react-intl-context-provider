import React from "react";

class HelloWorld extends React.Component {
  state = {
    message: "Hello world!"
  };

  render() {
    return <h1>{this.state.message}</h1>;
  }
}

export default HelloWorld;
