'use strict';

// todos-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todosSchema = new Schema({
  todo: { type: String, required: true },
  description: { type: String, required: true },
  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now }
});

const todosModel = mongoose.model('todos', todosSchema);

module.exports = todosModel;
