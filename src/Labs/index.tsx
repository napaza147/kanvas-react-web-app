import Lab1 from "./Lab1";
import { Routes, Route, Navigate } from "react-router";
import TOC from "./TOC";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";


export default function Labs() {
  return (
    <div>
      <h2>Name: Nestor Ivan Apaza Mamani</h2>
      <h3>Labs & Links</h3>
      <TOC />
      <Routes>
        <Route path="/" element={<Navigate to="Lab1" />} />
        <Route path="/Lab1" element={<Lab1 />} />
        <Route path="/Lab2" element={<Lab2 />} />
        <Route path="/Lab3" element={<Lab3 />} />
      </Routes>
    </div>
  );
}
