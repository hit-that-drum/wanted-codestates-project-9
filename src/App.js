import GlobalStyles from "./GlobalStyles";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import BBEESSTT from "./pages/BBEESSTT";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/BBEESSTT" element={<BBEESSTT />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
