import { useMetaMask } from "../../hooks/metaMaskContext";

const CreateEventPage = () => {
    const { handleContractDeploy } = useMetaMask();
    return (<> <div>Create Event Page</div> <button onClick={handleContractDeploy}>Deploy a contract</button></>);
}

export default CreateEventPage;