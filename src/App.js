import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import AllPlayers from './components/PlayerAll/PlayerAll';
import NotFound from './components/NotFound/NotFound';
import Navbar from './components/Navbar/Navbar';
import Details from './components/Details/Details';


function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/allplayers' element={<AllPlayers />} />
          <Route path='/details' element={<Details />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
