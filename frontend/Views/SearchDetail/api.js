import axios from 'axios';
// send request to get detail of post
export async function searchDetailApi(id) {

    try {
        var res = await axios.post('/api/post/detail', {
            id: id
        });
    } 
    catch (e) {
        throw e.response.data;
    }
    
    return res.data;
}
// get current date
var curday = function(sp){
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1; //As January is 0.
	var yyyy = today.getFullYear();

	if(dd<10) dd='0'+dd;
	if(mm<10) mm='0'+mm;
	return (yyyy + sp + mm + sp + dd);
};

// send request to add comment
export async function addCommentApi(content, toPost, user_name) {

	console.log('in add comment api');
	console.log(content);
	console.log(toPost);
	console.log(user_name);
	console.log(curday('-'));

    try {
        var res = await axios.post('/api/comment/newComment', {
            content: content,
            toPost: toPost,
            user_name: user_name,
            date: curday('-')
        });
    } 
    catch (e) {
    	console.log(e);
        throw e.response.data;
    }
    console.log('add comment before return');
    console.log(res.data);
    
    return res.data;
}
