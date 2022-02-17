import React, {useState} from 'react';
import TodoDisplay from "./TodoDisplay";
import './TodoForm.css'
//const todos = require('../db/data')

import {useQuery, useMutation, gql} from '@apollo/client'

const getData = require('../queries/queries')

function TodoForm(props) {

    const {loading, error, data} = useQuery(getData)

    return (
        <div className='add_todo_form'>
            <form action="" >
                <input type="search" name="" id="" placeholder='write todo here ! ' />
                <button className='add_todo_btn'>Add</button>
            </form>
            <TodoDisplay data={data} loading={loading} error={error}/>
        </div>
    );
}

export default TodoForm;