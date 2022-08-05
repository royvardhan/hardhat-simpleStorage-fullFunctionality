const { ethers, run, network } = require("hardhat");

async function main() {
  const SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
  console.log("Deploying SimpleStorage...");
  const simpleStorage = await SimpleStorageFactory.deploy();
  await simpleStorage.deployed();
  console.log("SimpleStorage deployed at:", simpleStorage.address);
  if (network.config.chainId === 5 && process.env.ETHERSCAN_API_KEY) {
    await verify(simpleStorage.address, []);
  }
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
