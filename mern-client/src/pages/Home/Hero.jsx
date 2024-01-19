import heroIllustration from '../../assets/bibliophile.svg'; 
import {Link} from "react-router-dom";


const Hero = () => {
    return (
        <div className="font-proza flex flex-col md:flex-row items-center justify-between px-20 py-12 md:py-24 bg-white dark:bg-gray-800 -mt-8 md:-mt-16"> {/* Adjusted margin here */}
        <div className="flex-1" data-aos="zoom-in">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Discover Your Next Great Read
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8">
            Explore our vast collection of books and authors to find your perfect match.
          </p>
          <Link to="/books">
          <button className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg hover:scale-105 duration-200 dark:bg-primary dark:hover:bg-blue-500">
            Browse Books
          </button>
          </Link>
        </div>
        <div className="flex-1">
          <img src={heroIllustration} alt="Hero Illustration" className=" px-24 max-w-full h-auto" data-aos="zoom-out" />
        </div>
      </div>
    );
  };
  

export default Hero;
