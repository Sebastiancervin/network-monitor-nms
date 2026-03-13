const mongoose = require('mongoose');

const DispositivosSchema = new mongoose.Schema({
    ip: String,
    hostname: String,
    estado: String,
    latencia: String,
    ultimaRevision: Date,
    historial:[
        {
            latencia: String,
            fecha: Date
        }   
        
    ]
});

module.exports = mongoose.model('Dispositivos', DispositivosSchema);