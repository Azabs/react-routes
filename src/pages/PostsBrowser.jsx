import React, { Component } from "react";
import PageNav from "../components/PageNav";
import axios from "axios";
import Post from "../components/Post";

//TODO: fix update page when url changes

class PostsBrowser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      currentPage: 1,
      firstPostNumber: 0,
      lastPostNumber: 5,
      amountOfPages: 1,
    };
  }

  //The axios.get() has to be changed once its uploaded to a website
  componentDidMount() {
    //Loads the posts from the database
    axios
      .get("http://192.168.0.8:5000/posts/")
      .then((res) => {
        this.setState({ posts: res.data });
        //Calculates how many pages should be
        this.setState({
          amountOfPages: Math.ceil(this.state.posts.length / 5),
        });
        //Checks wich posts should show
        this.changePageHandler(
          window.location.href.substring(
            window.location.href.indexOf("browser/") + 8
          ) - 1
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }

  changePageHandler = (page) => {
    let first = page * 5;
    let last = first + 5;
    this.setState({ firstPostNumber: first });
    this.setState({ lastPostNumber: last });
  };

  render() {
    return (
      <>
        <h1>Posts Browser</h1>
        <hr />
        <div className="posts-container">
          {this.state.posts
            .slice(this.state.firstPostNumber, this.state.lastPostNumber)
            .map((p) => {
              return <Post post={p} key={p.title} />;
            })}
        </div>
        <hr />
        <PageNav
          amount={this.state.amountOfPages}
          onPageChange={this.changePageHandler}
        />
      </>
    );
  }
}

export default PostsBrowser;
