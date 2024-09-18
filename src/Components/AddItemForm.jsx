import React from 'react';

const AddItemForm = ({ onSubmit, toggleSubmit, inputValue, setInputValue }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit();
    }

    return (
        <div className="addItems">
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='✍️ Add Items...' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                {
                    toggleSubmit ? <button type="submit" className="fa-solid fa-plus add-btn" title='Add Item'></button> :
                        <button type="submit" className="fa-solid fa-pen-to-square edit-btn" title='Update Item'></button>
                }
            </form>
        </div>
    );
}

export default AddItemForm;
