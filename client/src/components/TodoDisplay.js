import React from 'react';
import './TodoDisplay.css'
const todos = require('../db/data')

function TodoDisplay(props) {

    const todo = todos.map(todo =>{
        return(
            <div key={todo.id} className='todo'>
                <input type="checkbox" name="" id="cc"/>
                <label aria-label="cc" >{todo.content}</label>
            </div>
        )
    })
    return (
        <div className='todos'>
            {todo.length <= 1 ? <h2> Todos - <span>{todo.length}</span></h2>:<h2> Todos - <span>{todo.length}</span></h2>}
            <ul >
                {todo}
            </ul>
        </div>
    );
}

export default TodoDisplay;