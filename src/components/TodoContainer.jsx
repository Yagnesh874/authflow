import "./TodoContainer.css";
import { useState, useRef, useEffect, useContext } from "react";
import ThemeToggleButton from "../context/ThemeToggleButton";
import useLocalStorage from "../hooks/useLocalStorage";
import TodoItem from "./TodoItem";
let nextId = 0;

const TodoContainer = ({ todoList, setTodoList }) => {
  const [todoText, setTodoText] = useState("");
  const { bgColor, setBgColor } = useContext(ThemeToggleButton);
  const [filter, setFilter] = useState("all");

  const emptyStyle = {
    color: bgColor === "Dark Mode" ? "white" : "black",
  };

  const inputFocus = useRef(null);

  // auto-focus when component mounts
  useEffect(() => {
    inputFocus.current.focus();
  }, []);

  //Updates the input state as user types
  const onChangeInputValues = (e) => {
    setTodoText(e.target.value);
  };

  /*On Click:
 1. Adds the new todo to state
 2. Clears the input box
 3. Triggers ref to auto-focus again*/
  const onSubmitForm = (e) => {
    e.preventDefault();
    const trimmedText = todoText.trim();
    if (!trimmedText) {
      alert("Please Enter Task");
      return;
    }

    const isDuplicate = todoList.some(
      (list) => list.value.toLowerCase() === trimmedText.toLowerCase()
    );
    if (isDuplicate) {
      alert("Task already exists!");
      return;
    } else if (todoText.length < 4) {
      alert("Task is to short    (minimum 4 characters)");
      return;
    } else if (todoText.length >= 100) {
      alert("Too long task (maximum 100 characters)");
      return;
    } else {
      e.preventDefault();
      setTodoList([
        ...todoList,
        { id: nextId++, value: todoText, completed: false },
      ]);
      setTodoText("");
      inputFocus.current.focus();
    }
  };

  //Change Theme Code
  const handleThemeBgColor = () => {
    if (bgColor === "Light Mode") {
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      setBgColor("Dark Mode");
    } else {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      setBgColor("Light Mode");
    }
  };

  //Edit
  const handleEdit = (id, newValue) => {
    setTodoList((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, value: newValue } : todo))
    );
  };

  //Delete
  const handleDelete = (id) => {
    setTodoList((prev) => prev.filter((todo) => todo.id !== id));
  };

  //check complete or not
  const handleToggleComplete = (id) => {
    setTodoList((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const filteredTodos = todoList.filter((todo) => {
    if (filter === "all") return todo;
    if (filter === "completed") return todo.completed;
    if (filter === "incompleted") return !todo.completed;
    return true;
  });

  return (
    <>
      <div className="container">
        <header>
          <h1>My Tasks</h1>
          <button
            className="theme-toggle"
            id="themeToggle"
            onClick={handleThemeBgColor}
          >
            <span id="themeIcon">
              {bgColor === "Light Mode" ? " ☀️" : "🌙"}
            </span>
            <span id="themeText">{bgColor}</span>
          </button>
        </header>
        <form onSubmit={onSubmitForm}>
          <div className="add-todo">
            <input
              type="text"
              id={nextId}
              ref={inputFocus}
              value={todoText}
              onChange={onChangeInputValues}
              placeholder="Add a new task..."
            />
            <button id="addTodo">Add</button>
          </div>
        </form>

        <div className="filters">
          <button
            className="filter-btn active"
            style={{ backgroundColor: filter === "all" ? "#6c5ce7" : "" }}
            onClick={() => setFilter("all")}
            data-filter="all"
          >
            All
          </button>
          <button
            className="filter-btn"
            data-filter="completed"
            style={{ backgroundColor: filter === "completed" ? "#6c5ce7" : "" }}
            onClick={() => setFilter("completed")}
          >
            Completed
          </button>
          <button
            className="filter-btn"
            data-filter="incomplete"
            style={{
              backgroundColor: filter === "incompleted" ? "#6c5ce7" : "",
            }}
            onClick={() => setFilter("incompleted")}
          >
            Incomplete
          </button>
        </div>

        {filteredTodos.length === 0 ? (
          <div className="empty-state" style={emptyStyle}>
            No tasks yet. Add one above!
          </div>
        ) : (
          filteredTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onEdit={handleEdit}
              onDelete={handleDelete}
              onToggle={handleToggleComplete}
            />
          ))
        )}
      </div>
    </>
  );
};

export default TodoContainer;
