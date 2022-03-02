import { Link } from "react-router-dom";
import { Markup } from "interweave";

const Post = (props) => {
  return (
    <div className="my-4 post">
      <h3 className="title">
        <Link to={"/posts/" + props.post._id}>
          <b>{props.post.title}</b>
        </Link>
      </h3>
      <p className="summary text-justify">
        <Markup content={props.post.content.substring(0, 400) + "..."} />
      </p>
      <div className="d-flex justify-content-between">
        <span className="date">{props.post.date.substring(0, 10)}</span>
        <Link to={"/posts/" + props.post._id}>Read More...</Link>
      </div>
    </div>
  );
};

export default Post;
