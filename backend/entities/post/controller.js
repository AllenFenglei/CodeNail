const _ = require('lodash');
const Post = require('./model');
const User = require('../user/model');
const Comment = require('../comment/model')

async function createPost ({title, keywords, description, specification, code, user_name, date}) {
    //function for creating a new post
    if (!user_name) {   //post must belong to a user
        throw 'please enter user_name!'; 
    }

    var user = await User.findOne({name: user_name});

    if (!user) {    //if not corresponding user exists
        throw 'Username "' + user_name + '" not found!'; 
    }


    newPost = new Post({    //create new posts
            title: title,
            keywords: keywords,
            description: description,
            specification: specification,
            code: code,
            owner: user._id,
            date: date
    });

    await newPost.save();
    return newPost._id;
};

async function listUserPosts (user_name){
    //find all posts belong to the correspongding user
    var user = await User.findOne({name: user_name});

    return await Post.find({'owner': user._id}).populate('owner').exec();
};

async function getUserCollectionPosts (user_name){
    
    var user = await User.findOne({name: user_name})
                         .populate('posts');

    return user.posts;
};

async function searchPosts ({content}) {
    var text = "" + content;
    var posts = await Post.find({$or:[{title:{$regex:text}}, {keywords:{$regex:text}}, {description:{$regex:text}}]})
    .populate('owner')
    .populate('comments')
    .exec()

    return posts;
}

async function postDetail (id) {
    console.log(id);
    
    console.log("in post Detail");    

    var post = await Post.findById(id)
    .populate('owner')
    .populate({
        path:'comments', 
        populate: {
            path: 'owner',
            model: User
            }
        })
    .exec();

    return post;
}

module.exports = {
    createPost,
    listUserPosts,
    getUserCollectionPosts,
    searchPosts,
    postDetail
};
