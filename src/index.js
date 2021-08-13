document.addEventListener('DOMContentLoaded', () => { 

const table = document.querySelector('#table-body')
const dogForm = document.querySelector('#dog-form')

 dogForm.addEventListener('submit', e => {
     e.preventDefault()
   const updatedDog = {
      name: e.target.name.value,
      breed: e.target.breed.value,
      sex: e.target.sex.value
    }
    const dogId = e.target.dataset.id
 updateDog(dogId, updatedDog)
  .then(newlyUpdatedDog => {
      //find row
      const dogRow = document.querySelector(`tr[data-id='${dogId}']`)
       dogRow.innerHTML = `
       <td>${newlyUpdatedDog.name}</td> 
       <td>${newlyUpdatedDog.breed}</td> 
       <td>${newlyUpdatedDog.sex}</td> 
       <td><button>Edit</button></td>
       `
       //update innnerhtml
     
  }) 
   //update dog in table

})

 
function populateDogForm(dog){
    dogForm.name.value = dog.name
    dogForm.breed.value = dog.breed
    dogForm.sex.value = dog.sex
    dogForm.dataset.id = dog.id
    //give form info on which dog editing
}

function renderOneDog(dog){
 const dogRow = document.createElement('tr')
 dogRow.dataset.id = dog.id
    dogRow.innerHTML = `
      <td>${dog.name}</td> 
      <td>${dog.breed}</td> 
      <td>${dog.sex}</td> 
      <td><button>Edit</button></td>
      `
      const editButton = dogRow.querySelector('button')
      editButton.addEventListener('click', ()=> {
        populateDogForm(dog)

      })
      table.append(dogRow)
}

  function renderDogs(dogs){
    dogs.forEach(renderOneDog)
  }

 getDogs().then(renderDogs)
}) 

