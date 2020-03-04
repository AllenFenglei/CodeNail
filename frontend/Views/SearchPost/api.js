import axios from 'axios';
//send search request
export async function searchApi(content) {

    try {
        var res = await axios.post('/api/post/searchPost', {
            content: content
        });
    } 
    catch (e) {
        throw e.response.data;
    }
    

    return res.data;
}
