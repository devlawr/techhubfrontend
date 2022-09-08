// import logo from "./logo.svg";
import "./App.css";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/index";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import { ContactUs } from "./pages/contact";
import About from "./pages/about/About";
import Registration from "./pages/Registration/Registration";
import User from "./pages/Allusers.js/User";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/users" element={<User />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
