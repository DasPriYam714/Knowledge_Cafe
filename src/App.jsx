import { useState } from 'react'
import Blog from './components/Blog/Blog'
import Header from './components/Header/Header'
import Bookmarks from './components/Bookmarks/Bookmarks'

import './App.css'

function App() {
  const [bookmarks, setBookmarks] = useState([])

  const handleAddToBookmarks = blog => {
    console.log("Add to bookmarks")

  }

  return (
    <>
     
        
      <Header></Header>
      <div className='md:flex'>
      <Blog handleAddToBookmarks={handleAddToBookmarks}></Blog>
      <Bookmarks></Bookmarks>
      </div>
      
      
    </>
  )
}

export default App
