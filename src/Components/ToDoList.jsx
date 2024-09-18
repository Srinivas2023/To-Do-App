import React, { useState, useEffect } from 'react';
import todo from "../todolist.jpg";
import ToDoItem from './ToDoItem';
import AddItemForm from './AddItemForm';
const ToDoList = () => {
    const [inputData, setInputData] = useState("");
    const [toggleSubmit, setToggleSubmit] = useState(true);
    const [items, setItems] = useState([]);
    const [isEditItem, setIsEditItem] = useState(null);
    useEffect(() => {
        // Set the title when the component mounts
        document.title = "Todo App";

        // Set the favicon
        const favicon = document.querySelector('link[rel="icon"]');
        if (favicon) {
            favicon.href = `${process.env.PUBLIC_URL}/favicon.ico`;
        }
    }, []);
    const addItem = () => {
        if (!inputData) {
            alert("Please fill in the data...");
            return;
        }

        if (inputData && !toggleSubmit) {
            setItems((prevItems) => {
                return prevItems.map((elem) => {
                    if (elem.id === isEditItem) {
                        return { ...elem, name: inputData };
                    }
                    return elem;
                });
            });
            setToggleSubmit(true);
            setInputData("");
            setIsEditItem(null);
        } else {
            const allInputData = { id: new Date().getTime().toString(), name: inputData };
            setItems([...items, allInputData]);
            setInputData('');
        }
    }

    const deleteItem = (index) => {
        const updatedItems = items.filter((elem) => {
            return index !== elem.id;
        });
        setItems(updatedItems);
    }

    const editItem = (id) => {
        let newEditItem = items.find((elem) => {
            return elem.id === id;
        });
        setToggleSubmit(false);
        setInputData(newEditItem.name);
        setIsEditItem(id);
    }

    const removeAll = () => {
        setItems([]);
    }

    return (
        <>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        <img src={todo} alt="todo" />
                        <figcaption>Add Your List Here 👇</figcaption>
                    </figure>
                    <AddItemForm
                        onSubmit={addItem}
                        toggleSubmit={toggleSubmit}
                        inputValue={inputData}
                        setInputValue={setInputData}
                    />
                    <div className="showItems">
                        {items.map((elem) => (
                            <ToDoItem
                                key={elem.id}
                                item={elem}
                                onEdit={() => editItem(elem.id)}
                                onDelete={() => deleteItem(elem.id)}
                            />
                        ))}
                    </div>
                    <div className="showItem">
                        <button className='btn effect04' data-sm-link-text="Remove All" onClick={removeAll}>
                            <span className="button-text">Check List</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ToDoList;
