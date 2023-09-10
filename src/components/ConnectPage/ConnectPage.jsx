import "./ConnectPage.scss"
import { useMetaMask } from "../../hooks/metaMaskContext";
import { Link } from "react-router-dom";

const ConnectPage = () => {


   const {  wallet, metaMaskInit, connectMetaMask, sdk  } = useMetaMask();


  return (
    <>
    <div className="connect-page-container">
       {wallet ? <> <p>{wallet}</p> <div className="ticket-create-event-wrapper"><Link><button>Buy Tickets</button></Link> <Link><button>Create Event</button></Link></div> </>: <> 
       <div className="connect-prompt-wrapper">
        <p className="connect-prompt">Click the connect button below to begin with MetaMask</p>
        </div>

  {sdk ? <button onClick={connectMetaMask}> Connect Wallet</button> : <button onClick={metaMaskInit}> Request MetaMask</button> }
  </>
}
    </div>
    </>
  );
};

export default ConnectPage;