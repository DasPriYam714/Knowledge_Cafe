import { useState } from 'react'
import Blog from './components/Blog/Blog'
import Header from './components/Header/Header'
import Bookmarks from './components/Bookmarks/Bookmarks'

import './App.css'

function App() {
  const [bookmarks, setBookmarks] = useState([])

  const handleAddToBookmarks = blog => {
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks)

  }

  return (
    <>
     
        
      <Header></Header>
      <div className='md:flex'>
      <Blog handleAddToBookmarks={handleAddToBookmarks}></Blog>
      <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>
      
      
    </>
  )
}

export default App
