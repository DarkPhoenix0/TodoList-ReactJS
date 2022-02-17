const Query = {
    hello : () =>{return 'Hello World !'},
    getTodos: async (_, __, {Todos})=>{
        const todos = await Todos.find()
        return todos
    }
}

module.exports = Query