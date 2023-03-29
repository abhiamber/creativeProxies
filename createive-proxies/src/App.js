import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HomePage from "./Pages/HomePage";
import LocationChecker from "./Pages/LocationChecker";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/location" element={<LocationChecker />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
