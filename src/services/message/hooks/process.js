'use strict';

// src/services/message/hooks/process.js
//
// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/hooks/readme.html

// const defaults = {};


module.exports = function(options) {
  // options = Object.assign({}, defaults, options);

  return function(hook) {

    //getting the user
    const user = hook.params.user;
    //actual message text
    const text = hook.data.text
    //this is because the string can't be larger thatn 400 characters
      .substring(0,400)
      //lets do some HTML escaping
      .replace(/&/g,'&amp;')
      .replace(/</g,'&lt;')
      .replace(/>/g,'&gt;');
    hook.data = {
      text,
      //set the userId
      userId: user._id,
      //Add current time via getTime
      createAt: new Date().getTime();
    }
  };
};
