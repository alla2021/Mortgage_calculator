import React from "react";
import Header from "../src/components/Header";
import BankCard from "../src/components/BankCard";
import EditForm from "../src/components/EditForm";
import BanksPage from "../src/pages/BanksPage";
import CalculatorPage from "../src/pages/CalculatorPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<BanksPage />} />
        <Route path="/calculator" element={<CalculatorPage />} />
        <Route path="/info/:id" element={<BankCard />} />
        <Route path="/edit-bank-info/:id" element={<EditForm />} /> 
      </Routes>
    </>
  );
}

export default App;
