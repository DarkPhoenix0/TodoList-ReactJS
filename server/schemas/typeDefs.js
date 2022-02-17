const {gql} = require('apollo-server-express')

const typeDefs = gql`
    
    enum todoStatus{
        UNDONE
        DONE
    }
    
    type Todo{
        id:ID!
        content : String!
        status : todoStatus!
        createdAt : String!
    }
    
    type Query{
        hello : String!
        getTodos : [Todo]!
    }
    
    input addTotoInput{
        content : String!
    }
    
    type Mutation{
        addTodo(add:addTotoInput): Todo!
    }
`

module.exports = typeDefs