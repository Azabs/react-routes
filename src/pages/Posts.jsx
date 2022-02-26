import React, { Component } from "react";
import axios from "axios";

class Posts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      post: {
        title: "",
        date: "",
        content: "",
      },
    };
  }
  //The axios.get() has to be changed once its uploaded to a website
  componentDidMount() {
    axios
      .get(
        "http://192.168.0.3:5000" +
          window.location.href.substring(
            window.location.href.indexOf("3000/") + 4
          )
      )
      .then((res) => {
        this.setState({ post: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="my-4 post">
        <div className="date">{this.state.post.date.substring(0, 10)}</div>
        <h3 className="title my-3">
          <b>{this.state.post.title}</b>
        </h3>
        <div className="content text-justify mb-3">
          {this.state.post.content}
        </div>
        <hr />
        <section className="text-center">
          <a className="btn btn-link btn-lg text-dark mx-2" href="#!">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a className="btn btn-link btn-lg text-dark mx-2" href="#!">
            <i className="fab fa-twitter"></i>
          </a>
          <a className="btn btn-link btn-lg text-dark mx-2" href="#!">
            <i className="fab fa-instagram"></i>
          </a>
          <a className="btn btn-link btn-lg text-dark mx-2" href="#!">
            <i className="fab fa-linkedin"></i>
          </a>
          <a className="btn btn-link btn-lg text-dark mx-2" href="#!">
            <i className="fab fa-github"></i>
          </a>
        </section>
      </div>
    );
  }
}

export default Posts;
