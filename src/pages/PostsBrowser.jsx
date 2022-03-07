import React, { Component } from "react";
import PageNav from "../components/PageNav";
import axios from "axios";
import Post from "../components/Post";

//TODO: Make it so that when an invalid URL is written the NoPage page will be shown

class PostsBrowser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      currentPage: 0,
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

  componentDidUpdate(prevProps, prevState) {
    if (prevState.currentPage !== this.state.currentPage) {
      this.updatePageHandler();
    }
  }

  componentWillUnmount() {
    this.setState = (state, callback) => {
      return;
    };
  }

  urlListener() {
    setInterval(() => {
      let newpage =
        window.location.href.substring(
          window.location.href.indexOf("browser/") + 8
        ) - 1;
      if (this.state.currentPage !== Number(newpage))
        this.setState({ currentPage: newpage });
    }, 500);
  }

  updatePageHandler = () => {
    if (typeof this.state.currentPage === "number") {
      let first = this.state.currentPage * 5;
      let last = first + 5;
      this.setState({ firstPostNumber: first });
      this.setState({ lastPostNumber: last });
    }
  };

  changePageHandler = (page) => {
    this.setState({ currentPage: page });
  };

  render() {
    return (
      <>
        <h1>Posts Browser</h1>
        <PageNav
          amount={this.state.amountOfPages}
          onPageChange={this.changePageHandler}
        />
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
        {this.urlListener()}
      </>
    );
  }
}

export default PostsBrowser;
