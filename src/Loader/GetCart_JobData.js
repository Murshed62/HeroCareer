import { getLocalData } from "../utilities/fakedb";

export const jobDataLoader = async () => {
  const jobData = await fetch("/featuredb.json");
  const jobs = await jobData.json();

  const savedData = getLocalData();
  let newArr = [];
  for (const id in savedData) {
    const foundData = jobs.find((singleJob) => singleJob.id === id);
    if (foundData) {
      newArr.push(foundData);
    }
  }
  return { newArr, jobs };
};
