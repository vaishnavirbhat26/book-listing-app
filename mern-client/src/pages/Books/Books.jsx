import { useState, useEffect } from "react";

const Books = () => {

  const [books, setBooks] = useState([]);

  useEffect( () => {
      fetch("http://localhost:5000/all-books").then(res => res.json()).then(data => setBooks(data));
  },[])

  return (
    <>
    <div >
      <div className="container font-proza dark:text-white">
        {/*Header section*/}
        <div className="text-center mb-20 max-w-[400px] mx-auto">
          <p className="text-sm bg-clip-text text-transparent bg-primary pt-7">
            Find out all curated books here!</p>
          <h1 className="text-3xl font-bold pt-2">The Book Shelf</h1>
          <p className="text-sm dark:text-gray-200 pt-2">Embark on your reading journey with BookMark Where every page is a new discovery.</p>
        </div>
        {/*card*/}
        <div>
          <div className="-mt-9 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-1">
            {
              books.map((data) => (
                <div key={data._id} className="space-y-3  " data-aos="zoom-in">
                  <a href={data.bookURL} className="inline-block">
                  <img src={data.imageURL} alt="book cover" 
                  className="h-[220px] w-[150px] object-cover rounded-md hover:scale-105 duration-200"/>
                  <div className="pb-10 pt-3">
                    <h2 className="font-semibold w-[150px]">{data.bookTitle}</h2>
                    <p className="text-sm text-gray-700 dark:text-gray-400">{data.authorName}</p>
                    <p className="text-xs text-gray-700 dark:text-gray-400">{data.category}</p>
                  </div>
                  </a>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Books;
