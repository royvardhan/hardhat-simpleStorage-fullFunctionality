const { ethers, run, network } = require("hardhat");

async function main() {
  const SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
  console.log("Deploying SimpleStorage...");
  const simpleStorage = await SimpleStorageFactory.deploy();
  await simpleStorage.deployed();
  console.log("SimpleStorage deployed at:", simpleStorage.address);
  if (network.config.chainId === 5 && process.env.ETHERSCAN_API_KEY) {
    await simpleStorage.deployTransaction.wait(6); // will wait for 6 blocks before running the verification/nextline
    await verify(simpleStorage.address, []);
  }

  // we will now interact with the smart contract

  const currentVal = await simpleStorage.retrieve();
  console.log("Current value:", currentVal);

  const newVal = await simpleStorage.store(42);
  await newVal.wait(1);
  console.log("New value:", await simpleStorage.retrieve());
}

async function verify(contratAddress, args) {
  console.log("Verifying SimpleStorage...");
  try {
    await run("verify:verify", { address: contratAddress, args: args });
  } catch (error) {
    console.log(error);
  }
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

// Note: You can also use the terminal to run the code lines by just using "yarn hardhat console --network goerli"
// the console works in any network you have configured in your hardhat.config.js file.
