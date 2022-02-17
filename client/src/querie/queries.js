import {gql} from "@apollo/client";

const getData = gql`
    {
        getTodos {
            id
            content
            createdAt
        }
    }
`

module.exports = getData