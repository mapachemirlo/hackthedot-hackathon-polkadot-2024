// scripts/deploy_challenge_governance.js

async function main() {
    // Obtén la cuenta que desplegará el contrato
    const [deployer] = await ethers.getSigners();
    console.log("Desplegando ChallengeGovernance con la cuenta:", deployer.address);
  
    // Obtén el contrato ChallengeGovernance
    const ChallengeGovernance = await ethers.getContractFactory("ChallengeGovernance");
    
    // Despliega el contrato
    console.log("Desplegando ChallengeGovernance...");
    const governanceContract = await ChallengeGovernance.deploy();
    await governanceContract.deployed();
    
    console.log("ChallengeGovernance desplegado en:", governanceContract.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
  
