
import PropTypes from 'prop-types';
import WontToCook from './WontToCook';

const Cook = ({ items }) => {
  
    return (
        <div className="w-1/3 border-2">
            <h2 className="border-b-2 text-center">Want to cook: {items.length} </h2>
        <div className='flex justify-evenly my-4 mr-16'>
            <h3>Name</h3>
            <h3>Time</h3>
            <h3>Calories</h3>
        </div>
            <div>
{
    items.map((i, index)=><WontToCook  i={i} key={index} index={index}></WontToCook>
 
    )
    
}

            </div>
        </div>
    );
};

Cook.propTypes = {
    items: PropTypes.func
};

export default Cook;