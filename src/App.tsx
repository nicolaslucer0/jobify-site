import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Header from "./components/Home/components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Offers from "./components/Offers";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="offer" element={<Offers />} />
      </Routes>
    </>
  );
}

export default App;
