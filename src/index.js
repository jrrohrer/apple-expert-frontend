const port = "http://localhost:3000/api/v1"
const appleApi = new AppleApi(port)
const categoryApi = new CategoryApi(port)
const categorySelectSubmit = document.getElementById('category-form-submit')
const appleCardsContainer = document.getElementById('apple-cards')
const createAppleForm = document.getElementById('create-apple-form')
const makeNewAppleBtn = document.getElementById('make-new-apple')
const messageDiv = document.getElementById('messages')
const deleteAppleButton = document.getElementById('delete-apple')

// Populate the dropdown menus with category objects so users can select/assign them dynamically:
categoryApi.populateCategoryDropdown();

// When user clicks "Show me the apples!", get the apples in that category, and display them in cards on the DOM:
categorySelectSubmit.addEventListener('click', appleApi.getApples) 

// event listener on this button shows/hides the create apple form
makeNewAppleBtn.addEventListener('click', () => {
  let div = document.getElementById('new-apple-form-container');
  div.style.display = div.style.display == "none" ? "block" : "none";
})

// When the user clicks "Save New Apple", save the user's inputs to variables and use them to populate a post fetch to save the new apple object to the database.
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
  e.target.reset()
}

// add delete functions
// remove message from dom when another button is clicked
