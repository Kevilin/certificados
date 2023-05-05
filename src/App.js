import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Posts from "./pages/Posts";
import Submit from "./pages/Submit";
import Footer from "./components/Footer";
import Error from "./pages/Error";
import Login from "./components/Login";
import { UserAuthContextProvider } from "./context/userAuthContext";

function App() {
  return (
    <>
      <UserAuthContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Posts />} />
            <Route path="/adm" element={<Login />} />
            <Route path="/add" element={<Submit />} />
            <Route path="/*" element={<Error />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </UserAuthContextProvider>
    </>
  );
}

export default App;
