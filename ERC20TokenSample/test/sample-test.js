const { expect } = require("chai");
const { ethers } = require("hardhat");
require("dotenv").config();
const { MINTER_ACCOUNT,BURNER_ACCOUNT } = process.env;

describe("ERC20Token", function () {
  it("ERC20Token mint test", async function () {
    const ERC20Token = await ethers.getContractFactory("ERC20Token");
    const erc20Token = await ERC20Token.deploy("TestToken", "TOKEN",MINTER_ACCOUNT,BURNER_ACCOUNT);
    await erc20Token.deployed();
    const mintTx = await erc20Token.mint(10);
    // wait until the transaction is mined
    await mintTx.wait();
  });
});
