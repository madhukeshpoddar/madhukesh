console.log('starting password manager');

var storage = require('node-persist');
storage.initSync();

function createAccount (account)
{
	var accounts =storage.getItemSync('accounts');
	if(typeof accounts === 'undefined'){
		accounts = [];
	}
	accounts.push(account);
	storage.setItemSync('accounts', accounts);
	return account;
}

function getAccount(accountName)
{
	var accounts = storage.getItemSync('accounts');
	var matchedAccounts;
	accounts.forEach(function (account)
	{
		if(account.name === accountName){
			matchedAccounts = account;
		}
	});
	return matchedAccounts;
}

// createAccount({
// 	name: 'facebook',
// 	username: 'some@gmail.com',
// 	password: '123!'
// });
var fbAccount =getAccount('facebook');
console.log(fbAccount);