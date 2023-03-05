import "../Practice.css";

const Star = (props) => {
    let starIcon = props.isFilled ? "filled.png" : "empty.png";
  return (
    <div>
      {props.children}
      <img
        src={require(`../img/${starIcon}`)}
        className="card--favorite"
        onClick={props.handleClick}
      />
    </div>
  );
};

export default Star;
