import React from "react";
import EditTodo from "./EditTodo";
import DeleteTodo from "./DeleteTodo";
import "./TodoContainer.css";

const TodoItem = ({ todo, onEdit, onDelete, onToggle }) => {
  return (
    <>
      <div className="todo-item">
        <input
          type="checkbox"
          className="todo-checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
        <span
          className="todo-text"
          style={{
            textDecoration: todo.completed ? "line-through" : "none",
            color: todo.completed ? "grey" : "inherit",
          }}
        >
          {todo.id} : {todo.value}
        </span>
        <div className="todo-actions">
          {todo.completed ? (
            <DeleteTodo todo={todo} onDelete={onDelete} />
          ) : (
            <>
              <EditTodo todo={todo} onEdit={onEdit} />
              <DeleteTodo todo={todo} onDelete={onDelete} />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default TodoItem;
