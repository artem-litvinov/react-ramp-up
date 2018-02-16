import React from 'react';
import { Col, Image } from 'react-bootstrap';

const EmployeeCard = ({ children, imageSrc, FirstName, LastName, Dislocation, Id }) => {
  const fullName = `${FirstName} ${LastName}`;

  return (
    <Col lg={4} md={6} sm={6}>
      <div className="card mb-4">
        <Image
          className="card-img-top"
          alt={fullName}
          src={`http://prism.akvelon.net/api/system/getphoto/${Id}`}
        />
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
