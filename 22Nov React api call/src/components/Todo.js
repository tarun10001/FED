import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function Todo() {

    const [inputVal, setInputVal] = useState('');
    const [items, setItems] = useState([]);
    const [editItem, setEditItem] = useState("");
    const [toggleBtn, setToggleBtn] = useState(false);

    const handleSubmit = () => {
        if (!inputVal) {
            alert('Please fill the data');
        }

        else if (inputVal && toggleBtn) {
            setItems(
                items.map((elem) => {
                    if (items.id === editItem) {
                        return (elem, name:inputVal)
                    }
                    return elem;
                })
            )
        }

        else {
            const newInput = {
                id: new Date().getTime().toString(),
                name: inputVal
            }
            setItems([...items, newInput]);
            setInputVal("")
        }
    }

    const deleteItem = (tarun) => {
        const updatedList = items.filter((data) => {
            return data.id !== tarun;
        })
        setItems(updatedList);
    }

    const clr = () => {
        setItems([]);
    }



    const edit = (index) => {
        const item_edit = items.find((elem) => {
            return elem.id === index;
        });
        setInputVal(item_edit.name)
        setEditItem(index);
        setToggleBtn(true)
    }

    return (
        <div>

            <div>
                <input type="text" value={inputVal} placeholder="Enter Something..." onChange={(e) => setInputVal(e.target.value)}
                />
                {toggleBtn ?
                    <button onClick={handleSubmit} type="submit"><i className="fa fa-edit add-btn"></i></button>
                    :
                    <button onClick={handleSubmit} type="submit"><i className="fa fa-plus add-btn"></i></button>
                }
            </div>

            <div className="show_items">
                {items.map((elem, index) => {
                    return (

                        <div className="eachItem" key={index}>
                            <h3>{elem.name}</h3>
                            <div className="todo_btn">
                                <i className="fa fa-edit add-btn" onClick={() => edit(elem.id)}></i>
                                <i className="fa fa-trash trash-btn" onClick={() => deleteItem(elem.id)}></i> //120
                            </div>
                        </div>
                    )
                })}
            </div>
            <button onClick={clr}>Clear All</button>

        </div>
    )
}

export default Todo;