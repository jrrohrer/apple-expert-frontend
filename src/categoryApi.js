class CategoryApi {

  constructor(port) {
    this.baseUrl = `${port}/categories`
  }

  getCategories() {
    return fetch(this.baseUrl)
      .then(response => response.json());
  }
}