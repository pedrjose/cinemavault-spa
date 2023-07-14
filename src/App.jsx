import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Homepage } from "./pages/Homepage/Homepage";
import { LoggedHome } from "./pages/LoggedHome/LoggedHome";
import { Login } from "./pages/Login/login";
import { SignUp } from "./pages/SignUp/SignUp";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              localStorage.getItem("session") === "true" ? (
                <LoggedHome />
              ) : (
                <Homepage />
              )
            }
          ></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/*" element={<p>Route Not Found</p>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
