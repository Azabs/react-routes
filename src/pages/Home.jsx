import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Heading from "../components/Heading";
import Post from "../components/Post";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }

  //The axios.get() has to be changed once its uploaded to a website
  componentDidMount() {
    axios
      .get("http://192.168.0.8:5000/posts/")
      .then((res) => {
        this.setState({ posts: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <>
        <div className="text-center my-5 row justify-content-center">
          {this.state.posts.slice(0, 3).map((p) => {
            return <Heading post={p} key={p.title} />;
          })}
        </div>
        <div className="posts-container">
          {this.state.posts.slice(3, 6).map((p) => {
            return <Post post={p} key={p.title} />;
          })}
          <br />
          <Link to="/postsbrowser/1" className="no-u-hover">
            <h2 className="mb-4 text-center">
              <u>Read more posts</u>
            </h2>
          </Link>
        </div>
      </>
    );
  }
}

export default Home;
