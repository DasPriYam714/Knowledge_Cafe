import { useState } from 'react'
import Blog from './components/Blog/Blog'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
        
      <h1>Knowledge Cafe</h1>
      <Blog></Blog>
      
      
    </>
  )
}

export default App
