const express = require('express')
const router = express.Router();
let serviceLocator = require('../../controllers/serviceLocator')

router.get('/api/getAll', async (req, res) => {
  try {
    let query = JSON.parse(JSON.stringify(req.query));
    serviceLocator.Logger.info('/GET /news/getAll REQ --> query:', query)
    // can be add offset & page parameters
    // but ... we get ALL news on file
    serviceLocator.Logger.info('/GET /news/getAll RES <-- :', serviceLocator.Cache, '\n\n')
    res.status(200).json(serviceLocator.Cache);
  } catch (error) {
    serviceLocator.Logger.error(error)
    res.status(500).json({ message: 'Internal server error' });
  }
})

module.exports = router;
