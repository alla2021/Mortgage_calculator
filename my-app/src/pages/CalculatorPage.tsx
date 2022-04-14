import React, { useEffect, useState } from "react";
import { Box } from "@mui/material/";
import { getBanks } from "../bankService";
import { IBank } from "../types";
import { Button, TextField } from "@mui/material/";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';

const CalculatorPage = () => {
  const [bank, setBanks] = useState<IBank[]>([]);
  const [initialLoan, setInitialLoan] = useState("");
  const [downPayment, setDownPayment] = useState("");

  useEffect(() => {
    async function getData() {
      setBanks(await getBanks());
    }
    console.log(bank, "ddddddddff");
    getData();
  }, []);

  // export const calculatePayment = () => {
  //   // const {interestRate, loanTerm} = bank;
  //   const monthRate = interestRate / 12;
  //   const power = Math.pow((1 + monthRate), loanTerm);
  //   return initialLoan * monthRate * power / (power - 1);
  // }

  console.log(bank);
  return (
    <>
      <Box>
        <form className="form">
          <TextField
            id="filled-basic"
            label="Initial loan"
            variant="outlined"
            type="number"
            required
            value={initialLoan}
            onChange={(e) => setInitialLoan(e.target.value)}
          />
          <TextField
            id="filled-basic"
            label="Down payment"
            variant="outlined"
            type="number"
            required
            value={downPayment}
            onChange={(e) => setDownPayment(e.target.value)}
          />
          {/* <select name="" id="">
            {bank.map((item) => (
              <option value="">{item.title}</option>
            ))}
          </select> */}
          <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select Bank</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={bank}
          label="Age"
          // onChange={handleChange}
        >
          {bank.map((item) => (
              <MenuItem value={item.id}>{item.title}</MenuItem>
            ))}
        </Select>
      </FormControl>
          {/* <Button variant="contained" type="submit">
        Add new bank!
      </Button> */}
        </form>
      </Box>
    </>
  );
};

export default CalculatorPage;
