import "./App.css";
import {BrowserRouter as Router, Routes, Route, useNavigate} from "react-router-dom";
import CurrencyConverter from "./pages/CurrencyConverter";
import PasswordGenerator from "./pages/PasswordGenerator";
import SearchMovies from "./pages/SearchMovies";
import Weather from "./pages/Weather";
import Navbar from "./components/Navbar";

function App() {

  const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", padding: "100px" }}>
      <h1 style={{color:"red", fontSize:'30px', fontWeight:'700' }}>404 - Invalid URL</h1>
      <p style={{color:"black"}}>This URL is incorrect. Please go back previous URL.</p>
      <button
        onClick={() => navigate(-1)}
        style={{ padding: "10px 20px", marginTop: "20px", borderRadius: "8px", cursor: "pointer", backgroundColor: "#007BFF", color: "white" }}
      >
        Go Back
      </button>
    </div>
  );
};

  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<CurrencyConverter/>} />
        <Route path="/p" element={<PasswordGenerator/>} />
        <Route path="/m" element={<SearchMovies/>} />
        <Route path="/w" element={<Weather/>} />
        <Route path="/*" element={<NotFound/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
