import {Link} from "react-router-dom";
import crudIllustration from "../../assets/reading_time.svg"


const CrudBooks = () => {
  return (
    <>

    <div className="font-proza flex flex-col md:flex-row items-center justify-between px-20 py-12 md:py-24 bg-white dark:bg-gray-800 -mt-8 md:-mt-16"> {/* Adjusted margin here */}
    <div className="flex-1" data-aos="zoom-in">
      <div className="p-4">
      <h1 className="text-3xl md:text-5xl  font-bold text-gray-900 dark:text-gray-100 mb-6">
        Choose what goes in your shelf!
      </h1>
      <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8">
        Upload, Update and Delete books from the shelf. Recommend your favorites.  
      </p>
      </div>
      <div className="flex flex-col">
        
      <Link to="/upload-book">
      <button className="m-4 px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg hover:scale-105 duration-200 dark:bg-primary dark:hover:bg-blue-500">
        Upload a Book
      </button>
      </Link>
      <Link to="/manage-books">
      <button className="m-4 px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg hover:scale-105 duration-200 dark:bg-primary dark:hover:bg-blue-500">
        Manage Books
      </button>
      </Link>
      </div>
    </div>
    <div className="flex-1">
      <img src={crudIllustration} alt="Hero Illustration" className=" px-24 max-w-full h-auto" data-aos="zoom-out" />
    </div>
    </div>
    </>
  )
}

export default CrudBooks
