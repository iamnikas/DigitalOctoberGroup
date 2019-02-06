const bodyParser = require('body-parser')
const session = require('express-session')
const app = require('express')()
const { Nuxt, Builder } = require('nuxt')
const fs = require('fs')

// Custom Modules
let serviceLocator = require('./controllers/serviceLocator');
//let logger = require('./middleware/logger');
//serviceLocator.Logger = logger(true);

app.use(bodyParser.json())
app.use(session({
  secret: 'super-secret-key',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 60000 }
}))

app.get('/news/', async (req, res) => {
  try {
    let query = JSON.parse(JSON.stringify(req.query));
    //serviceLocator.Logger.info('/GET /news/getAll REQ --> query:', query)
    // can be add offset & page parameters
    // but ... we get ALL news on file
    //serviceLocator.Logger.info('/GET /news/getAll RES <-- :', serviceLocator.Cache, '\n\n')
    console.log('/GET /news/getAll RES <-- :', serviceLocator.Cache, '\n\n')
    res.status(200).json(serviceLocator.Cache);
  } catch (error) {
    //serviceLocator.Logger.error(error)
    res.status(500).json({ message: 'Internal server error' });
  }
})

app.get('/news/get/:news_id', async (req, res) => {
  try {
    let news_id = Number(req.params.news_id)
    console.log('/GET /news/:news_id RES <-- :', news_id, '\n\n')
    let result = (serviceLocator.Cache).filter(item => { return (item.id == news_id) })[0]
    res.status(200).json(result);
  } catch (error) {
    //serviceLocator.Logger.error(error)
    res.status(500).json({ message: 'Internal server error' });
  }
})

  
// We instantiate Nuxt.js with the options
const isProd = process.env.NODE_ENV === 'production'
let config = require('./nuxt.config.js')
config.dev = !isProd
const nuxt = new Nuxt(config)
// No build in production
const promise = (isProd ? Promise.resolve() : new Builder(nuxt).build())
promise
.then(() => {
  app.use(nuxt.render)
  app.listen(3000)
  console.log('Server is listening on http://localhost:3000')  // eslint-disable-line no-console
})
.then(async () => {
    let news_data = fs.readFileSync('./static/news_data.json');
        news_data = JSON.parse(news_data)
    //serviceLocator.Logger.verbose('news_data:', news_data)
    serviceLocator.Cache = news_data
  
})
.catch((error) => {
  //serviceLocator.Logger.error(error)  // eslint-disable-line no-console
  process.exit(1)
})
