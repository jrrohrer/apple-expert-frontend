class AppleApi {

  constructor(port) {
    this.baseUrl = port
  }

  getApples() {
    let categoryId = parseInt(document.getElementById('category').value); // getting the category ID and turning it into an integer
    fetch(`${port}/apples?category_id=${categoryId}`) // passing the category id to the apple controller as a query param so that only the apples that match taht category can be returned
    .then(response => response.json())
    .then(apples => {
      appleCardsContainer.innerHTML = ""; // clears any old search results before displaying new ones
      apples.data.forEach(apple => {
        let a = new Apple(apple.id, apple.attributes)
        a.displayApple()
      })
    })
    .catch(err => alert(err));
  }

  postApple(variety, harvest, notes, image_url, category_ids) {
    let bodyData = {variety, harvest, notes, image_url, category_ids}
    fetch(`${port}/apples`, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({apple: bodyData})
    })
    .then(response => response.json())
    .then(apple => {
      // Some UI work here: To let the user know their apple is successfully created, clear the apple-cards div of search results, add a success message, and display the new apple card
      appleCardsContainer.innerHTML = "";
      messageDiv.innerHTML = "<h3>Your apple has been saved to the database! Thanks for contributing to Apple Expert!</h3>"
      let a = new Apple(apple.data.id, apple.data.attributes)
      a.displayApple()
    }) 
    .catch(err => alert(err));
  }
}