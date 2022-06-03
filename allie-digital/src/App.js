// import logo from './logo.svg';
import './App.css';
import Principal from './pages/Principal';
// import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header> */}
      <Principal />
      {/* <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="about" element={<Sobre />} />
      </Routes> */}
    </div>
  );
}

export default App;
