const route = require('./index')
const app = require('express')()

route(app)

app.listen(3000, () => console.log('http://localhost:3000'))
