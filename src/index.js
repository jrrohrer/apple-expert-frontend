const port = "http://localhost:3000/api/v1"
const appleApi = new AppleApi(port)
const categoryApi = new CategoryApi(port)
const appleCardsContainer = document.querySelector('#apple-cards')

populateCategoryDropdown();

function populateCategoryDropdown() {
  categoryApi.getCategories()
  .then(categories => {
    const dropDown = document.getElementById('category'); // gets the first select element
    const categorySelection = document.getElementById('add-category'); // gets the select element in the new apple form
    categories.data.forEach(category => { // for each category in the data object
      let newOption = new Option(category.attributes.name, category.id) // create a new option with name key and id value
      dropDown.add(newOption, undefined) // add the new option to the bottom of the dropdown list
      let newCategoryOption = new Option(category.attributes.name, category.id)
      categorySelection.add(newCategoryOption, undefined)
    })
  })
  .catch(err => alert(err));
}

document.getElementById('category-form-submit').addEventListener('click', appleApi.getApples) 

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
  appleApi.postApple(varietyInput, harvestInput, notesInput, imageInput, categoryIds)
}

// Then: adding an edit feature, adding a delete feature, error handling, and refactoring
// Finally: styling!