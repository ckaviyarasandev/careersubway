const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const { ApolloServer } = require("apollo-server-express");
const connectDB = require("./config/db");
const { typeDefs, resolvers } = require("./graphql");
const { extractToken, verifyToken } = require("./utils/auth");

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// ============ MIDDLEWARE ============
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ============ APOLLO SERVER SETUP ============
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    try {
      const token = extractToken(req.headers.authorization);
      let userId = null;

      if (token) {
        const decoded = verifyToken(token);
        userId = decoded.userId;
      }

      return { userId };
    } catch (error) {
      // Token validation errors are non-fatal
      return { userId: null };
    }
  },
});

const startServer = async () => {
  try {
    await connectDB();

    await server.start();

    server.applyMiddleware({ app });

    app.get("/health", (req, res) => {
      res.json({ status: "✅ Server is running" });
    });

    app.listen(PORT, () => {
      console.log(`
╔═══════════════════════════════════════════════════════════╗
║           🚀 CareerSubway Backend Started 🚀             ║
╠═══════════════════════════════════════════════════════════╣
║ Server:  http://localhost:${PORT}                         ║
║ GraphQL: http://localhost:${PORT}${server.graphqlPath}    ║
║ Health:  http://localhost:${PORT}/health                  ║
╚═══════════════════════════════════════════════════════════╝
`);
    });
  } catch (error) {
    console.error("❌ Failed to start server:", error.message);
    process.exit(1);
  }
};

startServer();
