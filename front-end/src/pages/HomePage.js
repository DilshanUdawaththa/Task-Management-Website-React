import React from "react";
import axios from "axios";

const apiEndPoint = "https://jsonplaceholder.typicode.com/posts";

class HomePage extends React.Component {
  state = {
    posts: [],
  };

  async componentDidMount() {
    const { data: posts } = await axios.get(apiEndPoint);
    this.setState({ posts });
    console.log({ posts });
  }

  handleAdd = () => {
    const obj = { titlt: "a", body: "b" };
    axios.post(apiEndPoint);
  };

  render() {
    return (
      <>
        <h1>Hello, Welcome to my blog!</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ex
          molestias illo itaque culpa, suscipit reprehenderit perspiciatis error
          quia alias? Eaque, quis iste facilis aperiam itaque voluptates
          incidunt recusandae consequatur.
        </p>
      </>
    );
  }
}

export default HomePage;
