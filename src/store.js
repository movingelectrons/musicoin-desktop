import React, {useState} from 'react';

export const ConnStatusContext = React.createContext('unknown');
export const PeerCountContext = React.createContext(0);
export const AccountsContext = React.createContext([]);

const Store = ({children}) => {
    const [connStatus, setConnStatus] = useState('unknown');
    const [peerCount, setPeerCount] = useState('unknown');
    const [accounts, setAccounts] = useState([]);

    return(
        <ConnStatusContext.Provider value={[connStatus, setConnStatus]}>
            <PeerCountContext.Provider value={[peerCount, setPeerCount]}>
                <AccountsContext.Provider value={[accounts, setAccounts]}>
                    {children}
                </AccountsContext.Provider>
            </PeerCountContext.Provider>
        </ConnStatusContext.Provider>
    );
};

export default Store;

var Web3 = require('web3'); //need to make sure gmc is started before we attempt to connect to it!
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

class Account{
	constructor(password, phrase){
		//bcrypt password & phrase asap?  is this done automatically by web3? .. i think so..
		this._crypted_pass = password;
		this._crypted_phrase = phrase;
	}
}

function create_account(password, phrase){
    var account = new Account(password, phrase);
    _accounts.push(account);
}

class Wallet{
	constructor(){
		this._accounts = {number: "one", pass: "two"};
		this._web3 = web3;
	}

	getAccounts(){
		return this._accounts;
		console.log("accounts()");
	}

	getWeb3(){
		return this._web3;
	}


}