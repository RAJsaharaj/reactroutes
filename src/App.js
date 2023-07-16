import React from 'react';
import { Route, Routes} from "react-router-dom";

import './App.css';
import  Contact  from './Contact';
import About from './About';
import Navbar from './Navbar';


const App = () => {
  return (
    <>
       <Navbar/>
     <Routes>
 
      {/* <Link to="/">Home</Link>
      <Link to="/Contact">Contact</Link> */}
       <Route exact path='/' Component={About} />
       <Route path='/Contact' Component={Contact} />
     </Routes>

    </>
  );
}

export default App;
