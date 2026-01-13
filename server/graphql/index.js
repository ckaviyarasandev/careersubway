const { gql } = require("apollo-server-express");
const { queryTypeDefs, hello, me } = require("./query/login");
const { mutationTypeDefs, createUser } = require("./mutation/signup");

// ============ COMBINE ALL SCHEMAS INTO ONE ============
const typeDefs = gql`
  ${queryTypeDefs}
  ${mutationTypeDefs}

  type User {
    id: ID!
    name: String!
    email: String!
    phone: String!
    createdAt: String!
  }

  type signupResponse {
    token: String!
    user: User!
  }

  type createUserResponse {
    token: String!
    user: User!
  }

  type Query {
    hello: String!
    me: User
  }

  type Mutation {
    createUser(
      name: String!
      email: String!
      password: String!
      phone: String!
    ): createUserResponse!
  }
`;

// ============ COMBINE RESOLVERS ============
const resolvers = {
  Query: {
    hello: hello.resolve,
    me: me.resolve,
  },
  Mutation: {
    createUser: createUser.resolve,
  },
};

module.exports = { typeDefs, resolvers };
