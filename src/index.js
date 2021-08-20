const port = "http://localhost:3000/api/v1"
const appleApi = new AppleApi(port)
const categoryApi = new CategoryApi(port)
const categorySelectSubmit = document.getElementById('category-form-submit')
const appleCardsContainer = document.getElementById('apple-cards')
const createAppleForm = document.getElementById('create-apple-form')
const makeNewAppleBtn = document.getElementById('make-new-apple')
const messageDiv = document.getElementById('messages')
const deleteAppleButton = document.getElementById('delete-apple')

categoryApi.populateCategoryDropdown();

categorySelectSubmit.addEventListener('click', appleApi.getApples) 

makeNewAppleBtn.addEventListener('click', () => {
  let div = document.getElementById('new-apple-form-container');
  div.style.display = div.style.display == "none" ? "block" : "none";
})

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
