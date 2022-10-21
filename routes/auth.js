const express = require('express');
const Authentication = require('../controllers/authentication');
const passportService = require('../controllers/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireLogin = passport.authenticate('local', { session: false });

module.exports = function (app) {
  app.post('/auth/login', requireLogin, Authentication.login);
  // app.post('/auth/login', Authentication.login);
  app.post('/auth/register', Authentication.register);
};
