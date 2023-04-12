
import React from 'react';
import { AreaChart, Area, XAxis, YAxis} from 'recharts';

const Statistics = () => {
   const marksArray = [
        {
          "id": "01",
          "name": "Assignment 1",
          "marks": 57
        },
        {
          "id": "02",
          "name": "Assignment 2",
          "marks": 60
        },
        {
          "id": "03",
          "name": "Assignment 3",
          "marks": 60
        },
        {
          "id": "04",
          "name": "Assignment 4",
          "marks": 60
        },
        {
          "id": "05",
          "name": "Assignment 5",
          "marks": 55
        },
        {
          "id": "06",
          "name": "Assignment 6",
          "marks": 60
        },
        {
          "id": "07",
          "name": "Assignment 7",
          "marks": 60
        },
        {
          "id": "08",
          "name": "Assignment 8",
          "marks": 58
        }
      ]
    return (
        <div className='mt-20 ml-60'>
            <AreaChart
            width={1200}
            height={300}
            data={marksArray}
            >
                <Area dataKey="marks"></Area>
                <XAxis dataKey="name"></XAxis>
                <YAxis />
                
            </AreaChart>
        </div>
    );
};

export default Statistics;
