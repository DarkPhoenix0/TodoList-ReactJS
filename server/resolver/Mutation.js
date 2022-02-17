const parseDate = (date)=>{
    const newDate = date.split('T')[0].split('-')
    const hour = date.split('T')[1].split('.')[0]

    const [year, mouth, day] = newDate
    return [day, mouth, year].join('/') + ' '+ hour
}

const Mutation = {
    addTodo: async (_, {add:{content}, createdAt, status}, {Todos}) =>{
        const newTodo = await Todos.findOne({content})
        if(newTodo){
            throw new Error('this Todo already exist !')
        }
        const todo = new Todos({content, createdAt:parseDate(new Date().toISOString()), status:'UNDONE'})
        await todo.save()
        return todo
    }
}

module.exports = Mutation