
const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({    
    content: {type: String}, 
    toPost: {type: mongoose.Schema.Types.ObjectId, ref: 'Post'},
    toComment: {type: mongoose.Schema.Types.ObjectId, ref: 'Comment'},
    owner: {type: mongoose.Schema.Types.ObjectId, require: true, ref: 'User'},
    date: {type: String}, 
    comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}]
});

module.exports = mongoose.model('Comment', commentSchema);