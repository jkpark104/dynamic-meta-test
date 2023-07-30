import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Others from "./pages/others";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/others" element={<Others />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
