import React, { useState } from "react";
import { getShoppingCart } from "../../utilities/fakedb";
import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";

const ApplyJob = () => {
  const { newArr } = useLoaderData();
  const applyJobs = [];
  const localData = getShoppingCart();
  const [remoteData, setRemoteData] = useState("remote");

  for (const data in localData) {
    const loadData = newArr.filter((jobData) => jobData.id == data);
    applyJobs.push(loadData[0]);
  }
  const [singleShow, setSingleShow] = useState(applyJobs);

  const handleJob = (e) => {
    setRemoteData(e.target.value);

    const showDatas = applyJobs.filter(
      (dt) => dt.jobCategoryTimes == remoteData
    );
    setSingleShow(showDatas);
  };

  return (
    <div>
      <h1 className="text-5xl mt-40 mb-20  font-bold text-center">
        Applied Jobs
      </h1>
      <div className="flex items-start justify-start text-gray-900">
        <div className="flex flex-col   p-6 ">
          <div className="text-end">
            <select onChange={handleJob} value={remoteData} name="" id="">
              <option value="remote">Onsite</option>
              <option value="onsite">Remote</option>
            </select>
          </div>
          <ul className="flex flex-col">
            {singleShow.map((data) => (
              <Cart key={data.id} data={data}></Cart>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ApplyJob;
