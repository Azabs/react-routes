import { Link } from "react-router-dom";
import { Markup } from "interweave";

function getFirstImgFromString(string) {
  let img = string.match(/<img.+\/>/);

  return img
    ? img[0]
    : '<img src="./img/placeholder.jpg" title="placeholder" />';
}

const Heading = (props) => {
  return (
    <div className="col-md-4 heading p-1">
      <div className="img-container">
        <Markup content={getFirstImgFromString(props.post.content)} />
      </div>
      <Link to={"/posts/" + props.post._id}>
        <h4 className="text p-3">{props.post.title}</h4>
      </Link>
    </div>
  );
};

export default Heading;
