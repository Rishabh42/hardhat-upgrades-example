// hardhat.config.js
const { infuraApiKey, mnemonic } = require("./secrets.json");

require("@nomiclabs/hardhat-ethers");
require("@openzeppelin/hardhat-upgrades");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.7.3",
  networks: {
    kovan: {
      url: `https://kovan.infura.io/v3/${infuraApiKey}`,
      accounts: { mnemonic: mnemonic },
    },
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${infuraApiKey}`,
      accounts: { mnemonic: mnemonic },
    },
  },
};
