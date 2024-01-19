# Book listing app
This project is a full-stack web application for managing a collection of books. It features a user-friendly interface for displaying and manipulating book data and a robust back-end server with RESTful API and database integration.

----------------------------------------------------------------------------------------------------------------------
### Features

##### Front-End (Client Side)
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



