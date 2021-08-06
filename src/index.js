console.log("connected!")

populateCategoryDropdown();

document.getElementById('category-form-submit').addEventListener('click', getApples) 

document.querySelector('#apple-cards').innerHTML += appleCard;

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




