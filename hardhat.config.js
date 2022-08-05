require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();

const privateKey = process.env.PRIVATE_KEY;
const goerli = process.env.GOERLI_RPC_URL;
const ETHERSCAN = process.env.ETHERSCAN_API_KEY;
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: goerli,
      accounts: [privateKey],
      chainId: 5,
    },
  },
  etherscan: {
    apiKey: ETHERSCAN,
  },
};
