import { useState } from 'react'
import Blog from './components/Blog/Blog'
import Header from './components/Header/Header'
import Bookmarks from './components/Bookmarks/Bookmarks'

import './App.css'

function App() {
  const [bookmarks, setBookmarks] = useState([])
  const [readingTime, setReadingTime]= useState(0)

  const handleAddToBookmarks = blog => {
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks)

  }

  const handleReadingTime = (id, time) => {
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime)
    const remainingBookmarks = bookmarks.filter(bookmark =>bookmark.id !== id);
    setBookmarks(remainingBookmarks)
  }

  return (
    <>
     
        
      <Header></Header>
      <div className='md:flex'>
      <Blog handleAddToBookmarks={handleAddToBookmarks} handleReadingTime={handleReadingTime}></Blog>
      <Bookmarks readingTime={readingTime} bookmarks={bookmarks}></Bookmarks>
      </div>
      
      
    </>
  )
}

export default App
