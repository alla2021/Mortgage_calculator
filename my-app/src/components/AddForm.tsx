import React, { useState } from "react";
import { Button, TextField } from "@mui/material/";
import { useNavigate } from "react-router-dom";
import { addBankBd } from "../bankService";


function AddForm() {
  const [title, setTitle] = useState("");
  const [interestRate, setInterestRate] = useState(0);
  const [maximumLoan, setMaximumLoan] = useState(0);
  const [minimumDownPayment, setMinimumDownPayment] = useState(0);
  const [loanTerm, setLoanTerm] = useState(0);
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
    await addBankBd(newBank);
    handleClickRedirect();
  }
  const exampleNumberType: number = 0;
  // function checkChange(e) {
  //   setInterestRate(e.target.value)
  // }

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
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInterestRate(e.target.valueAsNumber)}
      />
      <TextField
        id="filled-basic"
        label="maximumLoan"
        variant="outlined"
        required
        type="number"
        value={maximumLoan}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMaximumLoan(e.target.valueAsNumber)}
      />
      <TextField
        id="filled-basic"
        label="minimumDownPayment"
        variant="outlined"
        required
        type="number"
        value={minimumDownPayment}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMinimumDownPayment(e.target.valueAsNumber)}
      />
      <TextField
        id="filled-basic"
        label=" loanTerm"
        required
        variant="outlined"
        type="number"
        value={loanTerm}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLoanTerm(e.target.valueAsNumber)}
      />
      <Button variant="contained" type="submit">
        Add new bank!
      </Button>
    </form>
  );
}

export default AddForm;
