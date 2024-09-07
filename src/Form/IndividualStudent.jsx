import React from 'react';

const IndividualStudent = (props) => {
  const { data } = props;

  const { name, age, image} = data ?? {};

  return (
      <div style={{ width: '300px', margin: '20px 0', overflow: 'auto' }}>
        <div>Name: {name}</div>
        <div>Age: {age}</div>
        {image && (
          <img
            src={`data:image/jpeg;base64,${image}`}
            alt="Student"
            style={{ width: '100%', height: 'auto' }}
          />
        )}
      </div>
  );
};

export default IndividualStudent;
