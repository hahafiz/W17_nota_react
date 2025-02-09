import { useEffect, useState } from "react";
import Card from "./components/Card";
import NewTodo from "./components/NewTodo";
import RegisterUser from "./components/RegisterUser";
import { getTodoList } from "./api/todo";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoList, setTodoList] = useState();

  const token = window.localStorage.getItem("token");

  const getTodoListFromApi = async () => {
    const data = await getTodoList();
    setTodoList(data);
  };

  useEffect(() => {
    getTodoListFromApi();
  }, [todos]);

  const generateRandomHex = () => {
    return Math.floor(Math.random() * 16777215).toString(16);
  };

  const handleAddNewTodo = ({ title, description }) => {
    const newTodoItem = {
      id: generateRandomHex(),
      title,
      description,
      checked: false,
    };

    setTodos((prevTodo) => {
      // copy the prev list, add newTodoItem at the end of the array
      return [...prevTodo, newTodoItem];
    });

    // TODO: call API untuk create TODO
  };

  const handleChecked = (event) => {
    const targetId = event.target.id;
    const targetChecked = event.target.checked;

    // console.log("id >>>>", event.target.id);
    // console.log("id >>>>", event.target.checked);

    setTodos((prevTodo) => {
      const updatedTodos = prevTodo.map((todo) => {
        // return early if id not match - we don't want to change anything to it
        // return early pattern
        if (todo.id !== targetId) {
          return todo;
        }

        // since id is matched, we change the checked
        const updatedItem = {
          ...todo, // copy existing todo item
          checked: targetChecked, // update checked
        };

        // return updated item
        return updatedItem;
      });

      return updatedTodos;
    });

    // TODO: call API untuk create TODO
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        padding: "2rem",
      }}
    >
      {/* debugging purpose only: to view the data*/}
      {/* <pre>{JSON.stringify(todos, null, 2)}</pre> */}

      <pre>{JSON.stringify(todoList, null, 2)}</pre>
      {!token && <RegisterUser />}
      <NewTodo addNewTodo={handleAddNewTodo} />
      {todoList?.map((todo) => {
        return (
          <Card
            id={todo._id}
            key={todo._id}
            title={todo.title}
            description={todo.description}
            checked={todo.completed}
            toggleDone={handleChecked}
          />
        );
      })}
    </div>
  );
}

export default App;
