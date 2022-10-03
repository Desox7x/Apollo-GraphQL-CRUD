const { gql } = require("apollo-server-express");

/*
Queries: Sirven para hacer consultas a la base de datos. Funcionan igual que los get en las API Rest.

Mutation: Sirven para hacer peticiones a la base de datos. Como los DELETE, UPDATE o CREATE. Se le pasan parametros que funcionan parecido a los req.body de las API rest.

Por ejemplo:
createTask(title: String, description: String): Task
Funcion / ******Parametros y su tipo********* / Devolucion 

*/
const typeDefs = gql`
  type Task {
    id: ID
    title: String
    description: String
  }
  type Query {
    hello: String
    getAllTasks: [Task]
    getTask(id: ID): Task
  }

  input TaskInput {
    title: String
    description: String
  }
  type Mutation {
    createTask(task: TaskInput!): Task
    deleteTask(id: ID!): String
    updateTask(id: ID!, task: TaskInput): Task
  }
`;

module.exports = { typeDefs };
