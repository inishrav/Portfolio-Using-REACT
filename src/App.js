 
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { About } from './components/About';
import Project from './components/Project';
import ContactUs from './components/ContactUs';
import Resume from './components/resume';
import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Footer from './components/footer';

function App() {
  const [classactive,  setclassactive] = useState(false);
 
  return (
    <div  className={"App " + (classactive && "active" )}>
    <Navbar classactive={classactive} setclassactive = {setclassactive}/>
    <Sidebar/>

    <Home/>
    <About/>
    <Resume/>
    <Project/>
     
    <ContactUs/>
    <Footer/>
    
    
    </div>
  );
}

export default App;
