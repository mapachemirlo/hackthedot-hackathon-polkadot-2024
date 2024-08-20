// scripts/deployLevelManager.js

async function main() {
    const [deployer] = await ethers.getSigners();
  
    console.log("Deploying LevelManager contract with the account:", deployer.address);
  
    // Get the LevelManager contract factory
    const LevelManager = await ethers.getContractFactory("LevelManager");
  
    // Deploy the LevelManager contract
    const levelManager = await LevelManager.deploy();
  
    console.log("LevelManager deployed to:", levelManager.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
  