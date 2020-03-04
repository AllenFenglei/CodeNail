const UserController = require('./controller');

function userAPI(app) {
    // user sign up
    app.post('/api/user/sign_up', (req, res) => {
        console.log(req.body)
        UserController.signUp(req.body.name, req.body.password)
            .then(() => res.send('success'))
            .catch(err => {
                res.status(400).send(err);
                console.log(err);
            });
    });

    // user log in
    app.post('/api/user/login', (req, res) => {
        UserController.authenticate(req.body.name, req.body.password)
            .then((user) => {
                res.json({name: user.name, avatarUrl: user.avatarUrl});
            })
            .catch(err => res.status(400).send(err));
    });
}


module.exports = userAPI;
