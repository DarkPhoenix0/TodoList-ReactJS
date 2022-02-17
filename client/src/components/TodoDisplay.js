import React from 'react';
import './TodoDisplay.css'
const todos = require('../db/data')

function TodoDisplay({data, error, loading}) {

    if(loading) return <p>loading...</p>
    if(error) return <p>Error... :(</p>

    const todo = data.getTodos.map(todo =>{
            return (
                <div key={todo.id} className='todo'>
                    <input type="checkbox" name="" id="cc"/>
                    <label aria-label="cc">{todo.content}</label>
                </div>
            )
        }
    )

    return (
        <div className='todos'>
            {todo
                .length <= 1 ? <h2> Todos - <span>{todo.length}</span></h2> :
                    <h2> Todos - <span>{todo.length}</span></h2>
            }
            <ul >
                {todo}
            </ul>
        </div>
    );
}

export default TodoDisplay;