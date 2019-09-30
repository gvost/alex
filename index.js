const express = require('express')
const app = express()
const port = 8080
app.get('/', (req, res, next) => {
  res.send('OK, GO')
  next()
})
// const facebookAppToken, facebookPersonalToken, pSecret, aSecret
app.get('/event/:id', (req, res, next) => {
  // passport.auth(facebookAppToken, (user) => {
    // fb.api(`events/${req.params.id}`, (user.id) => {
      console.log(req.params, req.query)
      console.log(req.params.id)
      res.send({events})
      next()
    // })
  // })
})
app.get('/foo', (req, res, next) => {
  console.log(req.params, req.query)
  res.send('ok')
  next()
})

app.listen(port, () => console.log(`example app listening on ${port}`))
