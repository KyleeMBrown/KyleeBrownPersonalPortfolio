import { HashRouter as BrowserRouter,  Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import About from "./components/Sections/About";
import Education from './components/Sections/Education';
import Homepage from './components/Sections/Homepage';
import Projects from './components/Sections/Projects';
import Skills from './components/Sections/Skills';

function App() {

  return (
    <>
<BrowserRouter>
    <Navbar /> 
    <Routes>
      <Route path="/" element={<Homepage/>}></Route>
      <Route path="/About" element={<About/>}></Route>
      <Route path="/Education" element={<Education/>}></Route>
      <Route path="/Projects" element={<Projects/>}></Route>
      <Route path="/Skills" element={<Skills/>}></Route>
    </Routes>
   
</BrowserRouter>
    
    </>
  )
}

export default App
