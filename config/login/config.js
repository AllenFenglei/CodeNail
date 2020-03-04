const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');

module.exports = {
    createNewUser:function (req, res, name, pwd, User) { 

        var hash = bcrypt.hashSync(pwd, 10);
        var userObj = { name: name, password: hash, favourite: []};
        User.create(userObj, function(err, result) { 
            if (err) 
                res.send(err);
            else {
                res.send('Successfully create user');
            }
        }); 
    },


    validateUser:function(req, res, name, pwd, User) {
     // Generate a hashed value from password
        
        var correct = false
        User.findOne({name: name }, function(err, user) { 
            if (err) {
                console.log(err);
                res.send('Error: cannot read database');
            }

            if (user) {
                console.log('in user');
                console.log(user.password);
                correct = bcrypt.compareSync(pwd, user.password);
            }
            
            if (correct) {
                req.session.username = user.name;
                
                res.redirect('/');
            }
            else {
                res.send('Name or password wrong.');
            }
           
        });
    },


    updateUser:function (req, res, name, pwd, User) {
        var hash = bcrypt.hashSync(pwd, 10);
        User.findOne({name: name }, function(err, user) { 
            if (err) {
                console.log(err);
                res.send('Error: cannot read database');
            }

            if (user) {        

                var condictions = {_id: user.id},
                        update = { "$set": { password: hash}},
                        option = {multi: false};
                    
                User.update(condictions, update, option, function(err) {
                    if (err) {
                        res.send('Cannot update');
                    }
                    else {
                        res.send("Update user successfully!");
                    }
                });

            }
            else {
                res.send('User not found!');
            }
            
            
           
        });
    },

    deleteUser:function (req, res, name, User) {

        User.findOne({name: name})
        .exec(function (err, user) {
            if (err) {
                console.log(err);
                res.send('Cannot read database.');
            }
            else {
                if (user!=null) {
                    user.remove(function (err) {
                        if (err) {
                            console.log(err);
                            res.send("Cannot delete the user.")
                            return;
                        }
                        res.send("Successfully delete user: " + name);
                    })
                }
                else {
                    res.send('User: ' + name + ' not found');
                }
            }
        });
    },

    checkAlreadyLogin:function(req, res) {
    if  (req.session && req.session.username) {
            return true;
        }
        else {
            return false;
        }
    },

    getLoginPage: function(req, res) {
        res.sendFile('login.html', {root: __dirname});
        console.log('Send login file: '+ __dirname + 'login.html');
    }
};