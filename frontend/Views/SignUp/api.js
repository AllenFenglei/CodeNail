import axios from 'axios';

export async function signUpAPI(name, password1, password2) {
    // check for formating
    if (!name || name.length < 4) {
        throw "user name must be no shorter than 4 characters";
    }
    
    if (password1.length < 8) {
        throw "password must be no shorter than 8 digits";
    }

    // check whether password matches
    if (password1 != password2) {
        throw "password does not match";
    }

    try {
        // call rest API
        await axios.post("/api/user/sign_up", {
            name: name,
            password: password1
        });
    } catch (e) {
        throw e.response.data;
    }
}

