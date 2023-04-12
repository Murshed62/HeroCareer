import React from 'react';
import { MapPinIcon ,CurrencyDollarIcon} from '@heroicons/react/24/solid'
import { useNavigate } from 'react-router-dom';

const FeatureJob = ({job}) => {
    const navigate=useNavigate();

    const{ComName,ComImg,jobTitle,jobCategoryTimes,jobCategoryTime,location,salary,addrs,id}=job
    
   
    return (
        <>
          
           <div  className="cardstyle mt-20 sm:ml-28 primary-shadaw">
            <img className="featureJobImgStyle" src={ComImg} alt="" />
            <h3 className='mt-3 text-2xl font-bold ml-10'>{jobTitle}</h3>
            <p  className='mt-3 ml-10'>{ComName}</p> 
            <button className="ml-10 btn-borderStyle text-2xl mt-5">{jobCategoryTimes}</button>
            <button className="mx-5 btn-borderStyle text-2xl">{jobCategoryTime}</button> <br />
         <div className='flex mt-5 ml-10'>
         <MapPinIcon class="h-6 w-6 text-blue-500" />  <span>{addrs}</span><CurrencyDollarIcon class="h-6 w-6 ml-20 text-black" /><span>{salary}</span><br />
         </div>
            <button onClick={()=>navigate(`/job/${id}`)} className="btn-viewDetails btn-navbar ml-10 mb-2 mt-5">View Details</button>
           </div>
            
        </>
    );
};

export default FeatureJob;