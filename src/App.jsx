
import { useState } from 'react'
import './App.css'
import Banner from './component/Header/Banner'
import Navbar from './component/Header/Navbar'
import Cook from './component/Recipe/Cook'
import Recipe from './component/Recipe/Recipe'
import RecipeItem from './component/Recipe/RecipeItem'

function App() {
  const [items, setItem] = useState([])
  const handleCart = (item) => {
    const newItem = [...items, item]
    setItem(newItem)
  }

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Recipe></Recipe>
      <div className='flex w-[81%] mx-auto my-10 gap-3'>
        <RecipeItem handleCart={handleCart}></RecipeItem>
        <Cook items={items}></Cook>
      </div>

    </>
  )
}

export default App
