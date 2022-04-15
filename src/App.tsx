import React from "react";
import Header from "../src/components/Header";
import EditForm from "../src/components/EditForm";
import BanksPage from "../src/pages/BanksPage";
import AddForm from "../src/components/AddForm";
import CalculatorPage from "../src/pages/CalculatorPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<BanksPage />} />
        <Route path="/calculator" element={<CalculatorPage />} />
        <Route path="/editbank/:id" element={<EditForm />} /> 
        <Route path="/add-bank" element={<AddForm/>} /> 
      </Routes>
    </>
  );
}

export default App;
