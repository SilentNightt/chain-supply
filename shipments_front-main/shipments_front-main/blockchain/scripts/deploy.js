const hre = require("hardhat");

async function main() {
  const SupplyChain = await hre.ethers.getContractFactory("SupplyChain");
  const supplyChain = await SupplyChain.deploy();

  console.log(
    `SupplyChain контракт развернут по адресу: ${supplyChain.target}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
