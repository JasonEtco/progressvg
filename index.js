const template = require('./template')

module.exports = app => {
  app.get('/progress', (req, res) => {
    const { p, m } = req.query
    res.setHeader('Content-Type', 'image/svg+xml')
    res.setHeader('Cache-Control', 'private')
    res.send(template(p, m))
  })
}
