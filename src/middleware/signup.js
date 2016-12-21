'use strict';

module.exports = function(app) {
  return function(req, res, next) {
    // Perform actions
    const body = req.body;

    app.service('users').create({
      email: body.email,
      password:body.password
    })
    //lets redirect to the login page
    //
    .then(user=> res.redirect('login.html'))
    // if error call  error middleware
    .catch(next);
    // next();
  };
};
