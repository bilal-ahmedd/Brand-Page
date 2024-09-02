import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Contact from './components/contact/Contact'
import {
  BrowserRouter as Router, Routes, Route
} from "react-router-dom";

function App() {

  return (
    <>
    <Router>
    <Navbar/>
    <div className="container">
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
    </Router>
    
      
    </>
  )
}

export default App
