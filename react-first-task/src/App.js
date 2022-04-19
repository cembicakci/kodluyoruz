import axios from "axios"; 

async function getData (id) { 
    const { data: user } = await axios(`https://jsonplaceholder.typicode.com/users/${id}`) 

    const { data: post } = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${id}`) 

    console.log("Users: ", user, "Posts: ", post); 
}

export default getData; 