import Header from "./component/Header/Header";
import {Route,Routes} from "react-router-dom"
import Home from "./Pages/Home/Home";
import  About  from "./Pages/About/About";
import Services from "./Pages/Services/Services";
import Contact from "./Pages/Contact/Contact";
import Course from "./Pages/Course/Course";
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
