var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({     
    name: { type: String, unique: true, required: true }, 
    password: {type:String, required: true}, 
    followers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
    posts: {type: Array},
    collections: [{type: mongoose.Schema.Types.ObjectId, ref: 'Post'}],
    messages: {type: String}

});

var PostSchema = mongoose.Schema({  
    ID: {type: String, unique: true, require: true},  
    title: { type: String }, 
    keywords: [{type: String}],
    description: {type: String},
    specificaiton: {type: String},
    code: {type: String},
    owner: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    date: {type: String }, 
    comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}]
});

var CommentSchema = mongoose.Schema({
    ID: {type: String, unique: true, require: true},
    content: {type: String},
    commentTo: {type: String},  // postid or comment id
    isToPost: {type: Boolean}, // if true commentTo is for postId
    author: {type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    date: { type: String },
    comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}]
});



var User = mongoose.model('User', UserSchema);
var Post = mongoose.model('Post', PostSchema);
var Comment = mongoose.model('Comment', CommentSchema);

module.exports = {
    User: User,
    Post: Post,
    Comment: Comment
}