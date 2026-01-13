const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const MONGODB_URI = process.env.MONGODB_URI;

    if (!MONGODB_URI) {
      throw new Error("MONGODB_URI is not defined in .env");
    }

    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("✅ DATABASE connected SUCCESSFULLY");
    return true;
  } catch (error) {
    console.error("❌ DATABASE Connection ERROR:", error.message);
    throw error;
  }
};

module.exports = connectDB;
