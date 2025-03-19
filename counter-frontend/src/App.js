import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import CounterABI from "./contracts/Counter.json"; // Import the ABI
import "./App.css";

function App() {
  // State variables
  const [count, setCount] = useState(0);
  const [userAddress, setUserAddress] = useState("");
  const [contract, setContract] = useState(null);

  // Contract address (replace with your deployed contract address)
  const contractAddress = "0x4063d5c476A9f26598049F3F74F93fD7cB485f5e";

  // Connect wallet function
  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        // Initialize provider and signer
        const provider = new ethers.BrowserProvider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        const signer = await provider.getSigner();
        const address = await signer.getAddress();

        // Update state
        setUserAddress(address);

        // Initialize contract instance
        const contract = new ethers.Contract(contractAddress, CounterABI, signer);
        setContract(contract);

        // Fetch initial counter value
        const initialCount = await contract.getCount();
        setCount(Number(initialCount)); // Convert bigint to number
      } catch (error) {
        console.error("Error connecting wallet:", error);
      }
    } else {
      alert("Please install MetaMask!");
    }
  };

  // Disconnect wallet function
  const disconnectWallet = () => {
    setUserAddress(""); // Reset the user's wallet address
    setContract(null); // Reset the contract instance
    setCount(0); // Reset the counter value
  };

  // Increment function
  const increment = async () => {
    if (contract) {
      const tx = await contract.increment();
      await tx.wait();

      // Refresh the counter value
      const currentCount = await contract.getCount();
      setCount(Number(currentCount)); // Convert bigint to number
    }
  };

  // Decrement function
  const decrement = async () => {
    if (contract) {
      const tx = await contract.decrement();
      await tx.wait();

      // Refresh the counter value
      const currentCount = await contract.getCount();
      setCount(Number(currentCount)); // Convert bigint to number
    }
  };

  // Fetch count on component mount
  useEffect(() => {
    const fetchCount = async () => {
      if (contract) {
        const currentCount = await contract.getCount();
        setCount(Number(currentCount)); // Convert bigint to number
      }
    };

    if (contract) {
      fetchCount();
    }
  }, [contract]); // Only contract is in the dependency array

  // Render UI
  return (
    <div className="App">
      <h1>On-Chain Counter DApp</h1>
      {!userAddress ? (
        <button onClick={connectWallet}>Connect Wallet</button>
      ) : (
        <div>
          <p>Connected Wallet: {userAddress}</p>
          <p>Counter Value: {count}</p>
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
          <button onClick={disconnectWallet}>Disconnect Wallet</button>
        </div>
      )}
    </div>
  );
}

export default App;