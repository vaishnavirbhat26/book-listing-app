import {useParams, useLoaderData} from 'react-router-dom';

const EditBooks = () => {

    const {id} = useParams();
    console.log(id)
    const {bookTitle, authorName, imageURL, category, bookDescription, bookURL} = useLoaderData()

    const handleUpdate = (event) => {
        event.preventDefault();
        const form = event.target;

        const bookTitle = form.bookTitle.value;
        const authorName = form.authorName.value;
        const imageURL = form.imageURL.value;
        const category = form.category.value;
        const bookDescription = form.bookDescription.value;
        const bookURL = form.bookURL.value;

        const updateBookObj = {
        bookTitle, authorName, imageURL, category, bookDescription, bookURL
        }

        //console.log(updateBookObj)

        //update book data
        fetch(`http://localhost:5000/book/${id}`, 
        {
            method:"PATCH",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updateBookObj)
        }).then(res => res.json()).then(data => {
            console.log(data);
            alert("Book updated successfully!");
            //form.reset();
        })
    }

  return (
    
    <>
  
      <div className="px-8 my-8 font-proza dark:text-white dark:bg-gray-800">
        
        <section data-aos="zoom-in" className="bg-white dark:bg-gray-900 py-8 h-full">
        <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
          <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Update the Book data</h2>
          <form onSubmit={handleUpdate}>
  
              <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                  <div className="sm:col-span-2">
                  <label htmlFor="bookTitle" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Book Title</label>
                  <input
                  type="text"
                  name="bookTitle"
                  id="bookTitle"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Type book name"
                  defaultValue={bookTitle}
                  required
                  />
                  </div>
                  <div>
                  <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                  <select id="category" defaultValue={category}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                        <option selected="">{category}</option>
                        <option value="Fiction">Fiction</option>
                        <option value="Non-Fiction">Non-Fiction</option>
                        <option value="Romance">Romance</option>
                        <option value="Comics">Comics</option>
                        <option value="Science">Science</option>
                        <option value="Mystery">Mystery</option>
                        <option value="Thriller">Thriller</option>
                        <option value="Fantasy">Fantasy</option>
                        <option value="Sports">Sports</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="authorName"  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Author Name</label>
                    <input type="text" defaultValue={authorName} name="authorName" id="authorName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Jill Gellar " required/>
                  </div> 
                  <div className="sm:col-span-2">
                    <label htmlFor="bookDescription" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                    <textarea id="bookDescription" defaultValue={bookDescription} rows="8" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Your description here" required></textarea>
                  </div>
              </div>
              <div className="py-4">
                  <label htmlFor="imageURL" className=" block mb-2 text-sm font-medium text-gray-900 dark:text-white">Paste the link of the book cover image</label>
                  <input
                  defaultValue={imageURL}
                  type="text"
                  name="imageURL"
                  id="imageURL"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Paste the Image URL"
                  required
                  />
                  </div>
                  <div>
                  <label htmlFor="bookURL" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Link for the book to read</label>
                  <input
                  type="text"
                  name="bookURL"
                  defaultValue={bookURL}
                  id="bookURL"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="www.xyz.com/book-name"
                  required
                  />
                  </div>
              
              <div className="flex items-center space-x-4 pt-4">
                <button type="submit" className="text-white bg-primary hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary dark:hover:bg-secondary dark:focus:ring-primary-800">
                    Update
                </button>
              </div>
              
          </form>
        </div>
      </section>

      </div>
      </>
  )
}

export default EditBooks
