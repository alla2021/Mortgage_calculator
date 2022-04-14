import React, {  useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getBanks } from "../bankService";

const BankCard = () => {
  const { id } = useParams();
  const [info, getInfo] = useState([]);
  
  useEffect(() => {
    async function fetchData(){
      let bankDb = await getBanks()
      getInfo(bankDb)
    }
    fetchData()
  }, [id]);

  const bank = info.find((item) => parseInt(id) === item.id);
  console.log(bank)
  return (
    <>
    {bank && <h2>`bank card info{bank.id}`</h2>}
    </>
  );
};

export default BankCard;