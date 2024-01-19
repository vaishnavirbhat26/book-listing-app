import {
    createBrowserRouter
  } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home.jsx"
import Books from "../pages/Books/Books.jsx";
import CrudBooks from "../pages/CrudBooks/CrudBooks.jsx";
import UploadBook from "../pages/CrudBooks/UploadBook.jsx";
import ManageBooks from "../pages/CrudBooks/ManageBooks.jsx";
import EditBooks from "../pages/CrudBooks/EditBooks.jsx";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
            path:'/',
            element: <Home/>
            
        },
        {
            path:'books',
            element:<Books/>
        },
        {
          path:'crudbooks',
          element:<CrudBooks/>,
        },
        {
          path:'upload-book',
          element:<UploadBook/>,
        },
        {
          path:'manage-books',
          element:<ManageBooks/>
        },
        {
          path:'manage-books/edit/:id',
          element:<EditBooks/>,
          loader: ({params}) => fetch(`http://localhost:5000/book/${params.id}`)
        }
      ]
    },
  ]);

export default router;