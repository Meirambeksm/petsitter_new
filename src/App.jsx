import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import PageNotFound from "./Pages/PageNotFound";
import Testing from "./Pages/Testing";
import { useState } from "react";
import Instruction from "./Pages/Instruction";
import useRequest from "./Services/useRequest";
import Intro from "./Pages/Intro";

export default function App() {
  const [details, setDetails] = useState([]);
  useRequest("http://localhost:8080/api/users/", setDetails);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Intro />} />
        <Route
          path="login"
          element={<Login details={details} setDetails={setDetails} />}
        />
        <Route path="instruction" element={<Instruction />} />

        <Route
          path="testing"
          element={<Testing details={details} setDetails={setDetails} />}
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

// useEffect(function () {
//   async function fetchContacts() {
//     try {
//       const res = await fetch("http://localhost:8080/api/users/");
//       const data = await res.json();
//       setDetails(data);
//     } catch {
//       alert("There was an error loading data...");
//     }
//   }
//   fetchContacts();
// }, []);
