import { useState } from "react";
import Card from "./components/Card";
import NewTodo from "./components/NewTodo";

function App() {
  const [todos, setTodos] = useState([]);
  const [test, setTest] = useState(false);

  return (
    <>
      <NewTodo />
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
      <Card
        id={todos.id}
        key={todos.id}
        title={todos.title}
        description={todos.description}
        checked={todos.checked}
        toggleDone={(event) => {
          setTest(event.target.checked);
        }}
      />
    </>
  );
}

export default App;
