import React from "react";

const JobCategoryList = ({ job }) => {
    const  {name,img,Time}=job;
  
  return (
    <div className='bg-sky-100 p-4 mx-auto rounded-md mb-5'>
    <img className='w-20 mx-auto' src={img} alt="logo" />
    <h5 className='font-bold mt-5'>{name}</h5>
    <p>{Time}</p>
</div>
  );
};

export default JobCategoryList;
