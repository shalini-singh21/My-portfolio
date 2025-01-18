
// import { Suspense } from 'react';
// import { lazy } from 'react';
import './App.css';
import Intro from './component/Intro';
import Navbar from './component/Navbar';
import Projects from './component/Project';
import Skills from './component/Skills';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
// const Intro=lazy(()=>import('./component/Intro')); 
// const Skills = lazy(()=>import ('./component/Skills'));

function App() {
  return (
    <>
      <Router>
        <Navbar />
      {/* suspense provides a fallback while the lazy component is loading */}
       
        <Routes>
          <Route path='/Home' element={ <Intro name="shalu"/>}/>
          <Route path='/skills' element={ <Skills/>} />
          <Route path='Projects' element={<Projects />} />
        </Routes>
       

      </Router>

     

    
    </>
  )
}

export default App;
