import React, { useState } from 'react';
import './Accounts.css';
import Account from './Account.js';

var accounts = [
  {id: 0, public_key: "2321213", balance: 123211},
  {id: 1, public_key: "233421213", balance: 1211}
]

const accountsList = accounts.map(account => (
  <Account 
    id={account.id} 
    key={account.id} 
    public_key={account.public_key} 
    balance={account.balance} 
  />
));

const Accounts = () => {


  return (
    <ul className="accounts">
      <li className="accounts_header">
        <div>Address</div>
        <div className="ab_spacer"></div>
        <div>Balance</div>
        <div className="actions">Actions</div>
      </li>
      {accountsList}
    </ul>
  );
}

export default Accounts;