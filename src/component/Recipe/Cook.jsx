
import PropTypes from 'prop-types';
import WontToCook from './WontToCook';
import CurrentlyCooking from './CurrentlyCooking';

const Cook = ({ items, handleCook, cookName,time,calories }) => {
    return (
        <div className="lg:w-1/3">
            <h2 className="border-b-2 text-center">Want to cook: {items.length} </h2>
            <div className='flex justify-evenly my-4 mr-16'>
                <h3>Name</h3>
                <h3>Time</h3>
                <h3>Calories</h3>
            </div>
            <div className='lg:my-16'>
                {
                    items.map((i, index) => <WontToCook i={i} key={index} index={index} handleCook={handleCook}></WontToCook>)
                }
            </div>

            <h2 className="border-b-2 text-center">Currently cooking: {cookName.length}</h2>
            <div className='flex justify-evenly my-4'>
                <h3>Name</h3>
                <h3>Time</h3>
                <h3>Calories</h3>
            </div>
            <div className='lg:my-16'>
                {
                    cookName.map((CurrentlyCookingItem, index) => <CurrentlyCooking 
                    key={index} index={index} CurrentlyCookingItem={CurrentlyCookingItem}></CurrentlyCooking>)
                }
            </div>
            <div className='flex justify-evenly my-4 border-t-2'>
                <h2>{time} Min</h2>
                <h2>{calories} Calories</h2>
            </div>
        </div>
    );
};

Cook.propTypes = {
    items: PropTypes.array,
    handleCook: PropTypes.func,
    cookName: PropTypes.array,
    time:PropTypes.number,
    calories:PropTypes.number
};

export default Cook;