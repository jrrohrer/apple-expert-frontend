class Apple {

  static container = document.getElementById('apple-cards')

  constructor(appleId, appleAttributes) {
    // setting properties of each apple
    this.id = appleId
    this.variety = appleAttributes.variety
    this.harvest = appleAttributes.harvest
    this.notes = appleAttributes.notes
    this.image_url = appleAttributes.image_url
    this.categories = appleAttributes.categories

    // setting up event listeners
    this.element = document.createElement('div');
    this.element.addEventListener('click', this.handleDeleteClick)

    // remembering all instances of Apple
    Apple.all.push(this)
  }

  getCard() {
    const appleCard = `
      <div data-id=${this.id} class="apple-card">
        <img src="${this.image_url}" height="200" width="200">
        <h3>${this.variety}</h3>
        <h4>Harvested in ${this.harvest}</h4>
        <p>${this.notes}</p>
        <button>Delete</button>
      </div>`;

    this.element.innerHTML = appleCard;
    return this.element;
  }

  displayApple() {
    const appleCard = this.getCard();
    //Apple.container.innerHTML += appleCard;
    Apple.container.appendChild(appleCard);
  }

  handleDeleteClick = (e) => {
    if(e.target.innerText === "Delete"){
      this.deleteApple(e)
    }
  }

  deleteApple = (e) => {
    this.element.remove()
    appleApi.deleteApple(this.id)
  }
}  

Apple.all = []

// Delete Buttons:
// add event listener
// remove() the div from the DOM
// submit a fetch request to delete the apple from the DB
