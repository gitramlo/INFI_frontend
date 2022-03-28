import Web3 from 'web3';
// connectToWallet()
async function connectToWallet() {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const account = accounts[0];
    return { accountAddress: account };
  }
  export default connectToWallet();


// import { ethers } from "ethers";

// async function connectWallet() {
//     const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
//     // Prompt user for account connections
//     await provider.send("eth_requestAccounts", []);
//     const signer = provider.getSigner();
//     console.log("Account:", await signer.getAddress());
// }

// export default connectWallet();


