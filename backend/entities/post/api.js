// post controllers
const createPost = require('./controller').createPost;
const listUserPosts = require('./controller').listUserPosts;
const getUserCollectionPosts = require('./controller').getUserCollectionPosts;
const searchPosts = require('./controller').searchPosts;
const postDetail = require('./controller').postDetail;

/**
 * post apis
 */

 const postAPI = (app) => {
    // create post
    app.post('/api/post/newPost', (req, res) => {
        createPost(req.body)
        .then((id) => res.send(id))
        .catch(err => {
            res.status(400).send(err);
            console.log(err);
        });
    });

    // list a user's posts
    app.get('/api/user/posts', (req, res) => {
        listUserPosts(req.query.user)
        .then((result) => { res.send(result); })
        .catch(err => {
            res.status(400).send(err);
            console.log(err);
        });
    });

    // get a user's collection posts
    app.get('/api/user/collection', (req, res) => {
        getUserCollectionPosts(req.query.user)
        .then((result) => { res.send(result); })
        .catch(err => {
            res.status(400).send(err);
            console.log(err);
        });
    });

    app.post('/api/post/searchPost', (req, res) => {
        searchPosts(req.body)
        .then((result) => res.send(result))
        .catch(err => {
            res.status(400).send(err);
            console.log(err);
        });
    });

    app.post('/api/post/detail', (req, res) => {
        console.log('post detail')
        console.log(req.body.id);
        post = postDetail(req.body.id)
        .then((result) => res.send(result))
        .catch(err => {
        	console.log(err);
        	res.status(400).send(err);
        })      
        
    });
 };


module.exports = postAPI;
