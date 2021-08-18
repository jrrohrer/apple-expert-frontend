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
      </div> 
      <br>`;
  
    return appleCard;
  }

  displayApple() {
    const appleCard = this.getCard();
    Apple.container.innerHTML += appleCard;
  }
}  

Apple.all = []
  
// build out apple class
// remembering apples

// html we want on the DOM for each apple
// attach event listeners particular to each item

