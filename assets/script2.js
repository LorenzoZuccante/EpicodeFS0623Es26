class Pet {
    constructor(petName, ownerName, species, breed) {
      this.petName = petName
      this.ownerName = ownerName
      this.species = species
      this.breed = breed
    }
  
    sameOwner(anotherPet) {
      return this.ownerName === anotherPet.ownerName
    }
  }
  
  const petList = []
  
  function matchOwner(newPet) {
    for (let i = 0; i < petList.length; i++) {
      const existingPet = petList[i]
      const sameOwnerResult = newPet.sameOwner(existingPet)
      console.log(`the new animal has the same owner of ${existingPet.petName}: ${sameOwnerResult}`)
    }
  }
  
  document.getElementById('petForm').addEventListener('submit', function(event) {
    event.preventDefault()
  
    const petName = document.getElementById('petName').value
    const ownerName = document.getElementById('ownerName').value
    const species = document.getElementById('species').value
    const breed = document.getElementById('breed').value
  
    const newPet = new Pet(petName, ownerName, species, breed)
  
    matchOwner(newPet)
  
    petList.push(newPet)
  
    displayPet(newPet)
  })
  
  function displayPet(pet) {
    const petListElement = document.getElementById('petList')
  
    const listItem = document.createElement('li')
    listItem.textContent = `your pet name: ${pet.petName}, your first name: ${pet.ownerName}, species: ${pet.species}, breed: ${pet.breed}`
  
    petListElement.appendChild(listItem)
  }
  