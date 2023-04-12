import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header-container'>
            <div className='hub-name'>
            <h1>GlobalJobsHub</h1>
            </div>
            <div className='nav-container'>
                <nav>
                    <Link className='h' to="/">Home</Link>
                    <Link className='s' to="/statistics">Statistics</Link>
                    <Link className='a' to="/appliedjobs">Applied Jobs</Link>
                    <Link className='b' to="/blog">Blog</Link>
                </nav>
            </div>
            <div className='start-btn'>
                <button>Start Applying</button>
            </div>
        </div>
    );
};

export default Header;