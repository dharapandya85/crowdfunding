const hre =require("hardhat");
const { ethers } = require("hardhat");

async function main(){
    const CrowdFunding= await hre.ethers.getContractFactory("CrowdFunding");
    const crowdFunding= await CrowdFunding.deploy();
    //contractFlashRaw = await ethers.deployContract("CrowdFunding");

//await contractFlashRaw.waitForDeployment();

console.log(contractFlashRaw.target);
    //await crowdFunding.deployed();

    console.log(`CrowdFunding deployed to ${crowdFunding.address}`);
}
main().catch((error)=>{
    console.error(error);
    process.exitCode=1;
});