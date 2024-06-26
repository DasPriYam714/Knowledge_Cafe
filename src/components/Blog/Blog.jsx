import { useEffect } from "react";
import { useState } from "react";
import SinBlog from "../SingleBlog/SinBlog";
import PropTypes from 'prop-types';


const Blog = ({handleAddToBookmarks, handleReadingTime}) => {
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
                blogs.map(sinBlog=> <SinBlog key={sinBlog.id} blog={sinBlog} handleAddToBookmarks={handleAddToBookmarks} handleReadingTime={handleReadingTime} ></SinBlog>)
            }
            
        </div>
    );
};
Blog.propTypes={
    handleAddToBookmarks: PropTypes.func.isRequired,
    handleReadingTime: PropTypes.func.isRequired
}

export default Blog; 