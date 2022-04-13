// import { banks } from "./db";
// import { IMovie } from "./types";
const URL = "http://localhost:8080/banks";

export async function getBanks(){
  const data = await fetch(URL);
  return await data.json();
}

export async function deleteBankFromBd(id:any) {
  await fetch(`${URL}/${id}`, {
    method: "DELETE",
  });
}

// export async function addBankBd(newBank) {
//   await fetch(URL, {
//     method: "POST",
//     body: JSON.stringify(newBank),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
// }

// export async function updateMovieData(updatedMovie) {
//   await fetch(URL, {
//     method: "POST",
//     body: JSON.stringify(updatedMovie),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
// }

// export async function editMovieData(updatedMovie) {
//   await fetch(`${URL}/${updatedMovie.id}`, {
//     method: "PUT",
//     body: JSON.stringify(updatedMovie),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
// }


// //ls
// export function getMovies() {
//   return JSON.parse(localStorage.getItem("movies"));
// }

// export function addMovies(newMovie) {
//   const movies = JSON.parse(localStorage.getItem("movies"));
//   localStorage.setItem("movies", JSON.stringify([...movies, newMovie]));
// }

// export function initMovies() {
//   const filmsFromLocalStorage = getMovies();
//   if (filmsFromLocalStorage == null) {
//     console.log("all films >>>>", filmsFromLocalStorage);
//     localStorage.setItem("movies", JSON.stringify(movies));
//   }
// }

// export function getUsers() {
//   return JSON.parse(localStorage.getItem("users"));
// }