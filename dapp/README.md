# Dapp

This file contains instructions to configure and start dapp. Dapp is integrated with wallet connect v1.0. Dapp currenly only has functionality for connecting/disconnecting a wallet using wallet connect to/from a dapp.

## Pre-requisites

Additional Pre-requisites for developement mode deployment:

- [Node 12](https://nodejs.org/es/blog/release/v12.22.7/)

## Setup

1. Clone the repository and checkout to main branch 

## Webapp Setup

### Config Update  

- Update config related to chain id , rpc url in index.js file located at `wallet_connect_sample/dapp/src/config/index.js`

- Update server port in package.json file. 

### **Local deployment**

Follow below steps to run the app in developement mode.

- After initial setup navigate to root directory of Relying party webapp and install node modules dependencies by executing below command.

    `npm install`

- Refer above config update section and update configs if needed.

- To start the Relying party webapp execute below command.Webapp will start on default port 3000 which can be accessed with `http://xxxx:3000/`

    `npm start`
