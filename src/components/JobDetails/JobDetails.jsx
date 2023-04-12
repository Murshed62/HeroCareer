import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import {
  PhoneIcon,
  MapPinIcon,
  CurrencyDollarIcon,
  EnvelopeIcon,
  CalendarIcon,
} from "@heroicons/react/24/solid";
import { addToDb } from "../../utilities/fakedb";
const JobDetails = () => {
  const [details, setDetails] = useState([]);
  const dynamic = useParams();
  const dynamicId = dynamic.id;
  const data = useLoaderData();
  console.log(data);
  useEffect(() => {
    const detailsData = data.find((dt) => dt.id === dynamicId);
    setDetails(detailsData);
    
  }, []);
  const {
    jobResponsibility,
    jobDes,
    jobEdu,
    Experiences,
    phone,
    email,
    location,
    jobTitle,
    salary,
  } = details;
  const handleApplyBtn=(id)=>{
    addToDb(id.id);
   
  }
 
  return (
    <>
      <h1 className="text-4xl  text-center mt-52 font-bold">Job Details</h1>

      <div className="flex justify-between mx-20 mt-10">
        <div className="w-1/2">
          <h1>
            <span className="text-3xl font-bold">Job Description:</span>
            <span className="text-2xl  "> {jobDes}</span>
          </h1>
          <br />
          <h1>
            <span className="text-3xl font-bold">Job Responsibility:</span>
            <span className="text-2xl "> {jobResponsibility}</span>
          </h1>
          <h1 className="mt-3 text-3xl font-bold">Educational Requirements:</h1>
          <p className="mt-3 text-2xl">{jobEdu}</p>
          <h1 className="mt-3 text-3xl font-bold">Experiences:</h1>
          <p className="mt-2 text-2xl">{Experiences}</p>
        </div>
        <div className="applyCartStyle">
          <h1 className="mb-2 text-3xl font-bold p-5">Job Details</h1>
          <hr />

          <div className="flex items-center ml-5">
            <CurrencyDollarIcon class="h-6 w-6 primary-color" />{" "}
            <p className=" p-2">Salary :{salary}</p>
          </div>
          <div className="flex items-center ml-5">
            <CalendarIcon class="h-6 w-6 primary-color" />{" "}
            <p className=" p-2">Job Title : {jobTitle}</p>
          </div>

          <h1 className="mb-2 p-5 text-2xl font-bold">Contact Information</h1>
          <hr />
          <div className="flex items-center ml-5">
            <PhoneIcon class="h-6 w-6 primary-color" />{" "}
            <p className=" p-2">Phone :{phone}</p>
          </div>
          <div className="flex items-center ml-5">
            <EnvelopeIcon class="h-6 w-6 primary-color " />
            <p className=" p-2">Email :{email}</p>
          </div>
          <div className="flex items-center ml-5">
            <MapPinIcon class="h-6 w-6 primary-color" />{" "}
            <p className=" p-2">Address :{location}</p>
          </div>
          <button onClick={()=>handleApplyBtn(details)} className="applyBtnStyle ">Apply Now</button>
        </div>
      </div>
    </>
  );
};

export default JobDetails;
