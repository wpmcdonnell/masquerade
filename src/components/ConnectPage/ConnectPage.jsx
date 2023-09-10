import "./ConnectPage.scss"
import { useMetaMask } from "../../hooks/metaMaskContext";

const ConnectPage = () => {

   const { connectMetaMask, metaMaskInit } = useMetaMask();


  return (
    <>
    <div className="connect-page-container">
        <p className="connect-prompt">Click the connect button below to begin with MetaMask</p>
  <button onClick={metaMaskInit}> Connect Wallet</button>
    </div>
    </>
  );
};

export default ConnectPage;