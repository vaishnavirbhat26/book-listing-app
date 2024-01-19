import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

const ManageBooks = () => {

  const [allBooks, setAllBooks] = useState([]);

  useEffect( () => {
    fetch("http://localhost:5000/all-books").then(res => res.json()).then(data => setAllBooks(data));
  },[])

  //handleDelete
  const handleDelete = (id) => {
    console.log(id)
    fetch(`http://localhost:5000/book/${id}`,{
      method: "DELETE",
    }).then(res => res.json()).then(
      data => {
        console.log(data);
      alert("Book deleted successfully! Refresh the page for getting updated data");
      
    })
  }

  return (
    <>
    <div className="px-4 my-12 dark:text-gray-100">
      <h2 className="mb-8 text-3xl font-bold text-center ">Manage the books!</h2>
    </div>

    {/*Table for book data*/}
    
<div className="py-8 px-4 mx-auto max-w-2xl lg:pb-20">
<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Book Title
                </th>
                <th scope="col" className="px-6 py-3">
                    Author name
                </th>
                <th scope="col" className="px-6 py-3">
                    Category
                </th>
                <th scope="col" className="px-6 py-3">
                    <span className="sr-only">Edit</span>
                </th>
                <th scope="col" className="px-6 py-3">
                    <span className="sr-only">Delete</span>
                </th>
            </tr>
        </thead>
        {
          allBooks.map((book) => 
          <tbody key={book._id}>
            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {book.bookTitle}
                </th>
                <td className="px-6 py-4">
                    {book.authorName}
                </td>
                <td className="px-6 py-4">
                    {book.category}
                </td>
                <td className="px-6 py-4 text-right">
                    <Link to={`/manage-books/edit/${book._id}`} 
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</Link>
                </td>
                <td className="px-6 py-4 text-right">
                    <button onClick={() => handleDelete(book._id) }
                    className="font-medium text-red-600 dark:text-red-500 hover:underline">Delete</button>
                </td>
            </tr>
          </tbody>)
        }
    </table>
</div>
</div>


    </>
  )
}

export default ManageBooks
