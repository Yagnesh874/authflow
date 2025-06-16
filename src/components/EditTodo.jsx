import React from "react";

const EditTodo = ({ todo, onEdit }) => {
  const handleEdit = (e) => {
    const newText = prompt("Edit Your Task : ", e.target.value);
    if (newText !== null && newText.trim() !== "") {
      onEdit(todo.id, newText.trim());
    }
  };
  return (
    <>
      <button className="action-btn edit-btn" onClick={handleEdit}>
        Edit
      </button>
    </>
  );
};

export default EditTodo;
