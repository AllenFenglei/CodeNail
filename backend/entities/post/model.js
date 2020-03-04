
const mongoose = require('mongoose');

const postSchema = mongoose.Schema({    
    title: {type: String, require: true}, 
    keywords: [{type: String}],
    description: {type: String, require: true},
    specification: {type: String},
    code: {type: String},
    owner: {type: mongoose.Schema.Types.ObjectId, require: true, ref: 'User'},
    date: {type: String}, 
    comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}]
});

module.exports = mongoose.model('Post', postSchema);
