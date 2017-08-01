var mongoose = require('mongoose');
var usersSchema = require('../schemas/users.js');

module.exports = mongoose.model('User',usersSchema);