import PropTypes from 'prop-types';
import { FaRegBookmark } from "react-icons/fa6";

const SinBlog = ({blog,handleAddToBookmarks}) => {
    const{title,cover, author, author_img,reading_time, posted_date,hastags} = blog;
    return (
        <div>
            <img src={cover} alt={`this pic is come from ${title}`} />
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
                    <button className='ml-1' onClick={handleAddToBookmarks}><FaRegBookmark></FaRegBookmark></button>

                </div>
            </div>
            <h1>Title:{title}</h1>

            <div  className='justify-start'>
            <p>
               {hastags}
            </p>

            

            </div>

           
            

            
        </div>
    );
};

SinBlog.propTypes = {
    blog : PropTypes.object.isRequired
}

export default SinBlog;