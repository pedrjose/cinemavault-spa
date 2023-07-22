import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Homepage } from "./pages/Homepage/Homepage";
import { LoggedHome } from "./pages/LoggedHome/LoggedHome";
import { Login } from "./pages/Login/login";
import { SignUp } from "./pages/SignUp/SignUp";
import { MoviePage } from "./pages/MoviePage/MoviePage";
import { SearchPage } from "./pages/SearchPage/SearchPage";
import { GenrePage } from "./pages/GenrePage/GenrePage";
import { Redirect } from "./components/Navbar/Redirect/Redirect";

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
          <Route
            path="/login"
            element={
              localStorage.getItem("session") === "false" ? (
                <Login />
              ) : (
                <Redirect />
              )
            }
          ></Route>
          <Route
            path="/signup"
            element={
              localStorage.getItem("session") === "false" ? (
                <SignUp />
              ) : (
                <Redirect />
              )
            }
          ></Route>
          <Route path="/movie/:id" element={<MoviePage />}></Route>
          <Route path="/search/:title" element={<SearchPage />}></Route>
          <Route path="/genre/:genre" element={<GenrePage />}></Route>
          <Route path="/*" element={<Redirect />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
