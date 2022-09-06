require("@nomicfoundation/hardhat-toolbox");
// require("@nomicfoundation/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
const dotenv = require("dotenv");
const { task } = require("hardhat/config");

dotenv.config();

task("accounts", "prints the list of account", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();
  for(const account of accounts){
    console.log(account.address);
  }
});

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    mumbai: {
      url: process.env.POLYGON_MUMBAI,
      accounts: [process.env.PRIVATE_KEY]
    }
  },
  etherscan: {
    apikey: {
      polygonMumbai: process.env.API_KEY
    },
  }
};
