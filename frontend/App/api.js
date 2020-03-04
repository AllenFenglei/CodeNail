import axios from 'axios';

// api call to get user profile
export const fetchUser = () => {
  return axios.get('/api/user/getUser');
};

// api call to login
export async function loginApi(name, password) {
    if (name.length < 4 || password.length < 8) {
        throw "Incorrect user name or password";
    }
    try {
        var res = await axios.post('api/user/login', {
            name: name, 
            password, password
        });
    } catch (e) {
        throw e.response.data;
    }

    return res.data;
}


