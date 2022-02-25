const Heading = (props) => {
  return (
    <div className="col-md-4 heading p-1">
      <div className="img-container">
        <img src={props.img.url} alt={props.img.name} />
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna.
      </p>
    </div>
  );
};

export default Heading;
