import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LandingPage from "./components/LandingPage/LandingPage";

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <h1>MASQUERADE</h1>
      </header>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
