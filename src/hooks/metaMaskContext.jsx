import { MetaMaskSDK } from '@metamask/sdk';
import { createContext, useCallback, useContext, useState } from 'react';

const MetaMaskContext = createContext();


  export const MetaMaskContextProvider = ({ children }) => {
    const [sdk, setSDK] = useState(null);



    const connectMetaMask = async () => {
        try {
          const accounts = await sdk.ethereum.request({
            method: "eth_requestAccounts",
          });
          console.log(accounts);
        } catch (error) {
          console.error(error);
        }
    };  

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

    return (
        <MetaMaskContext.Provider value={{ connectMetaMask, metaMaskInit }}>
          {children}
        </MetaMaskContext.Provider>
      );
    };

    export const useMetaMask = () => {
        return useContext(MetaMaskContext);
      };