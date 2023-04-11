import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div>
            <h1>GlobalJobsHub</h1>
            </div>
            <div>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/statistics">Statistics</Link>
                    <Link to="/appliedjobs">Applied Jobs</Link>
                    <Link to="/blog">Blog</Link>
                </nav>
            </div>
            <div>
                <button>Start Applying</button>
            </div>
        </div>
    );
};

export default Header;