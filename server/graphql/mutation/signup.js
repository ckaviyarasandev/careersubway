const { gql } = require("apollo-server-express");
const User = require("../../models/User");
const { generateToken } = require("../../utils/auth");

const mutationTypeDefs = gql`
  type createUserResponse {
    token: String!
    user: User!
  }
`;

const createUser = {
  type: "createUserResponse",
  description: "Create a new user account",
  args: {
    name: {
      type: "String!",
      description: "User full name",
    },
    email: {
      type: "String!",
      description: "User email",
    },
    password: {
      type: "String!",
      description: "User password (minimum 6 characters)",
    },
    phone: {
      type: "String!",
      description: "User phone number",
    },
  },
  resolve: async function (root, args) {
    try {
      // Validation
      if (!args.name || !args.name.trim()) {
        throw new Error("Name is required");
      }

      if (!args.email || !args.email.trim()) {
        throw new Error("Email is required");
      }

      if (!args.phone || !args.phone.trim()) {
        throw new Error("Phone number is required");
      }

      if (!args.password) {
        throw new Error("Password is required");
      }

      if (args.password.length < 6) {
        throw new Error("Password must be at least 6 characters long");
      }

      // Check if user already exists
      const existingUser = await User.findOne({
        email: args.email.toLowerCase(),
      });
      if (existingUser) {
        throw new Error(
          "Email already registered. Please use a different email or try logging in"
        );
      }

      // Create user
      const user = new User({
        name: args.name.trim(),
        email: args.email.toLowerCase(),
        password: args.password,
        phone: args.phone.trim(),
      });

      await user.save();
      console.log("✅ User created successfully:", user.email);

      // Generate token
      const token = generateToken(user._id.toString());

      return {
        token,
        user: user.toJSON(),
      };
    } catch (error) {
      console.error("❌ Signup Error:", error.message);
      throw new Error(error.message);
    }
  },
};

module.exports = { mutationTypeDefs, createUser };
