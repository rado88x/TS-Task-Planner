//    Apollo 2.x server config :
// import { ApolloServer, gql } from 'apollo-server-micro';
// import { IResolvers } from '@graphql-tools/utils';

// const typeDefs = gql`
//   type Query {
//     users: [User!]!
//   }
//   type User {
//     name: String
//   }
// `

// const resolvers : IResolvers< {hell0: "World"}, {someProp : "Hello"} > = {
//   Query: {
//     users(parent, args, context) {
//       return [{ name: 'Nextjs' }]
//     },
//   },
// }

// const apolloServer = new ApolloServer({ typeDefs, resolvers })

// const startServer = apolloServer.start()

// export default async function handler(req, res) {
//   res.setHeader('Access-Control-Allow-Credentials', 'true')
//   res.setHeader(
//     'Access-Control-Allow-Origin',
//     'https://studio.apollographql.com'
//   )
//   res.setHeader(
//     'Access-Control-Allow-Headers',
//     'Origin, X-Requested-With, Content-Type, Accept'
//   )
//   if (req.method === 'OPTIONS') {
//     res.end()
//     return false
//   }

//   await startServer
//   await apolloServer.createHandler({
//     path: '/api/graphql',
//   })(req, res)
// }

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// }

import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { ApolloServer, gql } from "apollo-server-micro";
import { IResolvers } from "@graphql-tools/utils";
// Resolvers definitions code from the lecture remains as is ...
const typeDefs = gql`
  enum TaskStatus {
    active
    completed
  }

  type Task {
    id: Int!
    title: String!
    status: TaskStatus!
  }

  input CreateTaskInput {
    title: String!
  }

  input UpdateTaskInput {
    id: Int!
    title: String
    status: TaskStatus
  }

  type Query {
    tasks(status: TaskStatus): [Task!]!
    task(id: Int!): Task
  }

  type Mutation {
    createTask(input: CreateTaskInput!): Task
    updateTask(input: UpdateTaskInput!): Task
    deleteTask(id: Int!): Task
  }
`;


const resolvers: IResolvers = {
  Query: {
    tasks(parent, args, context) {
      return [];
    },
    task(parent, args, context) {
      return null;
    },
  },
  Mutation: {
    createTask(parent, args, context) {
      return null;
    },
    updateTask(parent, args, context) {
      return null;
    },
    deleteTask(parent, args, context) {
      return null;
    },
  },
};


const apolloServer = new ApolloServer({ typeDefs, resolvers });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default  apolloServer.createHandler({ path: '/api/graphql' });
