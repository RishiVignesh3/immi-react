import React, { useEffect, useState } from 'react';

export const withData = (Component, URL) => {
  return (props) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
      fetch(URL)
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          setData(res);
          setIsLoading(false);
        }).catch(() => {
            setError(true)
        });
    }, []);

    if(isLoading) return <div> Loading ..... </div>
    if(error) return <div> Something went wrong </div>

    return <Component {...props} data={data} />;
  };
};
