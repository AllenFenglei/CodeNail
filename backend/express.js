/**
 * module dependencies for express configuration
 */
const morgan = require('morgan');
const compress = require('compression');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const mongoStore = require('connect-mongo')(session);
const flash = require('connect-flash');

/**
 * express configuration
 */
const expressConfig = (app, serverConfigs) => {

  // apply gzip compression (should be placed before express.static)
  app.use(compress());

  // get data from html forms
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  // read cookies (should be above session)
  app.use(cookieParser());

  // use session with mongo
  app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: 'secret',
    store: new mongoStore({
      url: serverConfigs.DBURL,
      collection : 'sessions',
    }),
  }));

  // connect flash for flash messages (should be declared after sessions)
  //app.use(flash());

  // apply route configs
  require('./routes')(app);
};

module.exports = expressConfig;