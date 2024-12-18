// routes/products.js

const Router = require("express").Router;
const router = Router();

// Get all products
router.get("/", (req, res) => {
  res.json({
    message: "Get all products",
  });
});

router.post("/", async (req, res) => {
  res.json({
    message: "Post all products",
  });
});

router.get("/:id", (req, res) => {
  res.json({
    message: "Products by id",
  });
});

router.put("/:id", async (req, res) => {
  res.json({
    message: "put product by id",
  });
});

router.delete("/:id", (rep, res) => {
  res.json({
    message: "product deleted",
  });
});

module.exports = router;
