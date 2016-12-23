'use strict';

// src/services/message/hooks/restrict-to-sender.js
//
// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/hooks/readme.html

const errors = require('feathers-errors');

const defaults = {};

module.exports = function(options) {

  options = Object.assign({}, defaults, options);

  return function(hook) {
    const messageService = hook.app.service('messages');
    //first get the message the users wants
    return messageService.get(hook.id, hook.params)
      .then(message =>{
        //throw a not authenticated error if the message and user id don't match
        if(message.sentBy._id !== hook.params.user._id){
          throw new errors.NotAuthenticated('Access not Permitido');
        }
        return hook;
      })
    hook.restrictToSender = true;
  };
};
