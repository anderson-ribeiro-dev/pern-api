const authController = require('../controllers/authController')

module.exports = app => {
    app.post('/auth', authController.authentication)
}