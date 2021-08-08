class Apple {
  constructor(appleId, appleAttributes) {
    // setting properties of each apple
    this.id = appleId
    this.variety = appleAttributes.variety
    this.harvest = appleAttributes.harvest
    this.notes = appleAttributes.notes
    this.image_url = appleAttributes.image_url
    this.categories = appleAttributes.categories
    Apple.all.push(this)
  }
}  

Apple.all = []
  
// build out apple class
// remembering apples

// html we want on the DOM for each apple
// attach event listeners particular to each item

