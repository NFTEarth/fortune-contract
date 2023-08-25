import { ethers } from "hardhat";
import fortuneDeployArguments from './fortune-deploy-arguments'

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const fortune = await ethers.deployContract(
    "Fortune",
    fortuneDeployArguments
  );

  await fortune.waitForDeployment();

  console.log(
    `Fortune deployed to ${fortune.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
