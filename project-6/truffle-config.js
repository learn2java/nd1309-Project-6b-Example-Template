const HDWalletProvider = require("@truffle/hdwallet-provider");
const mnemonic = "candy boost ice vast merry blue ahead trophy adapt average actress spot";

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },

    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/3029dcdfe2204c28844e612e9832bdba`),
        network_id: 4,       // rinkeby's id
        gas: 9000000,        // rinkeby has a lower block limit than mainnet
        gasPrice: 10000000000
    } 
  }
};