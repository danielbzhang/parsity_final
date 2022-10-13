const jwt = require('jwt-simple');
const User = require('../models/User');
const keys = require('../config/dev');

const tokenForUser = (user) => {
  console.log('authentication user:', user);
  return jwt.encode(
    {
      sub: user.id,
      iat: Math.round(Date.now() / 1000),
      exp: Math.round(Date.now() / 1000 + 5 * 60 * 60),
    },
    keys.TOKEN_SECRET
  );
};

exports.login = function (req, res, next) {
  // User has already had their username and password auth'd
  // We just need to give them a token
  console.log('authentication-login-user: ', req.user);
  res.send({
    token: tokenForUser(req.user),
    msg: 'User logged in successfully',
  });
};

exports.currentUser = function (req, res) {
  const user = {
    username: req.user.username,
    token: tokenForUser(req.user),
  };

  res.send(user);
};

exports.register = function (req, res, next) {
  const username = req.body.username;
  const password = req.body.password;

  console.log('authen-register-user: ', username);

  if (!username || !password) {
    return res
      .status(422)
      .send({ error: 'You must provide username and password' });
  }
  // See if a user with the given email exists
  User.findOne({ username: username }, function (err, existingUser) {
    if (err) {
      return next(err);
    }
    // If a user with email does exist, return an error
    if (existingUser) {
      return res.status(422).send({ error: 'Username is in use' });
    }
    // If a user with email does NOT exist, create and save user record
    const user = new User();
    user.username = username;
    user.setPassword(password);

    user.save(function (err, user) {
      if (err) {
        return next(err);
      }
      // Repond to request indicating the user was created
      res.json({ token: tokenForUser(user) });
    });
  });
};
