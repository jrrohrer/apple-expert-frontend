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
    const dropDown = document.getElementById('category'); // gets the first select element
    const categorySelection = document.getElementById('add-category');
    categories.data.forEach(category => { // for each category in the data object
      let newOption = new Option(category.attributes.name, category.id) // create a new option with name key and id value
      dropDown.add(newOption, undefined) // add the new option to the bottom of the dropdown list
      let newCategoryOption = new Option(category.attributes.name, category.id)
      categorySelection.add(newCategoryOption, undefined)
    })
  })
  .catch(err => alert(err));
}

document.getElementById('category-form-submit').addEventListener('click', getApples) 

function getApples() {
  let categoryId = parseInt(document.getElementById('category').value); // getting the category ID and turning it into an integer
  fetch(`http://localhost:3000/api/v1/apples?category_id=${categoryId}`) // passing the category id to the apple controller as a query param so that only the apples that match taht category can be returned
  .then(response => response.json())
  .then(apples => {
    apples.data.forEach(apple => {
      displayApple(apple)
    })
  })
  .catch(err => alert(err));
  // add catch for error handling...if the array is empty, ask user to select a different option
}

function displayApple(apple) {
  const appleCard = `
    <div data-id=${apple.id}>
      <img src=${apple.attributes.image_url} height="200" width="200"/>
      <h3>${apple.attributes.variety}</h3>
      <h4>Harvested in ${apple.attributes.harvest}</h4>
      <p>${apple.attributes.notes}</p>
    </div> 
    <br>`;

  document.querySelector('#apple-cards').innerHTML += appleCard;
}

const createAppleForm = document.querySelector('#create-apple-form')
createAppleForm.addEventListener('submit', (e) => createFormHandler(e));

function createFormHandler(e) {
  e.preventDefault();
  const varietyInput = document.querySelector("#input-variety").value;
  const harvestInput = document.querySelector("#input-harvest").value;
  const notesInput = document.querySelector("#input-notes").value;
  const imageInput = document.querySelector("#input-image-url").value;
  const categorySelections = document.getElementById('add-category').selectedOptions;
  const categoryIds = Array.from(categorySelections).map(x => x.value);
  postApple(varietyInput, harvestInput, notesInput, imageInput, categoryIds)
}


function postApple(variety, harvest, notes, image_url, category_ids) {
  let bodyData = {variety, harvest, notes, image_url, category_ids}
  fetch("http://localhost:3000/api/v1/apples", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(bodyData)
  })
  .then(response => response.json())
  .then(apple => {console.log(apple)})
}

// Next step: adding a form for creating a new apple & setting up the POST fetch
// Then: adding an edit feature, adding a delete feature, error handling, and refactoring
// Finally: styling!