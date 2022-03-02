import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Markup } from "interweave";
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
        "http://192.168.0.7:5000" +
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
        <h3 className="title my-4">
          <b>{this.state.post.title}</b>
        </h3>
        <div className="content text-justify">
          <Markup content={this.state.post.content} />
        </div>
        <hr />
        <section className="text-center my-3">
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
        <div className="d-flex justify-content-between">
          <Link to="#" className="btn btn-primary btn-lg btn-block mr-1 my-0">
            prev
          </Link>
          <Link to="#" className="btn btn-primary btn-lg btn-block ml-1 my-0">
            next
          </Link>
        </div>
      </div>
    );
  }
}

export default Posts;
