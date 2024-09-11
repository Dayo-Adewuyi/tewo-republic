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
   base: {
      url: "https://base-sepolia.g.alchemy.com/v2/2CM4ba_Mac8PMo6GEyKFAZ8Nk2oTZJE-",
      accounts: [process.env.WALLET_KEY],
      gasPrice: 1000000000,
    },
  },
  etherscan: {
    apiKey: {
      base: process.env.API_KEY
    },
  },
  sourcify: {
    enabled: false
  },
};
