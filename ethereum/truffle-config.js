const HDWalletProvider = require('@truffle/hdwallet-provider');


module.exports = {
  networks: {
    development: {
      provider: () =>
        new HDWalletProvider(['0xa872f6cbd25a0e04a08b1e21098017a9e6194d101d75e13111f71410c59cd57f'], 'http://localhost:8545'),
      host: "127.0.0.1",
      port: 8545,
      network_id: 595,
      gasPrice: 200786445289, // storage_limit = 64001, validUntil = 360001, gasLimit = 10000000
      gas: 42032000,
    },
    development2: {
      host: "127.0.0.1",
      port: 8546,
      network_id: "*",
    },
  },

  compilers: {
    solc: {
      version: "0.8.4",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200,
        },
      },
    },
  },

  plugins: ["@chainsafe/truffle-plugin-abigen", "truffle-plugin-verify"],
};
