const path = require('path');
const express = require('express');

const userAPI = require('./entities/user/api');
const postAPI = require('./entities/post/api');
const commentAPI = require('./entities/comment/api');

function routesConfig(app) {
  // serves static files from public directory
  const publicPath = path.resolve(__dirname, '../public');
  app.use(express.static(publicPath));

  // serve api endpoint
  app.get('/api', (req, res) => {
    res.send('Hello from API endpoint');
  });

  // apply user apis
  userAPI(app);
  
  // apply post apis
  postAPI(app);

  // apply comment apis
  commentAPI(app);

  // all get request will send index.html for react-router
  // to handle the route request
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../public', 'index.html'));
  });
};

module.exports = routesConfig;
