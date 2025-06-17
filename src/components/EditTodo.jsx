import React, { useEffect, useRef, useState } from "react";
import "./TodoContainer.css"
const EditTodo = ({ todo, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.value); // initialize with existing value
  const inputRef = useRef(null);

  useEffect(() => {
    if (isEditing) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    if (editText.trim() !== "") {
      onEdit(todo.id, editText.trim());
    }
    setIsEditing(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSave();
    }
  };

  return (
    <>
      {isEditing ? (
        <input
          ref={inputRef}
          type="text"
          value={editText}
            className="edit-input"
          onChange={(e) => setEditText(e.target.value)}
          onBlur={handleSave}
          onKeyDown={handleKeyPress}
            // style={{ width: "200px", padding: "6px", fontSize: "16px" }}
        />
      ) : (
        <button className="action-btn edit-btn" onClick={handleEditClick}>
          Edit
        </button>
      )}
    </>
  );
};

export default EditTodo;
