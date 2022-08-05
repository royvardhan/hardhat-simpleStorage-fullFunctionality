require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();
require("./tasks/block-number");

const privateKey = process.env.PRIVATE_KEY;
const goerli = process.env.GOERLI_RPC_URL;
const ETHERSCAN = process.env.ETHERSCAN_API_KEY;
const hhprivateKey = process.env.HARDHAT_PRIVATE_KEY;
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: goerli,
      accounts: [privateKey],
      chainId: 5,
    },
    localhost: {
      url: "http://127.0.0.1:8545/",
      accounts: [hhprivateKey],
      chainId: 31337,
    },
  },
  etherscan: {
    apiKey: ETHERSCAN,
  },
};
