import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material/";
import { Paper, Button, Container } from "@mui/material/";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { getBanks, deleteBankFromBd } from "../bankService";
import { IBank } from "../types";

const BanksPage = () => {
  const [bank, setBanks] = useState<IBank[]>([]);
  const { id } = useParams();

  useEffect(() => {
    async function getData() {
      setBanks(await getBanks());
    }
    getData();
  }, []);

  async function removeBank(bankItem) {
    await deleteBankFromBd(bankItem);
    setBanks((prevBank) => {
      return prevBank.filter((item) => item.id !== bankItem);
    });
  }

  return (
    <>
      <Container maxWidth="lg">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Bank name</TableCell>
                <TableCell align="right">Interest rate</TableCell>
                <TableCell align="right">Maximum loan</TableCell>
                <TableCell align="right">Minimum down payment</TableCell>
                <TableCell align="right">Loan term</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {bank.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.title}
                  </TableCell>
                  <TableCell align="right">{row.interestRate}</TableCell>
                  <TableCell align="right">{row.maximumLoan}</TableCell>
                  <TableCell align="right">{row.minimumDownPayment}</TableCell>
                  <TableCell align="right">{row.loanTerm}</TableCell>
                  <TableCell align="right">
                    <Button href={`/editbank/${row.id}`}>
                      <EditIcon color="success" />
                    </Button>
                    <Button onClick={() => removeBank(row.id)}>
                      <DeleteIcon color="secondary" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
};

export default BanksPage;
