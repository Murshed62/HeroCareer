import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import JobCategoryList from "../JobCategory/JobCategoryList";
import FeatureJob from "../FeatureJob/FeatureJob";
import bannerImg from "../../assets/All Images/banner.png";
import './Banner.css'

const Banner = () => {
  const jobList = useLoaderData();
  const [jobData, setJobData] = useState([]);
  const [showAll, setShowAll] = useState(false);
  useEffect(() => {
    fetch("/featuredb.json")
      .then((res) => res.json())
      .then((data) => setJobData(data));
  }, []);
  const handlerViewDetails = (job) => {
    console.log(job);
  };
  const handleSeeALl = () => {
    setShowAll(true);
  };

  return (
    <div className="res-design-container">
      <div className="md:flex md:justify-between md:items-center md:mx-20">
        <div>
          <h1 className="banner-title common-margin res-design-banner-heading mt-48">
            One Step <br /> Closer To Your <br />{" "}
            <span className="common-color">Dream Job</span>
          </h1>
          <p className=" common-margin res-design-para mb-5">
            Explore thousands of job opportunities with all the <br />{" "}
            information you need. Its your future. Come find it. Manage all{" "}
            <br /> your job application from start to finish.
          </p>
          <button className=" common-margin btn-primary btn-navbar">
            Get Started
          </button>
        </div>
        <div className="banner-img res-design-banner-pic">
          <img src={bannerImg} alt="" />
        </div>
      </div>
      <div className="">
        <h1 className=" common-margin mt-5 job-list-title text-center">
          Job Category List{" "}
        </h1>
        <p className="text-2xl mb-16 mt-10 4 text-center res-design-para-two">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>

      <div className="container grid grid-cols-1 md:grid-cols-4 m-12 w-9/12 mx-auto res-design-small-card">
        {jobList.map((job) => (
          <JobCategoryList key={job.id} job={job}></JobCategoryList>
        ))}
      </div>
      <h1 className="font-bold text-center text-5xl mt-20">Featured Jobs</h1>
      <p className="text-center mt-4 text-2xl res-design-para-two">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 md:mx-3">
        {jobData.slice(0, showAll ? 6 : 4).map((job) => (
          <FeatureJob
            key={job.id}
            job={job}
            handlerViewDetails={handlerViewDetails}
          ></FeatureJob>
        ))}
        {!showAll && (
          <p className="sm:text-center mt-10 p-10 mb-10 md:ml-96 text-2xl">
            <button
              className="btn-navbar btn-viewDetails "
              onClick={handleSeeALl}
            >
              See All Job
            </button>
          </p>
        )}
      </div>
    </div>
  );
};

export default Banner;
