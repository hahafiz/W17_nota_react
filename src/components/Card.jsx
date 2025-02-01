import PropTypes from "prop-types";

const Card = (props) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "0.5rem 1rem",
      }}
    >
      <div>
        <h2>Hello</h2>
        <p>Test this out</p>
      </div>
      <input type="checkbox"></input>
    </div>
  );
};

Card.propTypes = {};

export default Card;
