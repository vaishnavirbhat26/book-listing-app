import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import 'aos/dist/aos.css';
import AOS from 'aos';

AOS.init({
  duration: 1000, // Animation duration in milliseconds
  once: false,     // Only animate elements once while scrolling down
});

function App() {
 

  return (
    <>
    <div className="bg-white dark:bg-gray-800 dark:text-white duration-200 font-proza">
      <Navbar/>
      <Outlet/>
    </div>
    </>
  )
}

export default App
