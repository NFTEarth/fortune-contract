import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-ethers";
import "@nomicfoundation/hardhat-verify";

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.20",
        settings: {
          evmVersion: 'istanbul',
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  etherscan: {
    apiKey: {
      //mainnet: "YOUR_ETHERSCAN_API_KEY",
      //optimisticEthereum: "YOUR_OPTIMISTIC_ETHERSCAN_API_KEY",
      arbitrumOne: "YOUR_ARBITRUM_ONE_API_KEY",
      arbitrumGoerli: "YOUR_ARBITRUM_GOERLI_API_KEY"
    }
  },
  networks: {
    "arbitrum": {
      url: 'https://arb1.arbitrum.io/rpc',
      accounts: [],
    },
    "arbitrum-goerli": {
      url: 'https://goerli-rollup.arbitrum.io/rpc',
      accounts: [],
    },
    hardhat: {}
  }
};

export default config;
