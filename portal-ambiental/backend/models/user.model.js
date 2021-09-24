const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    contrasena: {
        type: String,
        required: true
    },
});

const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario;