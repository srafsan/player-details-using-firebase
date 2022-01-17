import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <h1 className="navbar-brand">Navbar</h1>
                    <Link to='/'>Home</Link>
                    <Link to='/allplayers'>Players</Link>

                    <div className="d-flex">
                        <button className="btn btn-outline-success">Sign In</button>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;