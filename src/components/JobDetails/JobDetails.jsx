import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const JobDetails = () => {
  const [details, setDetails] = useState([]);
  const dynamic = useParams();
  const dynamicId = dynamic.id;
  const data = useLoaderData();
  console.log(data);
  useEffect(() => {
    const detailsData = data.find((dt) => dt.id === dynamicId);
    setDetails(detailsData);
    // console.log(detailsData);
  }, []);
  const {id, company, logo, title, location, salary_range, job_type_one, job_type_two, description, responsibilities, educational_requirements, experiences, phone, email} = details;

  const handleApplyBtn=(id)=>{
    addToDb(id.id);
   
  }
  
    
    return (
        <div>
            <button onClick={()=>handleApplyBtn(details)}>Hlluuu</button>
        </div>
    );
};

export default JobDetails;