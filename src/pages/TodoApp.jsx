import React, { useState } from 'react';


const TodoApp = () => {
    const [value, setValue] = useState('');
    const [id, setID] = useState(0);
    const [todos, setToDos] = useState([])
    const [messageError, setMessageError] = useState('');
    const [idUpdate, setIdUpdate] = useState(-1);
    const [valueUpdate, setValueUpdate] = useState('');
    const handleCreateNewToDo = (e) => {
        e.preventDefault();
        if (!value.trim()) {
            setMessageError("Input is empty!");
        } else {
            let newTodo = { id: id, value: value }
            setID(id + 1);
            setToDos([...todos, newTodo])
            setValue('');
            setMessageError('');
        }
    }
    const handleDeleteTodo = (id) => {
        setToDos(todos.filter(items => items.id != id));
    }
    const handleShowInputUpdateTodo = id => {
        setIdUpdate(id);
        setValueUpdate(todos[id].value);
    }

    const handleClickUpdate = () => {
        todos[idUpdate].id = idUpdate;
        todos[idUpdate].value = valueUpdate
        setToDos(todos);
        setIdUpdate(-1)
    }

    return (
        <div className='toDoApp'>
            <h3>What's the Plan for Today</h3>
            <form action="" className='form'>
                <input onChange={(e) => setValue(e.target.value)} className='inp' type="text" placeholder='Add a todo' value={value} />
                <button onClick={handleCreateNewToDo} className='btn'>Add Todo</button>
            </form>
            <div className='messageError'>{messageError}</div>
            {
                todos.length > 0 && todos.map((t) => (
                    !(t.id == idUpdate) ?
                        <div key={t.id} className='toDoRow'>
                            <div>{t.value}</div>
                            <div className='icons'>
                                <i className="fa-solid fa-trash" onClick={() => handleDeleteTodo(t.id)}></i>
                                <i className="fa-solid fa-pen-to-square" onClick={() => handleShowInputUpdateTodo(t.id)} ></i>
                            </div>
                        </div>
                        :
                        <div key={t.id} className='form'>
                            <input onChange={(e) => setValueUpdate(e.target.value)} className='inp inpShow' value={valueUpdate} type="text" />
                            <button onClick={handleClickUpdate} className='btn btnShow'>Update</button>
                        </div>
                ))
            }
        </div>
    );
};

export default TodoApp;