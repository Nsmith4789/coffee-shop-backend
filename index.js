// index.js
const express = require("express");
const mongoose = require("mongoose");
const productRoutes = require("./routes/products");
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());
app.use("/products", productRoutes);
// Connect to MongoDB
mongoose
  .connect("your-mongodb-connection-string-here")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
