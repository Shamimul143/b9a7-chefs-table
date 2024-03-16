
import PropTypes from 'prop-types';


const WontToCook = ({i, index,handleCook }) => {



    return (
        <div className='flex justify-evenly my-4 text-xs '>
            <span>{index + 1}</span>
            <p>{i.recipe_name.slice(0, 10)}</p>
            <p>{i.preparing_time}</p>
            <p>{i.calories}</p>
            <button onClick={()=>handleCook(i.recipe_id)} className="bg-[#0BE58A] rounded-full text-black text-xs px-2">Preparing</button>
        </div>
    );
};

WontToCook.propTypes = {
    i: PropTypes.object,
    index: PropTypes.number,
    handleCook:PropTypes.func

};

export default WontToCook;