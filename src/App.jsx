import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import PageNotFound from "./Pages/PageNotFound";
import Testing from "./Pages/Testing";
import Video from "./Pages/Video";
import { useState } from "react";
import Instruction from "./Pages/Instruction";
import Intro from "./Pages/Intro";

export default function App() {
  const [userid, setUserid] = useState("");

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Intro />} />
        <Route path="login" element={<Login setUserid={setUserid} />} />
        <Route path="instruction" element={<Instruction />} />
        <Route path="testing" element={<Testing userid={userid} />} />
        <Route path="video" element={<Video />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
