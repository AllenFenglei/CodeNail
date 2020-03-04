import axios from 'axios';

export async function postAPI(title, descriptions, keywords, language, code, user) {
    try {
        var time = new Date();  //get current time
        time.toLocaleString();
        //console.log(user);
        var res = await axios.post("api/post/newPost", {    //retrieve info from webpage and create new snippet
            title: title,
            keywords: keywords, 
            description: descriptions,
            specification: "",
            code: code,
            user_name: user,
            date: time
        });
        return res.data;
    } catch (e) {
        console.log("There is an error");
        console.log(e);
        throw e.response.data;
    }
}

