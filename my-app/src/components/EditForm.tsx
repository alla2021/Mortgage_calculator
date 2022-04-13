import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button, TextField } from "@mui/material/";
import { getBanks } from "../bankService";
import { useNavigate } from "react-router-dom";
import { IBank } from "../types";

function EditForm() {
  const { id } = useParams();
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
      const editBank = banks.find(
        (item:any) => {
          return parseInt(id) === item.id;
        }
      );
      setFormData(editBank)
    }
    fetchList()
  }, [id]);

  // const handleUpdateMovieItem = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   async function fetchList() {
  //   const movies = await getMoviesData();
  //   let movieToEditIndex = movies.findIndex(
  //     (item) => parseInt(id) === item.id
  //   );
  //   movies[movieToEditIndex] = {
  //     ...movies[movieToEditIndex],
  //     ...formData,
  //     duration: Number(formData.duration),
  //     price: Number(formData.price),
  //   };
  //   console.log(movies,'eeeeeee')
  //   setFormData(movies)
  // }
  // fetchList()
  // console.log('first, movies', formData)
  // editMovieData(formData)
  //   // localStorage.setItem("movies", JSON.stringify([...movies]));
  //   navigate("/movies");
  // };

  return (
  <h1>FFFF</h1>
    // <div>
    //   <form className="form" onSubmit={handleUpdateMovieItem}>
    //     <TextField
    //       id="filled-basic"
    //       required
    //       variant="outlined"
    //       value={formData.title}
    //       onChange={(e) => setFormData({ ...formData, title: e.target.value })}
    //     />
    //     <TextField
    //       id="filled-basic"
    //       label="Director"
    //       variant="outlined"
    //       value={formData.director}
    //       required
    //       onChange={(e) =>
    //         setFormData({ ...formData, director: e.target.value })
    //       }
    //     />
    //     <TextField
    //       id="filled-basic"
    //       label="Duration"
    //       variant="outlined"
    //       required
    //       type="number"
    //       value={formData.duration}
    //       onChange={(e) =>
    //         setFormData({ ...formData, duration: e.target.value })
    //       }
    //     />
    //     <TextField
    //       id="filled-basic"
    //       label="Price"
    //       variant="outlined"
    //       required
    //       type="number"
    //       value={formData.price}
    //       onChange={(e) => setFormData({ ...formData, price: e.target.value })}
    //     />
    //     <TextField
    //       id="filled-basic"
    //       label="Image"
    //       required
    //       variant="outlined"
    //       value={formData.img}
    //       onChange={(e) => setFormData({ ...formData, img: e.target.value })}
    //     />
    //     <TextField
    //       id="filled-basic"
    //       required
    //       variant="outlined"
    //       value={formData.description}
    //       onChange={(e) =>
    //         setFormData({ ...formData, description: e.target.value })
    //       }
    //     />
    //     <Button variant="contained" type="submit">
    //       Edit movie
    //     </Button>
    //   </form>
    // </div>
  );
}

export default EditForm;