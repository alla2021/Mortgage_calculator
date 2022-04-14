import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button, TextField } from "@mui/material/";
import { getBanks, editBankData,updateBankData } from "../bankService";
import { useNavigate } from "react-router-dom";
import { IBank } from "../types";

function EditForm() {
  const { id } = useParams();
  console.log(id);
  const [formData, setFormData] = useState({
    title:'',
    interestRate: "",
    maximumLoan: "",
    minimumDownPayment: "",
    loanTerm: "",
  });
  console.log('first,', formData)
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchList() {
      console.log(parseInt(id),'dddddd')
      const banks = await getBanks();
      const editBank = banks.find((item: any) => {
        console.log(id)
        return parseInt(id) === parseInt(item.id);
      });
      console.log(editBank)
      setFormData(editBank);
    }
    fetchList();
  }, [id]);

 console.log('ss', formData)
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
      <div>
        aaaa{id}
        <form className="form" onSubmit={handleUpdateBankItem}>
          <TextField
            id="filled-basic"
            label="title"
            required
            variant="outlined"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
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