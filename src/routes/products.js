const express = require("express");

const router = express.Router();

//  Listar todos os produtos de um restaurante
router.get("/", (req, res) => {
    res.send("Get all products");
});

// Criar um produto de um restaurante
router.post("/", (req, res) => {
    res.send("Create a new product");
});

// Alterar um produto de um restaurante
router.put("/:uuid", (req, res) => {
    const uuid = req.params.uuid;
    const name = req.body.name;
    res.send(`Name ${name} changed on product ${uuid}`);
});

// Excluir um produto de um restaurante
router.delete("/:uuid", (req, res) => {
    const uuid = req.params.uuid;
    res.send(`Product ${uuid} deleted`);
});

module.exports = router;
