// import logo from './logo.svg';
import './App.css';
import Principal from './pages/Principal';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Principal />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
