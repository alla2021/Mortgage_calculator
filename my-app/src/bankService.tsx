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

export async function addBankBd(newBank) {
  await fetch(URL, {
    method: "POST",
    body: JSON.stringify(newBank),
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export async function updateBankData(updatedBank) {
  await fetch(URL, {
    method: "POST",
    body: JSON.stringify(updatedBank),
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export async function editBankData(updatedBank) {
  await fetch(`${URL}/${updatedBank.id}`, {
    method: "PUT",
    body: JSON.stringify(updatedBank),
    headers: {
      "Content-Type": "application/json",
    },
  });
}
