import React from 'react';
import { faUserPlus, faUserTimes, faSignOutAlt, faTimes } from '@fortawesome/fontawesome-free-solid';

import FAButtonBase from '../common/FAButtonBase';

export const AddPersonButton = ({ onClick }) => {
  return (
    <FAButtonBase
      onClick={onClick}
      icon={faUserPlus}
      bsStyle='primary'
    >Add to my team</FAButtonBase>
  );
};

export const RemovePersonButton = ({ onClick }) => {
  return (
    <FAButtonBase
      onClick={onClick}
      icon={faUserTimes}
      bsStyle='danger'
    >Remove from my team</FAButtonBase>
  );
}

export const LogoutButton = ({ onClick }) => {
  return (
    <FAButtonBase
      onClick={onClick}
      icon={faSignOutAlt}
      bsStyle='primary'
    >Log out</FAButtonBase>
  );
};

export const DeleteButton = ({ onClick }) => {
  return (
    <FAButtonBase
      onClick={onClick}
      icon={faTimes}
      bsStyle='default'
    ></FAButtonBase>
  );
};
