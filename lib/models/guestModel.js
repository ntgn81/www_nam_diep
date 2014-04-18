'use strict';

var mongoose = require('mongoose');

/**
 * Thing Schema
 */
var Schema = new mongoose.Schema({
  name: String,
  status: {
    type: String,
    enum: [
      'Accepted',
      'Declined',
      'Opened',
      'Unopened'
    ]
  },
  messages: {
    accepted: String,
    declined: String,
    opened: String,
    unopened: String
  },
  viewCount: Number,
  phone: String
});

/**
 * Validations
 */
// ThingSchema.path('awesomeness').validate(function (num) {
//   return num >= 1 && num <= 10;
// }, 'Awesomeness must be between 1 and 10');

mongoose.model('Guest', Schema);
