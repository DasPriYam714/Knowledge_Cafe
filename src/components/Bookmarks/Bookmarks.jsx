import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        
        <div className="md: w-1/3 bg-slate-400 ml-5 mt-5 p-3 rounded-lg">
            <div className='bg-slate-100 rounded-2xl'>
                <h3 className="">Reading Time: {readingTime} min</h3>

            </div>
            <h2 className='text-center text-xl'>Bookmarks:{bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark} ></Bookmark>)
            }
        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}

export default Bookmarks;