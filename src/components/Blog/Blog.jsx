import { useEffect } from "react";
import { useState } from "react";
import SinBlog from "../SingleBlog/SinBlog";


const Blog = () => {
    const[blogs, setBlogs]= useState([])

    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=> setBlogs(data))
        .then(console.log(setBlogs))
    }, [])
    return (
        <div className="md: w-2/3">
            blog:{blogs.length};
            {
                blogs.map(sinBlog=> <SinBlog key={sinBlog.id} blog={sinBlog}></SinBlog>)
            }
            
        </div>
    );
};

export default Blog; 