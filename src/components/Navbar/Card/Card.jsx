import { useState } from "react";
import "./Card.css";
import { Link } from "react-router-dom";

export const Card = (props) => {
  const [linkRoute, setLinkRoute] = useState(`/movie/${props.props._id}`);

  return (
    <>
      <Link to={linkRoute}>
        <img src={props.props.banner} alt="Banner Image" className="banner" />
      </Link>
    </>
  );
};
