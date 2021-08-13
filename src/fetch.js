
 const baseURL = "http://localhost:3000/dogs"
function getDogs(){
    return fetch(baseURL)
    .then(resp => resp.json())
   }



function updateDog(id, updatedDog){
    return fetch(baseURL + `/${id}`, {
      method: "PATCH",
       headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedDog)
  })
  .then(resp => resp.json())
}