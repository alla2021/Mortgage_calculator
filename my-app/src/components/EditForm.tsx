import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Container, Button, TextField } from "@mui/material/";
import { getBanks, editBankData } from "../bankService";
import { useNavigate } from "react-router-dom";
import { IBank } from "../types";

function EditForm() {
  const { id } = useParams();
  console.log(id);
  const [formData, setFormData] = useState<IBank>({
    title: "",
    interestRate: 0,
    maximumLoan: 0,
    minimumDownPayment: 0,
    loanTerm: 0,
  });
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchList() {
      const banks = await getBanks();
      const editBank = banks.find((item) => {
        return parseInt(id) === parseInt(item.id);
      });
      setFormData(editBank);
    }
    fetchList();
  }, [id]);

  const handleUpdateBankItem = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    async function fetchList() {
      const banks = await getBanks();
      let bankToEditIndex = banks.findIndex((item) => parseInt(id) === item.id);
      banks[bankToEditIndex] = {
        ...banks[bankToEditIndex],
        ...formData,
      };
      setFormData(banks);
    }
    fetchList();
    editBankData(formData);
    navigate("/");
  };
  return (
    <>
      <Container maxWidth="md">
        <Box
          component="form"
          noValidate
          sx={{ mt: 1 }}
          onSubmit={handleUpdateBankItem}
        >
          <TextField
            id="filled-basic"
            label="title"
            required
            fullWidth
            margin="normal"
            variant="outlined"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />
          <TextField
            id="filled-basic"
            label="Interest rate"
            variant="outlined"
            margin="normal"
            value={formData.interestRate}
            type="number"
            fullWidth
            required
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFormData({ ...formData, interestRate: e.target.valueAsNumber })
            }
          />
          <TextField
            id="filled-basic"
            label=" Maximum loan"
            variant="outlined"
            required
            fullWidth
            margin="normal"
            type="number"
            value={formData.maximumLoan}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFormData({ ...formData, maximumLoan: e.target.valueAsNumber })
            }
          />
          <TextField
            id="filled-basic"
            label="Minimum Down Payment"
            variant="outlined"
            required
            fullWidth
            margin="normal"
            type="number"
            value={formData.minimumDownPayment}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFormData({
                ...formData,
                minimumDownPayment: e.target.valueAsNumber,
              })
            }
          />
          <TextField
            id="filled-basic"
            label="Loan term"
            required
            fullWidth
            margin="normal"
            variant="outlined"
            type="number"
            value={formData.loanTerm}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFormData({ ...formData, loanTerm: e.target.valueAsNumber })
            }
          />
          <Button
            variant="contained"
            type="submit"
            fullWidth
            sx={{ mt: 3, mb: 2 }}
          >
            Edit movie
          </Button>
        </Box>
      </Container>
    </>
  );
}

export default EditForm;
