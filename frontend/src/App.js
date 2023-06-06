/* eslint-disable no-unused-vars */

import abi from './contracts/chai.json'
import React from 'react'
import { useState, useEffect } from 'react'
import { ethers } from 'ethers'

import Buy from './components/buy'
import Memo from './components/memo'

export default function App() {

  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null
  });

  const [account, setAccount] = useState("None");

  useEffect(() => {
    const connectWallet = async () => {
      const contractAddress = "0x3fB5D3BA06413071C3f6bC00Aa0c5746ACe1413F";
      const contractABI = abi.abi;
      try {
        const { ethereum } = window;

        if (ethereum) {
          const account = await ethereum.request({
            method: "eth_requestAccounts",
          });

          window.ethereum.on("chainChanged", () => {
            window.location.reload();
          });

          window.ethereum.on("accountsChanged", () => {
            window.location.reload();
          });

          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();
          const contract = new ethers.Contract(
            contractAddress,
            contractABI,
            signer
          );
          setAccount(account);
          setState({ provider, signer, contract });
          // console.log(state);
        } else {
          alert("Please install metamask");
        }
      } catch (error) {
        console.log(error);
      }
    }
    connectWallet()
  })


  return (
    <>
      <div style={{'fontFamily': 'Carter One, cursive'}}>
        <div style={{"textAlign":"center"}}>
          <h1 className='m-2' style={{'color':'blueviolet'}}>My First DApp</h1>
          <h3>Buy me a Chai</h3>
          <img className='rounded mx-auto d-block' src="/images/chai1.avif" alt="coffee" height={"auto"} width={"200px"} />
        </div>
        <div style={{'backgroundImage':'url(/images/eth2.png)',"backgroundRepeat":"no-repeat","backgroundSize":"contain",'backgroundPosition': 'center'}}>
          <Buy state={state}></Buy>
          
        </div>
          <Memo state={state}></Memo>
      </div>
    </>
  )
}