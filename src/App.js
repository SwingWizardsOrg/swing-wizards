import Nav from './Pages/Nav'
import Home from './Pages/Home'
import Footer from './Pages/Footer'
import { Routes,Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <Nav/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
