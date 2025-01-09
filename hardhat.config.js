require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
  
  networks: {
    // goerli: {
    //     url: goerli_rpc,
    //     accounts: [goerli_pk],
    //     chainId: 5,
    //     blockConfirmations: 6,
    // },
    // hardhat: {
    //     forking: {
    //         url: goerli_rpc,
    //         blockNumber: 9326339,
    //     },
    //     gasLimit: 3e10, // whatever you want here
    //     allowUnlimitedContractSize: true
    // },
    // sepolia :{
    //     url: sepolia_rpc,
    //     accounts: [sepolia_pk],
    //     chainId: 11155111,
    //     blockConfirmations : 6
    //   },
    localhost: {
      url: "http://127.0.0.1:8545",
      chainId: 31337,
      accounts: ["0x2a871d0798f97d79848a013d4936a73bf4cc922c825d33c1cf7073dff6d409c6"]
    }
},
};
