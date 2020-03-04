const _ = require('lodash');
const User = require('./model');
const Crypto = require('crypto-js/crypto-js');
const jdenticon = require('jdenticon');

async function getById(id) {
    return await User.findById(id);
}

async function getByName(UserName) {
    return await User.find({name: UserName});
}

async function signUp(name, pwd) {

    // check whether user name has already existed 
    if (name && await User.findOne({name: name})) {
        throw 'Username "' + name + '" is already registered'; 
    }

    // password has to be more than 8 digits
    if (!pwd || pwd.length < 8) {
        throw 'Password must be longer than 8 digits'; 
    }

    // generate random salt to harden password
    var salt = Crypto.lib.WordArray.random(128/8);
    
    // compute h(password || salt)
    var hash = Crypto.SHA3(pwd + salt, 512);

    // generate random avatar based on user name
    var avatarUrl = "data:image/png;base64," + jdenticon.toPng(name, 200).toString('base64');

    userParam = {
        name: name,
        pwdSalt: salt,
        pwdHash: hash,
        avatarUrl: avatarUrl
    };

    var user = new User(userParam);
    await user.save();
}

async function authenticate(name, pwd) {

    var user = await User.findOne({name: name});
    if (!user) {
        throw 'Cannot find user "' + name + '" .'; 
    }

    // compare hash value of password
    if (Crypto.SHA3(pwd + user.pwdSalt, 512) != user.pwdHash) {
        throw 'Incorrect password';
    }

    return user;
}

async function updateUser(name, pwd) {

}

module.exports = {
    getById,
    getByName,
    signUp,
    authenticate
};
