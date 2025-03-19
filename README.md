# On-Chain Counter DApp

A simple decentralized application (DApp) that allows users to interact with a smart contract deployed on the Monad Testnet. The app features a counter that can be incremented or decremented, with all changes stored on the blockchain.

## Features

- **Connect Wallet**: Connect your Web3 wallet (e.g., MetaMask) to the Monad Testnet.
- **View Counter**: Display the current value of the on-chain counter.
- **Increment Counter**: Increase the counter value by 1.
- **Decrement Counter**: Decrease the counter value by 1 (if greater than 0).
- **Disconnect Wallet**: Disconnect your wallet and reset the app.

## Prerequisites

Before running the app, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or later)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)
- A Web3 wallet (e.g., [MetaMask](https://metamask.io/))
- Testnet MON tokens (for gas fees on the Monad Testnet)

## Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/siliasi/on-chain-counter-dapp.git
   cd on-chain-counter-dapp

 2. **Install Dependencies**:
  ```bash
npm install

3. Run the App:

npm start

Open the App:
The app will open in your default browser at http://localhost:3000.

Usage
Connect Your Wallet:

Click the "Connect Wallet" button.

Approve the connection in your Web3 wallet (e.g., MetaMask).

Interact with the Counter:

Increment: Click the "Increment" button to increase the counter by 1.

Decrement: Click the "Decrement" button to decrease the counter by 1 (if greater than 0).

Disconnect Your Wallet:

Click the "Disconnect Wallet" button to reset the app.

Smart Contract
The app interacts with a simple smart contract deployed on the Monad Testnet. The contract has the following functions:

getCount(): Returns the current value of the counter.

increment(): Increases the counter by 1.

decrement(): Decreases the counter by 1 (if greater than 0).

Contract Address 
0x4063d5c476A9f26598049F3F74F93fD7cB485f5e

Technologies Used
Frontend: React.js

Web3 Library: ethers.js

Blockchain: Monad Testnet

Smart Contract: Solidity


License
This project is licensed under the MIT License. See the LICENSE file for details.

Acknowledgments
Monad for providing the testnet environment.

ethers.js for simplifying Web3 interactions.

React for building the frontend.

