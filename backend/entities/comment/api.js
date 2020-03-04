// controllers
const createComment = require('./controller').createComment;
const listUserComments = require('./controller').listUserComments;


const commentAPI = (app) => {
  // create an comment
  app.post('/api/comment/newComment', (req, res) => {
    console.log('in create comment');
    console.log(req.body);
    createComment(req.body)
        .then((data) => res.send(data))
        .catch(err => {
            res.status(400).send(err);
            console.log(err);
        });
  });

  // list a user's comments
  app.get('/api/user/comments', (req, res) => {
    listUserComments(req.query.user)
        .then((result) => { res.send(result); })
        .catch(err => {
            res.status(400).send(err);
            console.log(err);
        });
    });

};

module.exports = commentAPI;
