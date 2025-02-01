import PropTypes from "prop-types";

const NewTodo = (props) => {
  /**
   * 1. Buat form
   * 2. Ada 2 input - title, desciption
   * 3. ada 1 button submit
   * 4. button klik -> onSubmit()
   * 5. extract input daripada form
   * 6. panggil API
   */
  return (
    <form>
      <label htmlFor="title">Title</label>
      <input type="text" id="title" name="title" />

      <label htmlFor="description">Description</label>
      <input type="text" id="description" name="description" />

      <button type="submit">Submit</button>
    </form>
  );
};

NewTodo.propTypes = {};

export default NewTodo;
