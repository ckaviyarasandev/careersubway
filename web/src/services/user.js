import { callGraphQL, handleError } from "../utils/api.js";

// ============ GRAPHQL QUERIES ============
const CREATE_USER_MUTATION = `
  mutation createUser($name: String!, $email: String!, $password: String!, $phone: String!) {
    createUser(name: $name, email: $email, password: $password, phone: $phone) {
      token
      user {
        id
        name
        email
        phone
      }
    }
  }
`;

const LOGIN_MUTATION = `
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
        name
        email
      }
    }
  }
`;

const ME_QUERY = `
  query {
    me {
      id
      name
      email
      createdAt
    }
  }
`;

// ============ API FUNCTIONS ============

/**
 * Create a new user account (Signup)
 */
export async function createUser(name, email, password, phone) {
  try {
    const result = await callGraphQL(CREATE_USER_MUTATION, {
      name,
      email,
      password,
      phone,
    });

    if (result && result.token && result.user) {
      return {
        success: true,
        message: "Account created successfully!",
        token: result.token,
        user: result.user,
      };
    } else {
      throw new Error("Unexpected response from server");
    }
  } catch (error) {
    return {
      success: false,
      message: error.message || "Signup failed. Please try again.",
      token: null,
      user: null,
    };
  }
}

/**
 * Login user
 */
export async function loginUser(email, password) {
  try {
    const result = await callGraphQL(LOGIN_MUTATION, {
      email,
      password,
    });

    return result;
  } catch (error) {
    throw new Error(handleError(error));
  }
}

/**
 * Get current authenticated user
 */
export async function getCurrentUser(token) {
  try {
    const result = await callGraphQL(ME_QUERY, {}, token);

    return result;
  } catch (error) {
    throw new Error(handleError(error));
  }
}
