import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const priceOracle = await ethers.deployContract("PriceOracle",
    [
      deployer.address,
      "0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6" // CHANGE WETH ADDRESS Respectively
    ]);

  await priceOracle.waitForDeployment();

  console.log(
    `PriceOracle deployed to ${priceOracle.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
