import React from 'react';
import { faUserPlus, faUserTimes, faSignOutAlt, faTimes } from '@fortawesome/fontawesome-free-solid';

import FAButton from '../common/FAButton';

export const AddPersonButton = ({ onClick }) => {
  return (
    <FAButton
      onClick={onClick}
      icon={faUserPlus}
      bsStyle='primary'
    >Add to my team</FAButton>
  );
};

export const RemovePersonButton = ({ onClick }) => {
  return (
    <FAButton
      onClick={onClick}
      icon={faUserTimes}
      bsStyle='danger'
    >Remove from my team</FAButton>
  );
}

export const LogoutButton = ({ onClick }) => {
  return (
    <FAButton
      onClick={onClick}
      icon={faSignOutAlt}
      bsStyle='primary'
    >Log out</FAButton>
  );
};

export const DeleteButton = ({ onClick }) => {
  return (
    <FAButton
      onClick={onClick}
      icon={faTimes}
      bsStyle='default'
    ></FAButton>
  );
};
