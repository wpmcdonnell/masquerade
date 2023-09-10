import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LandingPage from "./components/LandingPage/LandingPage";
import ConnectPage from "./components/ConnectPage/ConnectPage";
import { MetaMaskContextProvider } from "./hooks/metaMaskContext";
import CreateEventPage from "./components/CreateEventPage/CreateEventPage";

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <h1>MASQUERADE</h1>
      </header>
      <MetaMaskContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/connect" element={<ConnectPage />} />
            <Route path="/create-event" element={<CreateEventPage />} />
          </Routes>
        </Router>
      </MetaMaskContextProvider>
    </div>
  );
}

export default App;
