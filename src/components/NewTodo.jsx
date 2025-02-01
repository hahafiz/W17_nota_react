import { useState } from "react";
import PropTypes from "prop-types";

const NewTodo = (props) => {
  /**
   * ✅ 1. Buat form
   * ✅ 2. Ada 2 input - title, desciption
   * ✅ 3. ada 1 button submit
   * 4. button klik -> onSubmit()
   * 5. extract input daripada form
   * 6. panggil API
   */
  const [title, setTitle] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // extract information
    const formContent = event.target.elements;
    const title = formContent.title.value;
    const description = formContent.description.value;

    // state management, or use API here
    console.log({
      title,
      description,
    });

    // pass information to parent
    props.addNewTodo({
      title,
      description,
    });

    event.target.reset();
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "0.5rem",
        padding: "1rem",
        borderRadius: "0.5rem",
      }}
      disabled={!title.trim()}
    >
      {/* TODO: ALIGN THE fieldset with button */}
      <fieldset
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
          border: "none",
        }}
      >
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          onChange={(event) => {
            setTitle(event.target.value);
          }}
          style={{
            padding: "0.5rem 0.75rem",
            borderRadius: "0.25rem",
            outline: "none",
          }}
          required
        />
      </fieldset>

      <fieldset
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
          border: "none",
        }}
      >
        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          name="description"
          style={{
            padding: "0.5rem 0.75rem",
            borderRadius: "0.25rem",
            outline: "none",
          }}
        />
      </fieldset>

      <button type="submit" className="submit" disabled={!title.trim()}>
        Submit
      </button>
    </form>
  );
};

NewTodo.propTypes = {
  addNewTodo: PropTypes.func,
};

export default NewTodo;
