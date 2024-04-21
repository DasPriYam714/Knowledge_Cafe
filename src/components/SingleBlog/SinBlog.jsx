import PropTypes from 'prop-types';
import { FaRegBookmark } from "react-icons/fa6";

const SinBlog = ({blog,handleAddToBookmarks, handleReadingTime}) => {
    const{id,title,cover, author, author_img,reading_time, posted_date,hastags} = blog;
    return (
        <div>
            <img className='w-full' src={cover} alt={`this pic is come from ${title}`} />
            <div className='flex justify-between'>
                <div className='flex' >
                    <div >
                    <img className='w-14 rounded-full' src={author_img} alt="" />

                    </div>
                    <div className='ml-6'>
                        <h1 className='text-2xl'>{author}</h1>
                        <p>{posted_date}</p>
                    </div>
                    

                </div>
                <div>
                    {reading_time} reading time
                    <button className='ml-1' onClick={() =>handleAddToBookmarks(blog)}><FaRegBookmark></FaRegBookmark></button>

                </div>
            </div>
            <h1 className='text-2xl'>Title:{title}</h1>

            <div  className='justify-start'>
            <p>
               {hastags}
            </p>

            <button className='text-start text-purple-700 font-bold underline' onClick={() => handleReadingTime(id,reading_time)}>Mark As Read</button>

            

            </div>

           
            

            
        </div>
    );
};

SinBlog.propTypes = {
    blog : PropTypes.object.isRequired,
    handleAddToBookmarks : PropTypes.func,
    handleReadingTime : PropTypes.func,
}

export default SinBlog;