const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/networkmonitor")
.then(() => console.log("Conectado a la base de datos"))
.catch(err => console.log(err));

module.exports = mongoose;

