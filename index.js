const template = require('./template')

module.exports = app => {
  app.get('/progress', (req, res) => {
    const { p, m } = req.query
    res.send(template(p, m))
  })
}
