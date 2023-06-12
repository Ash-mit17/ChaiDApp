import { ethers } from 'ethers';
import React from 'react'

export default function Buy({state}) {

  const handleSubmit = async (e)=>{
    e.preventDefault();
    const {contract} = state;
    const name = document.querySelector("#name").value;
    const message = document.querySelector("#msg").value;
    const ether = document.querySelector("#eth").value;

    const amount = {value:ethers.utils.parseEther(ether)};
    const transaction = await contract.buyChai(name,message,amount);
    await transaction.wait();
  } 
    
  return (
    <>
        <div className="container-md" style={{ width: "50%", marginTop: "25px" }}>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter Your Name"
              autoComplete='off'
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Message</label>
            <input
              type="text"
              className="form-control"
              id="msg"
              placeholder="Enter Your Message"
              autoComplete='off'
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Send me some eth</label>
            <input
              type="text"
              className="form-control"
              id="eth"
              placeholder="Ether"
              autoComplete='off'
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={!state.contract}
          >
            Pay
          </button>
        </form>
      </div>
    </>
  )
}
