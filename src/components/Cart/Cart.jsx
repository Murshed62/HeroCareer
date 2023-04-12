import React from 'react';
import { MapPinIcon,CurrencyDollarIcon} from '@heroicons/react/24/solid'
import { useNavigate } from 'react-router-dom';
const Cart = ({data}) => {
    const navigate=useNavigate();
    const{ComName,ComImg,jobTitle,jobCategoryTimes,jobCategoryTime,location,salary,addrs,id}=data
  
    return (
        <li className='flex justify-between items-center ml-60 mt-20 p-10  py-6 list-noneStyle primary-shadaw '>
        
        <div className='flex'>
        <img  className='jobApplyImg' src={ComImg}alt="" />
        <div>
          <h1 className="ml-10 text-2xl font-bold">{jobTitle}</h1>
          <p className="ml-10">{ComName}</p>
          <button className="ml-10 btn-borderStyle text-2xl mt-5 primary-color">
           {jobCategoryTime}
          </button>
          <button className="mx-5 btn-borderStyle text-2xl primary-color ">{jobCategoryTimes}</button> <br />
          <div className="flex mt-5 ml-10">
            <MapPinIcon class="h-6 w-6 text-blue-500" /> <span>{addrs}</span>
            <CurrencyDollarIcon class="h-6 w-6 ml-20 text-black" />
            <span>{salary}</span>
            <br />
          </div>
        </div>
      </div>
      <div>
      <button onClick={()=>navigate(`/job/${id}`)} className="btn-viewDetails btn-navbar ml-10 mb-2 mt-5">View Details</button>
      </div>
      </li>
    );
};

export default Cart;

