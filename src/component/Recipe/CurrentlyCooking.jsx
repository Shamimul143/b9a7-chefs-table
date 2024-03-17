
import PropTypes from 'prop-types';

const CurrentlyCooking = ({ CurrentlyCookingItem, index }) => {

    return (
        <div className='flex justify-evenly my-4 text-xs '>
            <span>{index + 1}</span>
            <p>{CurrentlyCookingItem.recipe_name.slice(0, 10)}</p>
            <p>{CurrentlyCookingItem.preparing_time} min</p>
            <p>{CurrentlyCookingItem.calories} calories</p>

        </div>
    );
};

CurrentlyCooking.propTypes = {
    CurrentlyCookingItem: PropTypes.object,
    index: PropTypes.number
};

export default CurrentlyCooking;