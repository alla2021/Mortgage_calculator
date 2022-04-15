import React, { useEffect, useState } from "react";
import { Box } from "@mui/material/";
import { getBanks } from "../bankService";
import { Typography } from "@mui/material";
import { IBank } from "../types";
import { Button, TextField } from "@mui/material/";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";

const CalculatorPage = () => {
  const [bank, setBanks] = useState([]);
  const [selectedOption, setSelectedOption] = useState<IBank>();
  const [initialLoan, setInitialLoan] = useState(0);
  const [downPayment, setDownPayment] = useState(0);
  const [result1, setResult] = useState("");

  useEffect(() => {
    async function getData() {
      setBanks(await getBanks());
    }
    getData();
  }, []);

  const calculate = (e) => {
    const monthlyRate = selectedOption.interestRate / 12;
    const numberMouthPayment = selectedOption.loanTerm * 12;
    const pow = Math.pow(1 + monthlyRate, numberMouthPayment);
    const result = ((initialLoan * monthlyRate * pow) / pow - 1).toFixed(2);
    let result1 = result;
    if (initialLoan > selectedOption.maximumLoan) {
      result1 = "The bank doesn't lent that much money. Reduce your loan amount.";
    } else if (downPayment < selectedOption.minimumDownPayment) {
      result1 = "Down payment DO NOT satisfies the minimum down payment boundary of the bank.";
    } else {
      result1 = result;
    }
    return setResult(result1);
  };

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
          onChange={(e:React.ChangeEvent<HTMLInputElement>) => setInitialLoan(e.target.valueAsNumber)}
        />
        <TextField
          id="filled-basic"
          label="Down payment"
          variant="outlined"
          type="number"
          required
          value={downPayment}
          onChange={(e:React.ChangeEvent<HTMLInputElement>) => setDownPayment(e.target.valueAsNumber)}
        />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Select Bank</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selectedOption}
            onChange={(e:React.ChangeEvent<HTMLInputElement>) => setSelectedOption((e.target as any).value)}
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
        <Typography variant="h3" gutterBottom component="div">
          {result1}
        </Typography>
      </Box>
    </>
  );
};

export default CalculatorPage;
