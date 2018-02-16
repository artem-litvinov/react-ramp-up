import React from 'react';
import { Col, Image } from 'react-bootstrap';

const EmployeeCard = ({ children, imageSrc, FirstName, LastName, Dislocation }) => {
  const fullName = `${FirstName} ${LastName}`
  return (
    <Col md={4} sm={6}>
      <div className="card mb-4">
        <Image className="card-img-top" src={imageSrc} alt={fullName} />
        <div className="card-body">
          <h5 className="card-title">{fullName}</h5>
          <p className="card-text">{Dislocation}</p>
          {children}
        </div>
      </div>
    </Col>
  );
};

export default EmployeeCard;
