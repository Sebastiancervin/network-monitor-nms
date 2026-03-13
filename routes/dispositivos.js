const express = require('express');
const router = express.Router();
const ping = require('ping');

const Dispositivos = require('../models/Dispositivos');



router.get("/", async (req, res) => {
    const dispositivos = await Dispositivos.find();
    res.json(dispositivos);
});



router.post("/", async (req, res) => {
    const dispositivos = new Dispositivos({
        ip: req.body.ip,
        hostname: req.body.hostname,
        estado: "desconectado",
        latencia: "0",
        ultimaRevision: new Date()
    });

    await dispositivos.save();
    res.json(dispositivos);
});


router.get("/ping/:id", async (req, res) => {

    const dispositivos = await Dispositivos.findById(req.params.id);

    const result = await ping.promise.probe(dispositivos.ip);

    dispositivos.estado = result.alive ? "activo" : "desconectado";
    dispositivos.latencia = result.time + " ms";
    dispositivos.ultimaRevision = new Date();

    await dispositivos.save();

    res.json(dispositivos);
});

module.exports = router;