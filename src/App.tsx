import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { PostDetails } from "./pages/PostDetails";

function App() {
  return (
    <Routes>
      <Route index element={<Login />}></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/post" element={<Post />}></Route>
    </Routes>
  );
}

export default App;
