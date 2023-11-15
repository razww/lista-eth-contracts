import { DEPLOYMENT_PARAMS } from "../../constants";
import { Contract } from "ethers";
import { ethers } from "hardhat";

const params = DEPLOYMENT_PARAMS[11155111];

export const deployTokenLocker = async (listaCore: Contract) => {
  console.log("Deploying TokenLocker...");
  const tokenLocker = await ethers.deployContract("TokenLocker", [
    listaCore.address,
    ethers.constants.AddressZero,
    ethers.constants.AddressZero,
    params.manager,
    params.lockToTokenRatio,
  ]);
  await tokenLocker.deployed();
  console.log("TokenLocker deployed to:", await tokenLocker.address);

  return tokenLocker;
};