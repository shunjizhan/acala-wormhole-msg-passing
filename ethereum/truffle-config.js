const HDWalletProvider = require('@truffle/hdwallet-provider');

// const mnemonicPhrase = 'fox sight canyon orphan hotel grow hedgehog build bless august weather swarm';  // mandala
const mnemonicPhrase = 'myth like bonus scare over problem client lizard pioneer submit female collect';  // fake eth mandala

module.exports = {
  networks: {
    development: {
      provider: () =>
        new HDWalletProvider(mnemonicPhrase, 'http://localhost:8545'),
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
