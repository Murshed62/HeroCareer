import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className="md:flex md:items-center md:justify-between md:mx-20 mt-5">
      <div className=" mb-4 header-title ">ProHire</div>
      <div className="inlineCss mb-4 text-2xl pl-5  md:flex md:gap-10 ">
        <Link className='inlineCss mb-2 '  to='/home'>Home</Link>
        <Link  to="/satatics" className='inlineCss mb-2 '>Statistics</Link>
        <Link  to="/applyJob" className='inlineCss mb-2'>Applied Jobs</Link>
        <Link  to="/blog" className='inlineCss'>Blog</Link>
      </div>
      <button className="btn-primary btn-navbar font-bold py-2 px-4 rounded">
      Star Applying
      </button>
    </nav>
        </div>
    );
};

export default Navbar;