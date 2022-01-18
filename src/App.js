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
import PlayerDetails from './components/PlayerDetails/PlayerDetails';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Login from './components/Login/Login';


function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/details/:playerDetails' element={<PrivateRoute><PlayerDetails /></PrivateRoute>} />
            <Route path='/home/details/:playerDetails' element={<PrivateRoute><PlayerDetails /></PrivateRoute>} />
            <Route path='/allPlayers/details/:playerDetails' element={<PlayerDetails />} />
            <Route path='/allPlayers' element={<PrivateRoute><AllPlayers /></PrivateRoute>} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
