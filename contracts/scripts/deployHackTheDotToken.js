// scripts/deployHackTheDotToken.js

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Desplegando contratos con la cuenta:", deployer.address);

    // Aquí pasamos la dirección del deployer como initialOwner
    const HackTheDotToken = await ethers.getContractFactory("HackTheDotToken");
    const token = await HackTheDotToken.deploy(deployer.address);

    await token.deployed();

    console.log("HackTheDotToken desplegado en:", token.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });

