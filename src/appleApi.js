class AppleApi {

  constructor(port) {
    this.baseUrl = port
  }

  getApples() {
    let categoryId = parseInt(document.getElementById('category').value); // getting the category ID and turning it into an integer
    fetch(`${port}/apples?category_id=${categoryId}`) // passing the category id to the apple controller as a query param so that only the apples that match taht category can be returned
    .then(response => response.json())
    .then(apples => {
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
    .then(apple => {console.log(apple)}) // do something with the new apple here. Add to DOM? Show the card and inform the user their apple has been saved to the DB?
    .catch(err => alert(err));
  }
}