
// import PropTypes from 'prop-types';
import BgImage from '../../assets/image/Rectangle.png'

const Banner = () => {
    return (
            <div className="w-[81%] mx-auto bg-cover bg-center h-[500px] flex flex-col items-center justify-center text-center text-white space-y-4 my-10" style={{backgroundImage: `url(${BgImage})`}}> 
                <h1 className="text-4xl font-bold">Discover an exceptional cooking class <br /> tailored for you!</h1>
                <p className='text-[#ffffffcc]'>Hands-on and online cooking classes in Barcelona and events for you and <br /> your business. Cook and eat like a local with our professional team.</p>
                <div>
                <button className="bg-[#0BE58A] rounded-full mr-3 px-4 py-1 text-black">Explore Now</button>
                <button className="rounded-full border-2 border-[#ffffff33] px-4 py-1">Our Feedback</button>                 
                </div>               
            </div>
    );
};

Banner.propTypes = {

};

export default Banner;