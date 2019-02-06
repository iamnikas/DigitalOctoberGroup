let express = require('express')
const news = require('./news');

let makeRouter = () => {
  let router = express.Router()
  router.use('/news', news)
  return router
}

module.exports = makeRouter
