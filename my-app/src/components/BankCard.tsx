import React, {  useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button } from "@mui/material/";
// import EditIcon from "@mui/icons-material/Edit";
import { getBanks } from "../bankService";

const BankCard = () => {
  const { id } = useParams();
  // const [info, getInfo] = useState([]);
  
  // useEffect(() => {
  //   async function fetchData(){
  //     let movieDb = await getBanks()
  //     getInfo(movieDb)
  //   }
  //   fetchData()
  // }, [id]);

  // const bank = info.find((item) => parseInt(id) === item.id);

  return (
    <>
    <h2>`bank card info{id}`</h2>
    </>
  );
};

export default BankCard;