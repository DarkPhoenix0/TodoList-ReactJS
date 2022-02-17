const app = require('express')()
const mongoose = require('mongoose')
const {ApolloServer} = require('apollo-server-express')
const {URI} = require('./config/db.config')

const Users = require('./models/user.model')
const Todos = require('./models/todo.model')

const typeDefs = require('./schemas/typeDefs')
const resolvers = require('./resolver/resolvers')

const PORT = 4000

const startServer = async () =>{
    const server = new ApolloServer({typeDefs, resolvers, context:{Users, Todos}})
    await server.start()

    await mongoose.connect(URI)
        .then(()=>{
            console.log('successfuly connect to mongodb...')})

    server.applyMiddleware({app, path : '/'})
    app.listen(PORT, ()=>{
        console.log(`server running on port ${PORT}`)})
}

startServer()