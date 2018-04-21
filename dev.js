const route = require('./index')
const app = require('express')()

route(app)

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`http://localhost:${port}`))
