import { useState } from "react";
import Card from "./components/Card";
import NewTodo from "./components/NewTodo";

function App() {
  const [todos, setTodos] = useState([]);
  const [test, setTest] = useState(false);

  const handleAddNewTodo = ({ title, description }) => {
    const newTodoItem = {
      id: Math.random().toString(),
      title,
      description,
      checked: false,
    };

    setTodos((prevTodo) => {
      // copy the prev list, add newTodoItem at the end of the array
      return [...prevTodo, newTodoItem];
    });
  };

  return (
    <>
      {/* debugging purpose only: to view the data*/}
      {/* <pre>{JSON.stringify(todos, null, 2)}</pre> */}

      <NewTodo addNewTodo={handleAddNewTodo} />
      {todos.map((todo) => {
        return (
          <Card
            id={todo.id}
            key={todo.id}
            title={todo.title}
            description={todo.description}
            checked={todo.checked}
            toggleDone={(event) => {
              setTest(event.target.checked);
            }}
          />
        );
      })}
    </>
  );
}

export default App;
