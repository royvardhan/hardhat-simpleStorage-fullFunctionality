require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();
require("./tasks/block-number");
require("hardhat-gas-reporter");
require("solidity-coverage");
// require("hardhat-waffle");

const privateKey = process.env.PRIVATE_KEY;
const goerli = process.env.GOERLI_RPC_URL;
const ETHERSCAN = process.env.ETHERSCAN_API_KEY;
const hhprivateKey = process.env.HARDHAT_PRIVATE_KEY;
const cmcApi = process.env.CMC_API_KEY;
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
  gasReporter: {
    enabled: true,
    outputFile: "gas-report.txt",
    noColors: true,
    currency: "USD",
    coinmarketcap: cmcApi,
    token: "ETH",
  },
};
