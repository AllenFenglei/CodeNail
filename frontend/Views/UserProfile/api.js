import axios from 'axios';

export async function fetchPostAPI(username) {
    try {
        // send GET request to fetch user post
        var res = await axios.get(`/api/user/posts?user=${username}`);
    } catch (e) {
        console.log("There is an error");
        console.log(e);
        throw e.response.data;
    }

    console.log(res.data);
    return res.data;
}

export async function fetchCollectionAPI(username) {
    try {
        // send GET request to fetch user collection post
        var res = await axios.get(`/api/user/collection?user=${username}`);
    } catch (e) {
        console.log("There is an error");
        console.log(e);
        throw e.response.data;
    }

    console.log(res.data);
    return res.data;
}

