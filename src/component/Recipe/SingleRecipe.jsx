
import PropTypes from 'prop-types';
import Frame1 from '../../assets/image/Frame (1).png'
import Frame2 from '../../assets/image/Frame (2).png'

const SingleRecipe = ({item,handleCart}) => {

    return (
        <div>
            <div className="card bg-base-100 shadow-xl p-5 space-x-4 ">
                <figure><img className='w-[300px] h-[200px] rounded-xl' src={item.recipe_image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title my-2">{item.recipe_name}</h2>
                    <p className='mb-2'>{item.short_description}</p>
                    <h4 className='mb-2'>Ingredients: 5</h4>
                    <div className='ml-2 mb-2'>                        
                        <li>{item.ingredients[0]}</li>
                        <li>{item.ingredients[1]}</li>
                        <li>{item.ingredients[2]}</li>
                        <li>{item.ingredients[3]}</li>
                        <li>{item.ingredients[4]}</li>
                    </div>
                    <div className='flex gap-3 mb-2'>
                        <span><img src={Frame1} alt="" /></span>
                        <p>{item.preparing_time}</p>
                        <span><img src={Frame2} alt="" /></span>
                        <p>{item.calories}</p>
                    </div>
                    <div className="card-actions justify-end mb-2">
                        <button onClick={()=>handleCart(item)} className="bg-[#0BE58A] rounded-full mr-3 px-4 py-1 text-black">Want to Cook </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

SingleRecipe.propTypes = {
item:PropTypes.object,
handleCart:PropTypes.func
};

export default SingleRecipe;