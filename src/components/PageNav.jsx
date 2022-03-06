import { Alert } from "bootstrap";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class PageNav extends Component {
  state = {
    links: [],
  };

  componentDidMount() {
    for (let i = 0; i <= this.props.amount; ++i) {
      this.state.links[i] = (
        <Link
          to={"/postsbrowser/" + (i + 1)}
          key={"page_" + (i + 1)}
          onClick={() => this.props.onPageChange(i)}
          className="mx-2"
        >
          {i + 1}
        </Link>
      );
    }
  }

  render() {
    return (
      <div>
        <h3 className="text-center">
          <Link to="/postsbrowser/1" onClick={() => this.props.onPageChange(0)}>
            {"<<"}
          </Link>
          {this.state.links.map((n) => n)}
          <Link
            to={"/postsbrowser/" + this.props.amount}
            onClick={() => this.props.onPageChange(this.props.amount - 1)}
          >
            {">>"}
          </Link>
        </h3>
      </div>
    );
  }
}

export default PageNav;
