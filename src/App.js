import Nav from './Pages/Nav'
import Home from './Pages/Home'
import Footer from './Pages/Footer'
import Login from './Pages/Login'
import { Routes,Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <Nav/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/login" element={<Login/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
