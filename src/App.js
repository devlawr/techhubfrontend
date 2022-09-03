// import logo from "./logo.svg";
import "./App.css";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Home/index';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path = '/' element ={<Home />} />
      </Routes>
    </Router>
   
  );
}

export default App;
