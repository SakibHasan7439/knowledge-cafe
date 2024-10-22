import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import BookMarks from './components/BookMarks/BookMarks'
import Header from './components/Header/Header'

function App() {

  const [bookMarks, setBookMarks] = useState([]);

  const handleAddToBookMark = blog =>{
    console.log("Added to bookMarks");
  }
  return (

    <div className='max-w-7xl mx-auto'>
      <Header/>
      <div className='md:flex'>
          <Blogs handleAddToBookMark={handleAddToBookMark}/>
          <BookMarks/>
      </div>
    </div>
  )
}

export default App
