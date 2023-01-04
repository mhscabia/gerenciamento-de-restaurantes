const express = require("express");

const router = express.Router();

//  Listar todos os restaurantes
router.get("/", (req, res) => {
    res.send("Get all restaurants");
});

// Cadastrar novos restaurantes
router.post("/", (req, res) => {
    res.send("Create a new restaurant");
});

// Listar os dados de um restaurante
router.get("/:uuid", (req, res) => {
    const uuid = req.params.uuid;
    res.send(`Get restaurant with uuid: ${uuid}`);
});

// Alterar os dados um restaurante
router.put("/:uuid", (req, res) => {
    const uuid = req.params.uuid;
    const name = req.body.name;
    res.send(`Name ${name}`);
});

// Excluir um restaurante
router.delete("/:uuid", (req, res) => {
    const uuid = req.params.uuid;
    res.send(`Excluding restaurant id ${uuid}`);
});

module.exports = router;
