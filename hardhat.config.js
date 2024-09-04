require("@nomicfoundation/hardhat-toolbox");

require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  solidity: "0.8.23",
  settings: {
    optimizer: {
      enabled: true,
      viaIR: true,
      runs: 200,
    },
  },
  networks: {
    "lisk-sepolia": {
      url: "https://rpc.sepolia-api.lisk.com",
      accounts: [process.env.WALLET_KEY],
      gasPrice: 1000000000,
    },
  },
};
