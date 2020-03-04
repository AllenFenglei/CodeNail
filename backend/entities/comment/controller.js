const _ = require('lodash');
const Post = require('../post/model');
const User = require('../user/model');
const Comment = require('./model');

async function createComment ({content, toPost, toComment, user_name, date}) {
    //create a comment
    if (!user_name) {   //comment must belong to a user
        throw 'please enter user_name!'; 
    }

    var user = await User.findOne({name: user_name});

    if (!user) {    //if no corresponding user find
        throw 'Username ' + user_name + 'not found!'; 
    }

    console.log(toPost);
    console.log(toComment);
    console.log(user._id);

    newComment = new Comment({  //create new comments
    		content: content, 
		    toPost: toPost,
		    toComment: toComment,
		    owner: user._id,
		    date: date
    });

    var comment = await newComment.save();

    if (!comment) {
        throw 'Add comment fail';
    }
    
    //the comment is belong to a post
    var post = await Post.findByIdAndUpdate(toPost, 
            { '$push': {'comments': comment._id}},
            {'new': true, 'upsert': true})
            .exec();

    if (!post) {
        throw 'Cannot get post after add comment';
    }               
        
    return await Post.findById(toPost)
        .populate('owner')
        .populate({
            path:'comments', 
            populate: {
                path: 'owner',
                model: User
                }
            })
        .exec();      


};

async function listUserComments (user_name){
    //find all the comments belong to a user
    var user = await User.findOne({name: user_name});

    return await Comment.find({'owner': user._id}).exec();
};

module.exports = {
  createComment,
  listUserComments
};
