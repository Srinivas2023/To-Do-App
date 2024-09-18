import React from 'react';

const ToDoItem = ({ item, onEdit, onDelete }) => {
    return (
        <div className="eachItem">
            <h3>{item.name}</h3>
            <i className="fa-solid fa-pen-to-square edit-btn" title='Edit Item' onClick={onEdit}></i>
            <i className="fa-solid fa-trash-can del-btn" title='Delete Item' onClick={onDelete}></i>
        </div>
    );
}

export default ToDoItem;
