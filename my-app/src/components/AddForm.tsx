import React, { useState } from "react";
import { Button, TextField } from "@mui/material/";
import { useNavigate } from "react-router-dom";
import { addBankBd } from "../bankService";

function AddForm() {
  const [title, setTitle] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [maximumLoan, setMaximumLoan] = useState("");
  const [minimumDownPayment, setMinimumDownPayment] = useState("");
  const [loanTerm, setLoanTerm] = useState("");
  const navigate = useNavigate();

  function handleClickRedirect() {
    navigate("/");
  }

  async function handleAddBankSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    let newBank = {
      id: Math.random() * 1000,
      title,
      interestRate,
      maximumLoan,
      minimumDownPayment,
      loanTerm,
    };
    console.log("add newMovie", newBank);
    await addBankBd(newBank);
    handleClickRedirect();
  }

  return (
    <form className="form" onSubmit={handleAddBankSubmit}>
      <TextField
        id="filled-basic"
        label="Title"
        variant="outlined"
        required
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextField
        id="filled-basic"
        label="interestRate"
        variant="outlined"
        type="number"
        required
        value={interestRate}
        onChange={(e) => setInterestRate(e.target.value)}
      />
      <TextField
        id="filled-basic"
        label="maximumLoan"
        variant="outlined"
        required
        type="number"
        value={maximumLoan}
        onChange={(e) => setMaximumLoan(e.target.value)}
      />
      <TextField
        id="filled-basic"
        label="minimumDownPayment"
        variant="outlined"
        required
        type="number"
        value={minimumDownPayment}
        onChange={(e) => setMinimumDownPayment(e.target.value)}
      />
      <TextField
        id="filled-basic"
        label=" loanTerm"
        required
        variant="outlined"
        type="number"
        value={loanTerm}
        onChange={(e) => setLoanTerm(e.target.value)}
      />
      <Button variant="contained" type="submit">
        Add new bank!
      </Button>
    </form>
  );
}

export default AddForm;
