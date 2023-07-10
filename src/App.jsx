import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Homepage } from "./pages/Homepage/Homepage";
import { SettingsModal } from "./components/Navbar/Modal/SettingsModal/SettingsModal";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/teste" element={<SettingsModal/>}></Route>
          <Route path="/*" element={<p>Route Not Found</p>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
