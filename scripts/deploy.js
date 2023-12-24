const hre = require("hardhat");

async function main() { 
  const COFFEE = await hre.ethers.getContractFactory("Coffee");
  const coffee = await COFFEE.deploy();

  await coffee.waitForDeployment();

  console.log("Deployed Contract Address: ", coffee.target);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// 0xD2E0a0785766537C6404ba12Ed1D4b429Ebe50F6
