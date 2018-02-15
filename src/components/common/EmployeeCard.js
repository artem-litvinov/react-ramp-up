import React from 'react';
import { Link, Route } from 'react-router-dom';

const EmployeeCard = ({ children, imageSrc, FirstName, LastName }) => {
  return (
    <div className='col-4'>
      <div className="card mb-3">
        <img className="card-img-top" src={imageSrc} alt="Card image cap" />
        <div className="card-body">
          <p className="card-text">{FirstName} {LastName}</p>
          {children}
        </div>
      </div>
    </div>
  );
};

export default EmployeeCard;
