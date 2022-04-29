# Basic ERC20 token sample

This project demonstrates a basic ERC20 token sample. It comes with a sample contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts.


## Setup

- Add metamask account secret key in ERC20TOKENSAMPLE/.secret file.

- Add Ropsten or Polygon RPC URL's, burner/minter account addresses.

- Compile Solidity ERC20 contract with below command

    `npx hardhat compile`

- Deploy ERC20 smart contract with below command

    `node scripts/deploy.js`
