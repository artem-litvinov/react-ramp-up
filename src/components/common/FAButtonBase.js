import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { Button } from 'react-bootstrap';

const FAButtonBase = ({ children, onClick, icon, bsStyle }) => {
  return (
    <Button onClick={onClick} bsStyle={bsStyle}>
      <FontAwesomeIcon icon={icon} /> {children}
    </Button>
  );
};

export default FAButtonBase;
