const express = require('express');
const getAll = require('./getAll');
//const getOne = require('./getOne');

let makeRouter = () => {
  let router = express.Router();
  router.use('/getAll', getAll);
  //router.use('/getOne', getOne);
  return router;
}

module.exports = makeRouter;

