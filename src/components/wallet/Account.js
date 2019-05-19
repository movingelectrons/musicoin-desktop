import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Account = (props) => (
  <li className="container">
    <div>
      {props.public_key}
    </div>
    <div className="copy_icon">
      <FontAwesomeIcon icon="copy" />
    </div>
    <div>
      {props.balance}
    </div>
    <div className="action_icons">
      <FontAwesomeIcon icon="ellipsis-h" />
    </div>
  </li>
);

export default Account