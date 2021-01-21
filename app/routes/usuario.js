const usuarioController = require('../controllers/usuarioController')

module.exports = app => {
    app.get('/usuario', usuarioController.index);
    app.post('/usuario', usuarioController.create);
    app.put('/usuario/:id', usuarioController.edit);
    app.delete('/usuario/:id', usuarioController.delete);
}