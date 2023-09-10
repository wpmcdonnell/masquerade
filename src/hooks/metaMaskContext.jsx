import contractData from "./../assets/Ball.json";

import { MetaMaskSDK } from '@metamask/sdk';
import { createContext, useCallback, useContext, useState } from 'react';
import Web3 from 'web3';

const MetaMaskContext = createContext();


  export const MetaMaskContextProvider = ({ children }) => {
    const [sdk, setSDK] = useState(null);
    const [wallet, setWallet] = useState(null);
    const [ethereum, setEthereum] = useState(null);




        const connectMetaMask = useCallback(async () => {
            const acc = await sdk
              ?.connect()
              .then((accounts) => {
                setEthereum(sdk.getProvider());
                console.log(accounts);
                setWallet(accounts[0]);
              })
        
              .catch((e) => {
                console.log(e);
              });
        console.log("triggered connectMetaMask")
       console.log(wallet)
          }, [sdk]);


    const metaMaskInit = useCallback(async () => {
        const options = {
          checkInstallationImmediately: false,
          dappMetadata: {
            name: "Ticket Monke",
            url: window.location.host,
          },
        };
    
        const MMSDK = new MetaMaskSDK(options);
        console.log(MMSDK);
        setSDK(MMSDK);
      }, [setSDK]);

      const handleContractDeploy = async () => {
        const provider = sdk?.getProvider();
    
        const web3 = new Web3(provider);
    
        const ballContract = new web3.eth.Contract(contractData.abi);
    
        // Estimate gas price
        const gasPrice = await web3.eth.getGasPrice();
    
        // Deploy contract
        ballContract
          .deploy({
            data: contractData.bytecode,
            // @ts-ignore
            arguments: ["Test1", 20, 10000000000],
          })
          .send({
            // @ts-ignore
            from: wallet,
    
            gasPrice: Web3.utils.toHex(gasPrice),
          })
          .on("error", (error) => {
            console.error("An error occurred: ", error);
          })
          .on("transactionHash", (transactionHash) => {
            console.log("Transaction hash: ", transactionHash);
          })
          .on("receipt", (receipt) => {
            console.log("New contract address: ", receipt.contractAddress);
          });
      };

    return (
        <MetaMaskContext.Provider value={{ connectMetaMask, metaMaskInit, sdk, wallet, handleContractDeploy }}>
          {children}
        </MetaMaskContext.Provider>
      );
    };

    export const useMetaMask = () => {
        return useContext(MetaMaskContext);
      };