const app = require('express')()
const {ApolloServer} = require('apollo-server-express')

const PORT = 4000

const startServer = () =>{
    const server = new ApolloServer()
    server.start()

    server.applyMiddleware({app, path : '/'})
    app.listen(PORT, ()=>{
        console.log(`server running on port ${PORT}`)})
}

startServer()