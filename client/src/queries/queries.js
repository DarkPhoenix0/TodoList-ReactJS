import {gql} from "@apollo/client";

const getData = gql`
    {
        getTodos {
            id
            content
        }
    }
`

module.exports = getData