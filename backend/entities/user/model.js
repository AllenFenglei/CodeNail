
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({     
    name: {type: String, unique: true, required: true}, 
    pwdSalt: {type:String, required: true}, 
    pwdHash: {type:String, required: true}, 
    role: {type: String, default: 'user'}, // admin or user
    avatarUrl: {type: String},
    followers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post'}],
    collections: [{type: mongoose.Schema.Types.ObjectId, ref: 'Post'}],
    messages: {type: String}

});

module.exports = mongoose.model('User', userSchema);
