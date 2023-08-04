import Nav from "./Pages/Nav";
import Home from "./Pages/Home";
import About from "./Pages/About";
// import Footer from './Pages/Footer'
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import { Routes, Route } from "react-router-dom";
import App1 from "./Components/Account/Registration/Inputphonenumber";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/phone" element={<App1 />} />
      </Routes>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
