const { assert } = require("chai");
const { ethers } = require("hardhat");

describe("SimpleStorage", () => {
  let simpleStorageFactory;
  let simpleStorage;

  beforeEach(async function () {
    simpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
    simpleStorage = await simpleStorageFactory.deploy();
  });

  it("Starts with a fav number 0", async function () {
    const currentVal = await simpleStorage.retrieve();
    const expectedVal = "0";
    assert.equal(currentVal.toString(), expectedVal);
  });

  it("Should update when we call store()", async () => {
    const res = await simpleStorage.store(7);
    await res.wait(1);
    const expectedVal = "7";
    const currentVal = await simpleStorage.retrieve();
    assert.equal(currentVal.toString(), expectedVal);
  });
});

// If you want to run only one test, then use "yarn hardhat test --grep testname/keywork"
