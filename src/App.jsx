
import { useState } from 'react'
import './App.css'
import Banner from './component/Header/Banner'
import Navbar from './component/Header/Navbar'
import Cook from './component/Recipe/Cook'
import Recipe from './component/Recipe/Recipe'
import RecipeItem from './component/Recipe/RecipeItem'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [items, setItem] = useState([])

  const handleCart = (item) => {

    const isExist = items.find(cart => cart.recipe_id == item.recipe_id)
    if (!isExist) {
      const newItem = [...items, item]
      setItem(newItem)
      toast.success("Added Success");
    } else {
      toast.warning("Already Eexist");

    }

  }







  const handleCook = (recipeId) => {

    const newRecipe = items.filter(recipe => recipe.recipe_id != recipeId)
    setItem(newRecipe)

    
  }




  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Recipe></Recipe>
      <div className='lg:flex w-[81%] mx-auto my-10 gap-3'>
        <RecipeItem handleCart={handleCart}></RecipeItem>
        <Cook handleCook={handleCook} items={items}></Cook>

      </div>
      <ToastContainer />
    </>
  )
}

export default App
