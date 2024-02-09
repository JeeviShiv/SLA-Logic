const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const bugModel = new Schema({
    title: {type:String},
    description: {type:String},
    dateCreated: {type:String},
    timeCreated : { type: String},
    assigne: {type:String}
});

module.exports = mongoose.model('bug',bugModel,'buglist');