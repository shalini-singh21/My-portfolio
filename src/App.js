
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
function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path='/Home' element={<Intro />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='Projects' element={<Projects />} />
        </Routes>

      </Router>
    </>
  )
}

export default App;
