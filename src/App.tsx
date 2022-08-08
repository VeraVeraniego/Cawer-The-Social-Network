import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { SideBar } from "./pages/SideBar";
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
      {!authenticate && (
        <Route
          path="/login"
          element={<Login authenticate={() => setAuthenticate(true)} />}
        ></Route>
      )}
      {authenticate && (
        <Route
          path="/"
          element={<SideBar logout={() => setAuthenticate(false)} />}
        >
          <Route path="home" element={<Home path="home" />}></Route>
          <Route path="feed" element={<Home path="feed" />}></Route>
          <Route path="post/:id" element={<PostDetails />}></Route>
        </Route>
      )}
      <Route
        path="*"
        element={<Navigate to={authenticate ? "/404" : "/login"} />}
      />

      <Route path="404" element={<NotFound />} />
    </Routes>
  );
}

export default App;
