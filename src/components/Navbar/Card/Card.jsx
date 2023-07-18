import "./Card.css";

export const Card = (props) => {
  return (
    <>
      <img src={props.props.banner} alt="Banner Image" className="banner" />
    </>
  );
};
