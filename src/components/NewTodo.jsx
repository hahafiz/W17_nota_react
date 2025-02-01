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
  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "0.5rem",
        padding: "1rem",
        borderRadius: "0.5rem",
      }}
    >
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
          style={{
            padding: "0.5rem 0.75rem",
            borderRadius: "0.25rem",
            outline: "none",
          }}
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

      <button type="submit">Submit</button>
    </form>
  );
};

NewTodo.propTypes = {};

export default NewTodo;
