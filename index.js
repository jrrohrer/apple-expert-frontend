console.log("connected!")

populateCategoryDropdown();

function getCategories() {
  return fetch("http://localhost:3000/api/v1/categories")
    .then(response => response.json());
    // add catch for error handling
}

function populateCategoryDropdown() {
  getCategories()
  .then(categories => {
    const dropDown = document.getElementById('category'); // gets the select element
    categories.data.forEach(category => { // for each category in the data object
      let newOption = new Option(category.attributes.name, category.id) // create a new option with name key and id value
      dropDown.add(newOption, undefined) // add the new option to the bottom of the dropdown list
    })
  })
}

document.getElementById('category-form-submit').addEventListener('click', getApples) 

function getApples() {
  let categoryId = parseInt(document.getElementById('category').value); 
  fetch(`http://localhost:3000/api/v1/apples?category_id=${categoryId}`)
  .then(response => response.json())
  .then(apples => {
    apples.data.forEach(apple => {
      displayApple(apple)
    })
  })
  // add catch for error handling...if the array is empty, ask user to select a different option
}

function displayApple(apple) {
  const appleCard = `
    <div data-id=${apple.id}
      <h3>${apple.attributes.variety}</h3>
      <img src=${apple.attributes.image_url} height=200 width=250>
      <p>Harvested in ${apple.attributes.harvest}</p>
      <p>${apple.attributes.notes}</p>
    </div> 
    <br>`;

  document.querySelector('#apple-cards').innerHTML += appleCard;
}