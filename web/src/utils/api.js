const isProduction = import.meta.env.PROD || false;
const GRAPHQL_URL = "http://localhost:4000/graphql";

const log = (...args) => {
  if (!isProduction) {
    console.log("🔍 [GraphQL]", ...args);
  }
};

const logError = (...args) => {
  console.error("❌ [GraphQL Error]", ...args);
};

export async function makeGraphQLRequest(query, variables = {}, token = null) {
  try {
    log("Request Query:", query);
    log("Variables:", variables);

    const headers = {
      "Content-Type": "application/json",
    };

    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }

    const response = await fetch(GRAPHQL_URL, {
      method: "POST",
      headers,
      body: JSON.stringify({
        query,
        variables,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    return response;
  } catch (error) {
    logError("Fetch Error:", error.message);
    throw error;
  }
}

export async function processGraphQLResponse(response) {
  try {
    const jsonRes = await response.json();

    log("Raw Response:", jsonRes);

    // Check for GraphQL errors
    if (jsonRes.errors && jsonRes.errors.length > 0) {
      // Extract the most detailed error message
      const error = jsonRes.errors[0];
      let errorMessage = error.message || "Unknown error occurred";

      // Check for nested error details
      if (error.extensions?.exception?.message) {
        errorMessage = error.extensions.exception.message;
      }

      logError("GraphQL Error:", errorMessage);
      throw new Error(errorMessage);
    }

    if (!jsonRes.data) {
      throw new Error("No data returned from server");
    }

    const dataKey = Object.keys(jsonRes.data)[0];
    const result = jsonRes.data[dataKey];

    log("Processed Result:", result);
    return result;
  } catch (error) {
    logError("Response Processing Error:", error.message);
    throw error;
  }
}

export async function callGraphQL(query, variables = {}, token = null) {
  try {
    const response = await makeGraphQLRequest(query, variables, token);
    const data = await processGraphQLResponse(response);
    return data;
  } catch (error) {
    logError("GraphQL Call Failed:", error.message);
    throw error;
  }
}

export function handleError(error) {
  const message = error.message || "An error occurred";
  logError("Handled Error:", message);
  return message;
}
