require("dotenv").config();

const express = require("express");

const app = express();

const restaurantsRouter = require("./routes/restaurants");
const productsRouter = require("./routes/products");

app.use(express.json());

app.use("/restaurants", restaurantsRouter);
app.use("/products", productsRouter);

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
