import axios from 'axios';
import React, { useEffect, useState } from 'react';
import IndividualStudent from './IndividualStudent';

export const FormData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:3001/students', { responseType: 'json' })
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div style={{height: '200px', overflowY: 'auto'}}>
      {data?.map((item) => (
        <IndividualStudent data={item} key={item.id}/>
      ))}
    </div>
  );
};
