import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button, TextField } from "@mui/material/";
import { getBanks, editBankData } from "../bankService";
import { useNavigate } from "react-router-dom";
import { IBank } from "../types";

function EditForm() {
  const { id } = useParams();
  console.log(id);
  const [formData, setFormData] = useState({
    name: "",
    interestRate: "",
    maximumLoan: "",
    minimumDownPayment: "",
    loanTerm: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchList() {
      const banks = await getBanks();
      const editBank = banks.find((item: any) => {
        return parseInt(id) === item.id;
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
        ...formData
      };
      setFormData(banks);
    }
    fetchList();
    editBankData(formData);
    navigate("/");
  };

  return (
    <>
      <div>
        <form className="form" onSubmit={handleUpdateBankItem}>
          <TextField
            id="filled-basic"
            label="Name"
            required
            variant="outlined"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <TextField
          id="filled-basic"
          label="Interest rate"
          variant="outlined"
          value={formData.interestRate}
          type="number"
          required
          onChange={(e) =>
            setFormData({ ...formData, interestRate: e.target.value })
          }
        />
        <TextField
          id="filled-basic"
          label=" Maximum loan"
          variant="outlined"
          required
          type="number"
          value={formData.maximumLoan}
          onChange={(e) =>
            setFormData({ ...formData, maximumLoan: e.target.value })
          }
        />
        <TextField
          id="filled-basic"
          label="Minimum Down Payment"
          variant="outlined"
          required
          type="number"
          value={formData.minimumDownPayment}
          onChange={(e) => setFormData({ ...formData, minimumDownPayment: e.target.value })}
        />
        <TextField
          id="filled-basic"
          label="Loan term"
          required
          variant="outlined"
          type="number"
          value={formData.loanTerm}
          onChange={(e) =>
            setFormData({ ...formData, loanTerm: e.target.value })
          }
        />
          <Button variant="contained" type="submit">
            Edit movie
          </Button>
        </form>
      </div>
    </>
  );
}

export default EditForm;
