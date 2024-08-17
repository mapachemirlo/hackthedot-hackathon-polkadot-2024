require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require("dotenv").config();

module.exports = {
  solidity: "0.8.20",
  networks: {
    moonbeam: {
      url: "https://rpc.api.moonbase.moonbeam.network",
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    },
  },
};


// require("@nomicfoundation/hardhat-toolbox");

// /** @type import('hardhat/config').HardhatUserConfig */
// module.exports = {
//   solidity: "0.8.24",
// };
