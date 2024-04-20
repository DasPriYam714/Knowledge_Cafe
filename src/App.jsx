import { useState } from 'react'
import Blog from './components/Blog/Blog'
import Header from './components/Header/Header'
import Bookmarks from './components/Bookmarks/Bookmarks'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
        
      <Header></Header>
      <div className='md:flex'>
      <Blog></Blog>
      <Bookmarks></Bookmarks>
      </div>
      
      
    </>
  )
}

export default App
