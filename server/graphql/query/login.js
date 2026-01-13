const { gql } = require("apollo-server-express");
const User = require("../../models/User");

// ============ QUERY SCHEMA ============
const queryTypeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    createdAt: String!
  }
`;

const hello = {
  type: "String",
  description: "Welcome message",
  resolve: function () {
    return "Welcome to CareerSubway Backend! 🚀";
  },
};

const me = {
  type: "User",
  description: "Get current authenticated user",
  resolve: async function (root, args, context) {
    try {
      // ============ VALIDATION ============
      if (!context.userId) {
        throw new Error("Not authenticated. Please log in.");
      }

      // ============ GET USER ============
      const user = await User.findById(context.userId);
      if (!user) {
        throw new Error("User not found");
      }

      return user;
    } catch (error) {
      throw new Error(error.message);
    }
  },
};

module.exports = { queryTypeDefs, hello, me };
