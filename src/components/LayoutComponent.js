import React from 'react';
import {Link} from 'react-router-dom';

const Layout = () => {
    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <div className="container">
                    <Link to="/rickAndMorty-react/" className="navbar-brand">Home</Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/rickAndMorty-react/about" className="nav-link">About</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
};

export default Layout;