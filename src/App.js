import Nav from './Pages/Nav'
import Home from './Pages/Home'
import About from './Pages/About'
// import Footer from './Pages/Footer'
import Login from './Pages/Login'
import Register from './Pages/Register'
import { Routes,Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <Nav/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/register" element={<Register/>} />
      </Routes>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
