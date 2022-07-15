/**
* @type import('hardhat/config').HardhatUserConfig
*/
require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-waffle");


task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
   const accounts = await hre.ethers.getSigners();

   for (const account of accounts) {
      console.log(account.address);
   }
});

module.exports = {
   defaultNetwork: "localhost",
   networks: {
      localhost: {
        url: "http://127.0.0.1:8545"
      },
      hardhat: {},
      alfajores: {
        url: "https://alfajores-forno.celo-testnet.org",
        accounts: {
          mnemonic: process.env.MNEMONIC,
          path: "m/44'/52752'/0'/0"
        },
        chainId: 44787
    }
   },
   
   solidity: {
      version: "0.7.5",
      settings: {
         optimizer: {
            enabled: true,
            runs: 200
         }
      }
   },
}