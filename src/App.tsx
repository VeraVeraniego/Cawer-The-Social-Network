import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { NotFound } from "./pages/NotFound";
import { PostDetails } from "./pages/PostDetails";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />}></Route>
      <Route index element={<Home />}></Route>
      <Route path="/post" element={<PostDetails />}></Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
