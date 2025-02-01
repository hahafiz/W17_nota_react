import PropTypes from "prop-types";

const Card = (props) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        border: "1px solid #666",
        borderRadius: "0.5rem",
        padding: "0.5rem 1rem",
      }}
    >
      <label
        htmlFor={props.id}
        style={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          gap: "0.325rem",
          textDecoration: props.checked ? "line-through" : "none",
        }}
      >
        <h2
          style={{
            fontSize: "1rem",
            fontWeight: "bold",
          }}
        >
          {props.title}
        </h2>
        <p
          style={{
            fontSize: "0.625rem",
          }}
        >
          {props.description}
        </p>
      </label>
      <input
        type="checkbox"
        name={props.id}
        id={props.id}
        checked={props.checked}
        onChange={props.toggleDone}
      ></input>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.number,
  checked: PropTypes.bool,
  title: PropTypes.string,
  description: PropTypes.string,
  toggleDone: PropTypes.bool,
};

export default Card;
