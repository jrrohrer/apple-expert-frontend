class CategoryApi {

  constructor(port) {
    this.baseUrl = `${port}/categories`
  }

  getCategories() {
    return fetch(this.baseUrl)
      .then(response => response.json());
  }

  populateCategoryDropdown() {
    this.getCategories()
    .then(categories => {
      const dropDown = document.getElementById('category'); // gets the first select element
      const categorySelection = document.getElementById('add-category'); // gets the select element in the new apple form
      categories.data.forEach(category => { // for each category in the data object
        let c = new Category(category.id, category.attributes)
        let newOption = new Option(c.name, c.id) // create a new option with name key and id value
        dropDown.add(newOption, undefined) // add the new option to the bottom of the dropdown list
        let newCategoryOption = new Option(c.name, c.id)
        categorySelection.add(newCategoryOption, undefined) // does the same thing, but for the create new apple form at the bottom of the page
      })
    })
    .catch(err => alert(err));
  }
}