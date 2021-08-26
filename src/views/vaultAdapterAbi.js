import web3 from "../web3";

var vaultadapter ='0xC907654c31adC28975d7D0479316A4473Fc2e722';


const abi=[{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IDetailedERC20","name":"token_","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"contract IDetailedERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalValue","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_recipient","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}];
export default new web3.eth.Contract(abi, vaultadapter);