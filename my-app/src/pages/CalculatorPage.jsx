import React, { useEffect, useState } from "react";
import { Box } from "@mui/material/";
import { getBanks } from "../bankService";
import { IBank } from "../types";
import { Button, TextField } from "@mui/material/";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";

const CalculatorPage = () => {
  const [bank, setBanks] = useState([]);
  const [selectedOption, setSelectedOption] = useState([]);
  const [initialLoan, setInitialLoan] = useState("");
  const [downPayment, setDownPayment] = useState("");

  useEffect(() => {
    async function getData() {
      setBanks(await getBanks());
    }
    getData();
  }, []);

  console.log(selectedOption)

const calculate = (e) => {
  const p = selectedOption;
  const monthlyRate = (p.interestRate) / 12;
  console.log(monthlyRate, 'monthlyRate')
  const numberMouthPayment = p.loanTerm * 12;
  const mounthlyPayment = initialLoan  * monthlyRate * Math.pow((1 + monthlyRate), numberMouthPayment)
  const result = mounthlyPayment /  Math.pow((1 + monthlyRate), numberMouthPayment);
  return console.log(result)
}

  return (
    <>
      <Box>
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
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Select Bank</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
            >
              {bank.map((item) => (
                <MenuItem key={item.id} value={item}>
                  {item.title}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button variant="contained" type="submit" onClick={calculate}>
            Click
          </Button>
      </Box>
    </>
  );
};

export default CalculatorPage;
