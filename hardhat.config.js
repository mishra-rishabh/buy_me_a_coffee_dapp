require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */

const GOERLI_URL = process.env.GOERLI_RPC_URL_ALCHEMY;
const PVT_KEY = process.env.PVT_KEY;

module.exports = {
  solidity: "0.8.19",
  networks: {
    goerli: {
      url: GOERLI_URL,
      accounts: [PVT_KEY]
    }
  }
};
