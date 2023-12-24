import { useState, useEffect } from 'react';
import './App.css';
import { ethers } from "ethers";
import { CONTRACT_ADDRESS, ABI } from "./constants/constant";
import BuyCoffee from './components/BuyCoffee';
import Memos from './components/Memos';

function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null
  });

  const [account, setAccount] = useState("Not Connected!");

  useEffect(() => {
    const initializer = async() => {
      const contractAddress = CONTRACT_ADDRESS;
      const contract_ABI = ABI;

      try {
        const { ethereum } = window;
        const account = await ethereum.request({
          method: "eth_requestAccounts"
        });

        window.ethereum.on("accountsChanged", () => {
          window.location.reload();
        });

        setAccount(account[0]);

        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contractAddress, contract_ABI, signer);

        setState({provider, signer, contract});
      } catch (error) {
        console.log(error);
      }

    }
    initializer();
  }, []);

  return (
    <div className='App'>
      Connected Account: {account}
      <BuyCoffee state={state}></BuyCoffee>
      <Memos state={state}></Memos>
    </div>
  )
}

export default App
