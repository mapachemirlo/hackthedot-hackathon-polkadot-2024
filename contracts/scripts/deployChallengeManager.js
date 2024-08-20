// scripts/deployChallengeManager.js

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Desplegando contratos con la cuenta:", deployer.address);

    // Dirección de los contratos ya desplegados
    const governanceContractAddress = "0xACDDa47A43d704ADaaC5b049288C94e5cb401fdE";
    const tokenContractAddress = "0x7204d112Ef25E664D45c49B1497BA1fB146d5323";

    // Obtenemos la fábrica de contratos para ChallengeManager
    const ChallengeManager = await ethers.getContractFactory("ChallengeManager");

    // Desplegamos el contrato ChallengeManager pasando las direcciones de los otros contratos
    const manager = await ChallengeManager.deploy(governanceContractAddress, tokenContractAddress);

    await manager.deployed();

    console.log("ChallengeManager desplegado en:", manager.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
