require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
  networks: {
    local: {
      url: "http://127.0.0.1:7545", // Ganache
      accounts: [
        "0x8222840cff915b086d42955cfbaeaa5a82b043730379fefc65114e68986bbaca",
      ],
    },
  },
};
