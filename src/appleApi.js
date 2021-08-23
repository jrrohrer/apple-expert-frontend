class AppleApi {

  constructor(port) {
    this.baseUrl = port
  }

  getApples() {
    let categoryId = parseInt(document.getElementById('category').value); // getting the category ID and turning it into an integer
    fetch(`${port}/apples?category_id=${categoryId}`)
    .then(response => response.json())
    .then(apples => {
      appleCardsContainer.innerHTML = ""; // clears any old search results before displaying new ones
      messageDiv.innerHTML = ""; // clears any messages before new search
      Apple.all = []; // clears the Apple.all array before handling the new search results
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
      appleCardsContainer.innerHTML = ""; // clears previous results
      messageDiv.innerHTML = "<h3>Your apple has been saved to the database and will be included in future searches. Thanks for contributing to Apple Expert!</h3>"
      let a = new Apple(apple.data.id, apple.data.attributes)
      a.displayApple()
    }) 
    .catch(err => alert(err));
  }

  deleteApple = (id) => {
    fetch(`${port}/apples/${id}`, {
        method: "DELETE",
        headers: {"Content-Type": "application/json"},
    })
      .then(response => response.json())
      .then(json => alert(json.message))
      .catch(err => alert(err));
  }
}