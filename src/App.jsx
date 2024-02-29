import { HashRouter as BrowserRouter,  Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import About from "./components/Sections/About";
import Education from './components/Sections/Education';
import Homepage from './components/Sections/Homepage';

function App() {

  return (
    <>
<BrowserRouter>
    <Navbar /> 
    <Routes>
      <Route path="/" element={<Homepage/>}></Route>
      <Route path="/About" element={<About/>}></Route>
      <Route path="/Education" element={<Education/>}></Route>
    </Routes>
</BrowserRouter>
    
    </>
  )
}

export default App
