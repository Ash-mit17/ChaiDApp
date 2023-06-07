const hre = require("hardhat");

async function main() {
  const chai = await hre.ethers.getContractFactory("chai");
  const contract = await chai.deploy(); //instance of contract

  await contract.deployed();
  console.log("Address of contract:", contract.address);
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


//0x3fB5D3BA06413071C3f6bC00Aa0c5746ACe1413F contract address