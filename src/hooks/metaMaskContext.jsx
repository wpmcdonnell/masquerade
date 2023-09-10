import { MetaMaskSDK } from '@metamask/sdk';
import { createContext, useCallback, useContext, useState } from 'react';

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

    return (
        <MetaMaskContext.Provider value={{ connectMetaMask, metaMaskInit, sdk, wallet }}>
          {children}
        </MetaMaskContext.Provider>
      );
    };

    export const useMetaMask = () => {
        return useContext(MetaMaskContext);
      };