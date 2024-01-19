/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */


const BookCard = ({headline, books}) => {
  return (
    <>
    <div className="font-proza dark:bg-gray-800 -mt-8" >
      <h2 className="text-5xl text-gray-900 text-center font-bold dark:text-gray-100">{headline}</h2>
    </div>

    {/*Card Section*/}
    <div className="p-20 font-proza grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-10 sm:gap-10 place items center">
      {
        //books.map(book => <p key={book._id}>{book.bookTitle}</p>) - to test connection 
        books.map((book) => (

          <div key={book._id} data-aos="zoom-in" className=" rounded-2xl bg-white text-center p-4 dark:bg-gray-900 hover:bg-secondary dark:hover:bg-secondary hover:text-white dark:text-gray-100 relative shadow-xl">
            <div className="h-[100px" >
              <img src={book.imageURL} alt="coverImage"
              className="max-w-[100px] block mx-auto transform -translate-y-14 group-hover:scale-105 duration-300 shadow-md"></img>
            </div>

            <div>
              <div className="w-full flex item-center justify-center">
                {book.authorName}'s
              </div>
              <h1 className="text-xl font-bold">{book.bookTitle}</h1>
              <p className="text-gray-600 group-hover:text-white duration-300 text-sm dark:text-gray-400 line-clamp-2">{book.bookDescription}</p>
              <a href={book.bookURL} className="inline-block"> 
              <button className="bg-gradient-to-r from-gray-800 to-primary 
              text-white px-4 py-2 rounded-full mt-4 hover:scale-105 duration-200 
              group-hover:text-primary">Read Now</button></a>

            </div>


          </div>
        ))}


    </div>


    </>
    
  )
}

export default BookCard
