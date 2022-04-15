import React, { useEffect, useState } from "react";
import { Container, Box, Typography, Button, TextField } from "@mui/material/";
import { getBanks } from "../bankService";
import { IBank } from "../types";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";

const CalculatorPage = () => {
  const [bank, setBanks] = useState([]);
  const [selectedOption, setSelectedOption] = useState<IBank>();
  const [initialLoan, setInitialLoan] = useState(0);
  const [downPayment, setDownPayment] = useState(0);
  const [viewResult, setResult] = useState("");

  useEffect(() => {
    async function getData() {
      setBanks(await getBanks());
    }
    getData();
  }, []);

  const calculate = (e) => {
    e.preventDefault(e);
    const monthlyRate = selectedOption.interestRate / 12;
    const numberMouthPayment = selectedOption.loanTerm * 12;
    const pow = Math.pow(1 + monthlyRate, numberMouthPayment);
    const result = ((initialLoan * monthlyRate * pow) / pow - 1).toFixed(2);
    let viewResult = result;
    if (initialLoan > selectedOption.maximumLoan) {
      viewResult =
        "The bank doesn't lent that much money. Reduce your loan amount.";
    } else if (downPayment < selectedOption.minimumDownPayment) {
      viewResult =
        "Down payment DO NOT satisfies the minimum down payment boundary of the bank.";
    } else {
      viewResult = result;
    }
    return setResult(viewResult);
  };

  return (
    <>
      <Container maxWidth="md">
        <Box component="form" sx={{ mt: 3 }} onSubmit={calculate}>
          <TextField
            id="filled-basic"
            label="Initial loan"
            margin="normal"
            variant="outlined"
            type="number"
            required
            fullWidth
            value={initialLoan}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setInitialLoan(e.target.valueAsNumber)
            }
          />
          <TextField
            id="filled-basic"
            label="Down payment"
            variant="outlined"
            type="number"
            margin="normal"
            required
            fullWidth
            value={downPayment}
            inputProps={{ min: "0", step: "100" }}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setDownPayment(e.target.valueAsNumber)
            }
          />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Select Bank</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectedOption ?? ""}
              inputProps={{ min: "0", step: "100" }}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSelectedOption((e.target as any).value)
              }
            >
              {bank.map((item) => (
                <MenuItem key={item.id} value={item}>
                  {item.title}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button
            variant="contained"
            type="submit"
            fullWidth
            sx={{ mt: 3, mb: 2 }}
          >
            Click
          </Button>
          <Typography variant="h4" gutterBottom component="div">
            {viewResult}
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default CalculatorPage;
