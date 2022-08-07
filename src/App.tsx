import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { SideBar } from "./components/SideBar";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { NotFound } from "./pages/NotFound";
import { PostDetails } from "./pages/PostDetails";

function App() {
  const [authenticate, setAuthenticate] = useState<boolean | null>(null);

  useEffect(() => {
    const auth = localStorage.getItem("userAuth");
    auth && JSON.parse(auth) ? setAuthenticate(true) : setAuthenticate(false);
  }, []);

  return (
    <Routes>
      <Route
        path="/login"
        element={<Login authenticate={() => setAuthenticate(true)} />}
      ></Route>
      <Route path="/" element={<SideBar />}>
        <Route path="home" element={<Home path="home" />}></Route>
        <Route path="feed" element={<Home path="feed" />}></Route>
        <Route path="post/:id" element={<PostDetails />}></Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
