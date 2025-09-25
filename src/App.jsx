import "./App.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import CurrencyConverter from "./pages/CurrencyConverter";
import PasswordGenerator from "./pages/PasswordGenerator";
import SearchMovies from "./pages/SearchMovies";
import Weather from "./pages/Weather";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<CurrencyConverter/>} />
        <Route path="/p" element={<PasswordGenerator/>} />
        <Route path="/m" element={<SearchMovies/>} />
        <Route path="/w" element={<Weather/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
