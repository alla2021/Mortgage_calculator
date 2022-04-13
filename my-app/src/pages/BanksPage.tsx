import React, { useEffect, useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from "@mui/material/Button";
import { getBanks } from "../bankService";
import { IBank } from "../types";

const BanksPage = () => {
  const [bank, setBanks] = useState<IBank[]>([]);

  useEffect(() => {
    async function getData() {
      setBanks(await getBanks());
    }
    getData();
  }, []);
  console.log('aaaa',bank)

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Bank name</TableCell>
            <TableCell align="right">Interest rate</TableCell>
            <TableCell align="right">Maximum loan</TableCell>
            <TableCell align="right">Minimum down payment</TableCell>
            <TableCell align="right">Loan term</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {bank.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.interestRate}</TableCell>
              <TableCell align="right">{row.maximumLoan}</TableCell>
              <TableCell align="right">{row.minimumDownPayment}</TableCell>
              <TableCell align="right">{row.loanTerm}</TableCell>
              <TableCell align="right">
              <Button href="`/info/${row.id}`">INFO</Button>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default BanksPage;
