import TodoContainer from "./components/TodoContainer";
import { useEffect, useState } from "react";
import ThemeToggleButton from "./context/ThemeToggleButton";
import "./App.css";
import useLocalStorage from "./hooks/useLocalStorage";
import EditTodo from "./components/EditTodo";
import DeleteTodo from "./components/DeleteTodo";

function App() {
  const [bgColor, setBgColor] = useLocalStorage("theme" , "Light Mode")
  const [todoList, setTodoList] = useLocalStorage("todos",[]);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList]);

  useEffect(()=>{
    document.body.style.backgroundColor = bgColor === "Light Mode" ? "white" : "black";
    document.body.style.color = bgColor === "Light Mode" ?  "" : "black"
  },[bgColor])
  return (
    <>
      <ThemeToggleButton.Provider value={{ bgColor, setBgColor }}>
        <TodoContainer todoList={todoList} setTodoList={setTodoList} />
      </ThemeToggleButton.Provider>
    </>
  );
}

export default App;
