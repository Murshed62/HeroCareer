import React, { useEffect, useState } from "react";
import "./FeaturedJobs.css";
import JobList from "../JobList/JobList";

const FeaturedJobs = ({ companyDetails }) => {
  // const [companies, setCompanies] = useState(companyDetails);

  const [showAllCards, setShowAllCards] = useState(false);

  const activeCards = showAllCards ? companyDetails : companyDetails.slice(0, 4);

  
  
  return (
    <div>
      <div className="section-title">
        <h2>Featured Jobs</h2>
        <p>
          Explore thousand of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="card-container">
      {
        activeCards.map(cp=><JobList
        key={cp.id}
        cp={cp}

        ></JobList>)
      }
      {!showAllCards && (
        <button className="show-all" onClick={()=> setShowAllCards(true)}>See All Jobs</button>
      )
      }
      
      </div>
    </div>
  );
};

export default FeaturedJobs;
