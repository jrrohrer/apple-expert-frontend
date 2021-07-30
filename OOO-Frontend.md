# JS/Rails OOO Guide (Frontend)

## User Stories

* A user will be able to select the category of apple they're looking for
* A user will then see a list of apples in that category
* A user will be able to select the apple varieties available to them 
* A user will see cards with info regarding each of the apple varieties they have chosen
* A user will be able to add apples to the database with a form
* A user will be able to edit apples
* A user will be able to delete apples

## Part 1: DOM Manipulation, Events, and Fetch Using Rails API

* JS MANTRA: When some event happens, I want to make what kind of fetch and then manipulate the DOM in what way?

### Initial Setup

[x] 1. Create a separate directory for the frontend
[x] 2. Create `index.html` file with a script tag for your `index.js`
[x] 3. Create `index.js`, `console.log('connected!')` and check for the logged message in the dev tools console to confirm the files are connected correctly.
[x] 4. Initialize a git repo and connect to github

### Connect your API to your Frontend

[x] 5. Think about the JS Mantra and answer this question: When the DOM content is loaded, I want to make a GET fetch and then manipulate the DOM in what way?
[x] 6. Run your `rails server` and visit the endpoint in the browser to ensure that the expected JSON is present. 
[x] 7. Set up Cross Origin Resource Sharing.
  * Navigate to your Gemfile and uncomment `gem 'rack-cors'`, then `bundle install`.
  * Inside of `config/initializers/cors.rb`, uncomment the CORS code and update `origins 'example.com'` to `origins '*'` 
[x] 8. Commit and push this code.

### Receive (GET) Data from the Server

[ ] 9. GET Request
  * Create a new branch for GET implementation
  * Create your `get _____` function (ex: `function getToys()`) that will make a call to your index endPoint in your API, make your GET request inside the function, and `console.log` the JSON data, then call your `get _____` function. 
  * Once you have confirmed your GET request is returning the JSON you were expecting, use that data to update the DOM. 
  * Once working, commit and push, then merge the branch to main.
  * `git pull` into the main branch to get the working code

### Submit (POST) Data to the Server

[ ] 10. POST Request
  * Create a new branch for POST implementation
  * Create a form (use JS!)
  * Create Submit event listener
  * Create Submit event handler to handle form data
  * Create `post____` function
  * Manipulate the DOM with "posted" JSON data
  * Once working, commit and push code. Merge branch with main.
  * `git pull` into the main branch to get the working code

### Refactor to make code DRY

[] 11. Make sure you're not repeating yourself in your code.
[] 12. Build out any additional features using the JS Mantra: Event, Fetch, and DOM Manipulation

## Part 4: OOJS Refactor

[] 1. IMPORTANT: Create a separate branch for your OOJS Refactor!
[] 2. Create a JS Class (ex: class Apple)
[] 3. Link to the new JS file in your `index.html`
[] 4. Create a constructor that pushes all instances of `this` into an empty array 
[] 5. Refactor render functionality by creating a render function in your JS Class
[] 6. For future use, create a static method in your JS class that finds an object based on it's id. 