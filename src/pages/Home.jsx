import React, { Component } from "react";
import Heading from "../components/Heading";
import Post from "../components/Post";

class Home extends Component {
  render() {
    return (
      <>
        <div className="text-center my-5 row justify-content-center">
          {this.props.img.map((i) => {
            return <Heading img={i} key={i.name} />;
          })}
        </div>
        <div className="posts-container">
          {this.props.posts.map((p) => {
            return <Post post={p} key={p.title} />;
          })}
        </div>
      </>
    );
  }
}

export default Home;
