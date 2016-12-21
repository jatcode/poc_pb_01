'use strict';

// src/services/user/hooks/gravatar.js
//
// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/hooks/readme.html


//We need this to create the MD5 hash
const crypto = require('crypto');

//The gravatar image service

const gravatarUrl = 'https://s.gravatar.com/avatar';

//the size query.  the chat app needs 60px images

const query = `s=60`;

//returns a full URL to a gravatar image for a fiven email address
//
const gravatarImage = email =>{
  //Gravatar uses MD5 hashes from an email address to get the image
  const hash = crypto.createHash('md5').update(email).digest('hex');
  return `${gravatarUrl}/${hash}?${query}`;
}


module.exports = function() {
// assign the new data with the gravatar image
  return function(hook) {
    hook.data = Object.assign({},hook.data,{avatar: gravatarImage(hook.data.email)});
  };
};
