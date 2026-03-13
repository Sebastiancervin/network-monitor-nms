const ping = require('ping');
const Dispositivos = require('../models/Dispositivos');

async function monitorearDispositivos() {
    try {
        const dispositivos = await Dispositivos.find();
        for (const dispositivo of dispositivos) {
            const result = await ping.promise.probe(dispositivo.ip);
            dispositivo.estado = result.alive ? "activo" : "desconectado";
            dispositivo.latencia = result.time + " ms";
            dispositivo.ultimaRevision = new Date();
            dispositivo.historial.push({
                latencia: result.time + " ms",
                fecha: new Date()
            });
            
            await dispositivo.save();
            console.log(
                dispositivo.hostname,
                dispositivo.ip,
                dispositivo.estado,
                dispositivo.latencia
            );
        }
    } catch (err) {
        console.log("Error al monitorear dispositivos", err);
    }
}

module.exports = monitorearDispositivos;