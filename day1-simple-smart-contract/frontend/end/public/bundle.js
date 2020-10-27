var contractABI = [];
var contractAddress = '0x0F94D020eAA3A3e6Ca5Be55Bab76265a3940f492';
var web3 = new Web3('http://localhost:9545');
var simpleSmartContract = new web3.eth.Contract(contractABI, contractAddress);

console.log(simpleSmartContract);

web3.eth.getAccounts()
    .then(console.log);