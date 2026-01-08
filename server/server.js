const express = require("express");
const dotenv = require("dotenv");
const mongooss = require("mongoose");

dotenv.config();
const app = express();
const MONGODB_URI = process.env.MONGODB_URI;
const PORT = process.env.PORT;

mongooss
  .connect(MONGODB_URI)
  .then(() => {
    console.log("DATABASE connected SUCCESSFULLY ");

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => console.error("DATABASE Connection ERROR", error));
