import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth'

const Navbar = () => {
    const { user, handleSignIn, handleSignOut } = useAuth()

    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <h1 className="navbar-brand">Firebase</h1>
                    <Link to='/'>Home</Link>
                    <Link to='/allplayers'>Players</Link>

                    <div className="d-flex">
                        {
                            (user) ? <button className="btn btn-outline-success" onClick={handleSignOut}>Sign Out</button> : <button className="btn btn-outline-success" onClick={handleSignIn}>Sign in</button>
                        }
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;