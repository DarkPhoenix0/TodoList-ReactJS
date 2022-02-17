import React from 'react';
import './TodoDisplay.css'

import DeleteIcon from '@mui/icons-material/Delete';
import UpdateIcon from '@mui/icons-material/Update';
import IconButton from '@mui/material/IconButton';

function TodoDisplay({data, error, loading}) {

    if(loading) return <p>loading...</p>
    if(error) return <p>Error... :(</p>

    const todo = data.getTodos.map(todo =>{
            return (
                <div key={todo.id} className='todo'>
                    <div className="todo_right_side">
                        <div>
                            <input type="checkbox" name="" id="cc"/>
                            <label aria-label="cc">{todo.content}</label>
                        </div>
                        <p>Ajouté le : {todo.createdAt}</p>
                    </div>

                    <div>
                        <IconButton aria-label="delete">
                            <UpdateIcon/>
                        </IconButton>
                        <IconButton aria-label="delete">
                            <DeleteIcon />
                        </IconButton>
                    </div>
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