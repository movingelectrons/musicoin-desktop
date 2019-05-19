//var util = require('util');
//import Web3 from 'web3';
//var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
var Web3 = require('web3');

class Account{
	constructor(password, phrase){
		//bcrypt password & phrase asap
		this._crypted_pass = password;
		this._crypted_phrase = phrase;
	}
}

class Wallet{
	constructor(){
		this._accounts = {number: "one", pass: "two"};
		var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
		this._web3 = web3;
	}

	getAccounts(){
		return this._accounts;
		console.log("accounts()");
	}

	getWeb3(){
		return this._web3;
	}

	create_account(password, phrase){
		var account = new Account(password, phrase);
		_accounts.push(account);
	}
}

module.exports = Wallet;