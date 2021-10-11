require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-waffle");

const fs = require('fs');
require('dotenv').config();
const mnemonic = process.env.MNEMONIC;
const polyapikey = process.env.POLYAPIKEY;

module.exports = {
  defaultNetwork: "maticT",
  networks: {
    hardhat: {
    },
    matic: {
      url: "https://rpc-mainnet.maticvigil.com",
      accounts: {mnemonic: mnemonic}
    },
    maticT: {
          url: "https://rpc-mumbai.maticvigil.com",
          accounts: {mnemonic: mnemonic}
        },
    bsc: {
          url: "https://bsc-dataseed.binance.org",
          accounts: {mnemonic: mnemonic}
        }
  },
  solidity: {
    version: "0.6.12",
  },
  paths: {
      sources: "./contracts",
//      tests: "./test",
      cache: "./cache",
      artifacts: "./artifacts"
    },
  mocha: {
    timeout: 20000
  },
  etherscan: {
      apiKey: polyapikey
    },
}