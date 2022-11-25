const { expect } = require("chai");
const hre = require("hardhat");
const { time } = require("@nomicfoundation/hardhat-network-helpers");

describe("Lock", function () {
  it("Should set the right unlockTime", async function () {
    const lockedAmount = 1_000_000_000;
    const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
    const unlockTime = (await time.latest()) + ONE_YEAR_IN_SECS;
    let owner= "0xaF09B9535E239AaDcC2B96331341647F84a3537f"
    // deploy a lock contract where funds can be withdrawn
    // one year in the future
    const Lock = await hre.ethers.getContractFactory("NAPASociety");
    const lock = await Lock.deploy(owner,owner,0,0);

    // assert that the value is correct
    await Lock.deployed();
    console.log(Lock.address)
  });
});