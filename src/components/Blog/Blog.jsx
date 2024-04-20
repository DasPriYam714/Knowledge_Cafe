import { useEffect } from "react";
import { useState } from "react";


const Blog = () => {
    const[blogs, setBlogs]= useState([])

    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=> setBlogs(data))
        .then(console.log(setBlogs))
    }, [])
    return (
        <div>
            blog:{blogs.length};
            
        </div>
    );
};

export default Blog; 