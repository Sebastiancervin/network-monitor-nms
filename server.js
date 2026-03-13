const express = require('express');
const cors = require('cors');
const monitorearDispositivos = require("./services/monitor");


require('./database');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/dispositivos", require('./routes/dispositivos'));
app.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000");
});
setInterval(() => {

  monitorearDispositivos();

}, 10000);
