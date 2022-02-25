import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Posts from "./pages/Posts";
import NoPage from "./pages/NoPage";

//TODO: find why the posts no longer load

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      img: [
        { name: "window", url: "./img/window.jpg" },
        { name: "louvre", url: "./img/louvre.jpg" },
        { name: "city", url: "./img/city.jpg" },
      ],
      posts: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/posts/")
      .then((res) => {
        this.setState({ posts: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={<Home img={this.state.img} posts={this.state.posts} />}
            />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="posts/*" element={<Posts />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
