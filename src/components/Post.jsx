import { Link } from "react-router-dom";

const onClick = (url) => {
  console.log("onClick handler called by " + url);
};

const Post = (props) => {
  return (
    <div className="my-4 post">
      <h3 className="title">
        <Link
          to={"/posts/" + props.post._id}
          onClick={() => onClick(props.post._id)}
        >
          <b>{props.post.title}</b>
        </Link>
      </h3>
      <p className="summary text-justify">
        {props.post.content.substring(0, 400)}...
      </p>
      <div className="d-flex justify-content-between">
        <span className="date">{props.post.date.substring(0, 10)}</span>
        <Link to={"/posts/" + props.post._id}>Read More...</Link>
      </div>
    </div>
  );
};

export default Post;
