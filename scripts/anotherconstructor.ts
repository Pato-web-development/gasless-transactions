import { ethers } from "hardhat";

async function main() {
const [owner] = await ethers.getSigners();
const getmycontract = await ethers.getContractFactory("theconstructor");
const deploymycontract = await getmycontract.deploy();
const deployedcontract = await deploymycontract.deployed();
const contaddress = deployedcontract.address;
console.log(`And finally we deployed our constructor contract at ${contaddress}`);
console.log(await deployedcontract.viewcode());
}


// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });