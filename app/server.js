const app = require('./app')

const port = process.env.port || 4001
module.exports = app.listen(port, () => {
    console.log('server na porta', port)
})