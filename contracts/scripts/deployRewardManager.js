// scripts/deployRewardManager.js

async function main() {
    const [deployer] = await ethers.getSigners();
  
    console.log("Deploying RewardManager contract with the account:", deployer.address);
  
    // Dirección del propietario inicial
    const initialOwner = deployer.address; // Puedes cambiar esto a otra dirección si lo deseas
  
    // Get the RewardManager contract factory
    const RewardManager = await ethers.getContractFactory("RewardManager");
  
    // Deploy the RewardManager contract
    const rewardManager = await RewardManager.deploy(initialOwner);
  
    console.log("RewardManager deployed to:", rewardManager.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
  