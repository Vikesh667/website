import Header from "./component/Header/Header";
import {Route,Routes} from "react-router-dom"
import Home from "./component/Pages/Home/Home";
import  About  from "./component/Pages/About/About";
import Services from "./component/Pages/Services/Services";
import Contact from "./component/Pages/Contact/Contact";
import Course from "./component/Pages/Course/Course";
function App() {
  return (
        <div>
          <Header/>
           <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/Service" element={<Services/>}/>
            <Route path="/ContactUs" element={<Contact/>}/>
            <Route path="/Course" element={<Course/>}/>
           
           </Routes>
        </div>
    
  );
}

export default App;
