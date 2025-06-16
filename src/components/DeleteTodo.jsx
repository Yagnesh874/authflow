import React from 'react'

const DeleteTodo = ({todo , onDelete}) => {
    const handleDelete = () =>{
        if(window.confirm("Are you sure you want to delete this task?")){
            onDelete(todo.id)
        }
    }
  return (
    <>
        <button className='action-btn delete-btn' onClick={handleDelete}>Delete</button>
    
    </>
  )
}

export default DeleteTodo