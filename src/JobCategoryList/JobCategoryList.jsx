import React from "react";
import './JobCategoryList.css';
import accountImg from '../assets/Icons/accounts 1.png';
import business from '../assets/Icons/business 1.png';
import socialMedia from '../assets/Icons/social-media 1.png'
import chipImg from '../assets/Icons/chip 1.png'

const JobCategoryList = () => {
  return (
    <div className="job-category-container">
      <div className="section-title">
        <h2>Job Category List</h2>
        <p>
          Explore thousand of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="job-list">
        <div className="job-des">
          <img src={accountImg} alt="" />
          <h4>Account & Finance</h4>
          <p>350 Jobs Available</p>
        </div>
        <div className="job-des">
          <img src={business} alt="" />
          <h4>Creative Design</h4>
          <p>200 Jobs Available</p>
        </div>
        <div className="job-des">
          <img src={socialMedia} alt="" />
          <h4>Marketing & Sales</h4>
          <p>250 Jobs Available</p>
        </div>
        <div className="job-des">
          <img src={chipImg} alt="" />
          <h4>Engineering Job</h4>
          <p>324 Jobs Available</p>
        </div>
      </div>
    </div>
  );
};

export default JobCategoryList;
