
// import PropTypes from 'prop-types';
import Vector from '../../assets/image/Vector.png'
import Frame from '../../assets/image/Frame-1.png'

const Navbar = () => {
    return (
        <div>

            <nav>
                <div className="flex justify-evenly my-5 items-center">
                    <h2 className='text-3xl font-bold'>Recipe Calories</h2>
                    <ul className="flex gap-6">
                        <li><a href="">Home</a></li>
                        <li><a href="">Recipes</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Search</a></li>
                    </ul>
                    <div className='flex '>
                    <div className='absolute pl-2 pt-2'><img src={Vector} alt="search img" /></div>
                    <input className="bg-gray-200 rounded-2xl pl-8 py-1" type="text" placeholder="Search" />
                    </div>
                    
                    <button className='bg-[#0be58a] rounded-full'><img src={Frame} alt="Frame" /></button>
                </div>
            </nav>

        </div>
    );
};

Navbar.propTypes = {

};

export default Navbar;