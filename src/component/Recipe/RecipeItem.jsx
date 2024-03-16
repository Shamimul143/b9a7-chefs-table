
import PropTypes from 'prop-types';

import { useState } from "react";
import SingleRecipe from "./SingleRecipe";
import { useEffect } from "react";

const RecipeItem = ({handleCart}) => {

    const [recipes, setRecipe] = useState([])

    useEffect(() => {
        fetch("shefs.json")
            .then(res => res.json())
            .then(data => setRecipe(data))
    })




    return (
        <div className="w-2/3 border-2 grid grid-cols-2 gap-3">

            {
                recipes.map((item,index)=> <SingleRecipe key={index} item={item} handleCart={handleCart}></SingleRecipe>)
            }
        </div>
    );
};

RecipeItem.propTypes = {
    handleCart:PropTypes.func
};

export default RecipeItem;