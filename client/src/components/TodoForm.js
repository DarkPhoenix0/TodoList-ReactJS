import React, {useState} from 'react';
import TodoDisplay from "./TodoDisplay";
import './TodoForm.css'
const todos = require('../db/data')

function TodoForm(props) {

    const [todo, setTodos] = useState([todos])

    const getTodo = (e) =>{
        const newTodo = e.target.value
        return newTodo
    }
    const sendTodo = (e) =>{
        e.preventDefault()
        const newTodo = {id: 4, title: 'try', content: 'bonjour'}
        setTodos(preventState =>{
            return {...preventState, ...newTodo}
        }
    )

    }
        console.log(todo)

    return (
        <div className='add_todo_form'>
            <form action="" onSubmit={sendTodo}>
                <input type="search" name="" id="" placeholder='write todo here ! ' onChange={getTodo}/>
                <button className='add_todo_btn'>Add</button>
            </form>
            <TodoDisplay/>
        </div>
    );
}

export default TodoForm;