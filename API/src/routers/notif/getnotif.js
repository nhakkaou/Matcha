const router = require('express').Router()
const User = require('../../models/User')
const { isEmpty } = require('../../outils')
const jwt = require('../../models/JsonWebToken');

router.get('/', (req, res) => {
  return new jwt().check(req.headers.authorization.split(' ')[1])
  .then((data) => {
  return new User().Countnotifs(data.data.id)
    .then((c) => res.send(c))
  })
    .catch(err => res.json({ err: err.message }))
})

module.exports = router
