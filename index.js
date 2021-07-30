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
    const dropDown = document.getElementById('category');
    categories.data.forEach(category => {
      let newOption = new Option(category.attributes.name, category.id)
      dropDown.add(newOption, undefined)
    })
  })
}