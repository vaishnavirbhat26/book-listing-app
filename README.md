# Book listing app
This project is a full-stack web application for managing a collection of books. It features a user-friendly interface for displaying and manipulating book data and a robust back-end server with RESTful API and database integration.

[Click here for the demo](https://youtu.be/dwo3tENArDE)

----------------------------------------------------------------------------------------------------------------------
### Features

##### [Color Palette](https://www.color-hex.com/color-palette/7133)

##### Front-End (Client Side)
- Frameworks used => React.js, Tailwind.css, Javascript
- Book Listing Page: Displays a list of books with details like title, author, genre, and cover image.
- Add New Book: A form or modal to add new books to the collection with fields for title, author, genre, etc.
- Delete Book: Users can delete books from the collection via a dedicated button or action.
- Update Book Info: Users can update information of the existing books 
- Responsiveness: The application is fully responsive, ensuring a seamless user experience on various devices.
- Theme: An option of dark mode and a toggle between dark and light themes is available

##### Back-End (Server Side)
- Server Setup: Utilizes Express.js (Node.js) for the back-end server.
- RESTful API: API endpoints for retrieving, adding, and deleting book data.
- Database Integration: Connected to a MongoDB database with a well-designed schema.
- Error Handling: Implements comprehensive error handling for API requests.

##### Data Persistence
- Database Schema: Thoughtfully designed schema to store book information.
- CRUD Operations: Complete CRUD (Create, Read, Update, Delete) operations for book data management.

##### Code Structure
- Modularity: Code organized into modular functions/classes.
- Naming Conventions: Clear and consistent naming conventions.
- Comments: Well-commented code for complex logic and future reference.

----------------------------------------------------------------------------------------------------------------------

## Getting Started

To get a local copy up and running, follow these simple steps.

###### Prerequisites
- Node.js
- npm
- A MongoDB Clustor

###### Steps
1.	Clone Repo/ Extract Files. Go to the directory where all the files are present
2.	Open two terminals. Go to the mern-client folder in one terminal and the mern-server folder in another.
3.	In the mern-client folder ,Run :  
` npm install `	 to install all the node modules and dependencies
` npm run dev ` 	Open the link that gets displayed
4.	In the mern-server folder’s terminal, Run :
` npm install ` 	to install all the node modules and dependencies 
` npm start ` 	Open your localhost at port 5000 to check if the server is running.

The terminals on successful running of the website should look like this: 
Client and server respectively:

![image](https://github.com/vaishnavirbhat26/book-listing-app/assets/112920991/92c6c2f5-8381-43db-88b1-0f648020f8f7)

###### Note:
1.	Make sure you connect to your MongoDB collection in case the above is not getting pinged successfully. Fill this url properly to connect to your database.
`mongodb+srv://<username>:<password>@cluster0.xwlzfai.mongodb.net/?retryWrites=true&w=majority`
2.	To get book data, fill the database you connect to with a few records. Make sure you use the below given key names (else you can change in the code given according to your key name)
Sample data:
`
{
    "bookTitle": "The Engagment Party",
    "authorName": "Darby Kane",
    "imageURL": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1685801665i/123205979.jpg",
    "category": "Thriller",
    "bookDescription": "And Then There Were None meets I Know What You Did Last Summer in #1 international bestseller Darby Kane’s latest gripping and twisty thriller set on a private island in Maine where secrets piled upon secrets and lies upon lies are all revealed in one fateful weekend.",
    "bookURL": "https://www.goodreads.com/book/show/123205979-the-engagement-party?ref=rae_0"
}
`
----------------------------------------------------------------------------------------------------------------------
## Testing 

- Front-End and Back-End Testing: Thorough testing of both front-end and back-end components.
- Edge Cases: Consideration of edge cases like incomplete book information or deleting non-existent books.

### API testing 
The API tetsing - testing of API endpoints and backend server is done using Postman

1. GET method - find() all books
   
   ![image](https://github.com/vaishnavirbhat26/book-listing-app/assets/112920991/24ea6a0e-9b19-4318-8178-eb8042f43f3d)

2. GET method - find() by category

   ![image](https://github.com/vaishnavirbhat26/book-listing-app/assets/112920991/d4fcd160-f659-469b-a8c6-204783b2c6c7)

3. POST method - inserOne() to upload one book data

   ![image](https://github.com/vaishnavirbhat26/book-listing-app/assets/112920991/5d68d933-0333-4e39-a9d6-213002052e26)

4. PATCH method - update() a book data

   ![image](https://github.com/vaishnavirbhat26/book-listing-app/assets/112920991/42f220bb-189c-47ad-a248-93286a3d11f7)

5. DELETE method - deleteOne() to delete a book data

   ![image](https://github.com/vaishnavirbhat26/book-listing-app/assets/112920991/9ece0fae-4127-4a29-932c-3d3e07202b94)

### Integration testing

1. Form submission handling
   
   ![image](https://github.com/vaishnavirbhat26/book-listing-app/assets/112920991/ba711a0d-645f-4776-9bb2-22ce7266f87e)
   
2. Delete book

   ![image](https://github.com/vaishnavirbhat26/book-listing-app/assets/112920991/5815ca73-9fd2-4897-98a7-b7ae43f558e6)

3. Add a book

    ![image](https://github.com/vaishnavirbhat26/book-listing-app/assets/112920991/6ece1c48-58d4-42ba-992a-52f19d476a1b)
   
5. Update a book

   ![image](https://github.com/vaishnavirbhat26/book-listing-app/assets/112920991/ac60163c-7885-41fc-bbe8-dae99b8a4566)




   






