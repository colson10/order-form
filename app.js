

// crate a loop that iterates the entire legnth or Products.allProducts[i].
// with each iteration create a option element. give it the value of i in the array.
//append to the selectEL.

// if (sectionEl) {

// }


Product.allProduct = [];
var selectedObjects = [];
var itemAmountValues = [];

var selectEl = document.getElementById('drop-down');
var divEl = document.getElementById('message');
var formEl = document.getElementById('products-form');
var pEL = document.getElementById('alert-message');
var sectionEl = document.getElementById('cart-items');


function Product(filepath, name) {
  this.filepath = filepath;
  this.name = name;
  this.timeDisplayed = 0;
  this.vote = 0;
  Product.allProduct.push(this);
}
// instances for each picture
new Product('img/bag.jpg','bag');
new Product('img/banana.jpg','banana');
new Product('img/bathroom.jpg','bathroom');
new Product('img/boots.jpg', 'boots');
new Product('img/breakfast.jpg', 'breakfast');
new Product('img/bubblegum.jpg', 'bubblegum');
new Product('img/chair.jpg','chair');
new Product('img/cthulhu.jpg','cthulhu');
new Product('img/dog-duck.jpg','dog-duck');
new Product('img/dragon.jpg', 'dragon');
new Product('img/pen.jpg', 'pen');
new Product('img/pet-sweep.jpg', 'pet-sweep');
new Product('img/scissors.jpg','scissors');
new Product('img/shark.jpg','shark');
new Product('img/sweep.png','sweep');
new Product('img/tauntaun.jpg', 'tauntaun');
new Product('img/unicorn.jpg', 'unicorn');
new Product('img/usb.png', 'usb');
new Product('img/water-can.jpg', 'water-can');
new Product('img/wine-glass.jpg', 'wine-glass');


function buttonHandler(event) {
  event.preventDefault();
  console.log(event.target.itemSelected.value);
  console.log(event.target.amount.valueAsNumber);

  var itemName = event.target.itemSelected.value;
  var itemAmount = event.target.amount.valueAsNumber;

  // run a loop through Product.allProduct to see if itemName matches Product.allProduct[i].name

  for (var i in Product.allProduct) {
    if (Product.allProduct[i].name === itemName) {
      selectedObjects.push(Product.allProduct[i]);
      console.log(Product.allProduct[i]);
      break;
    }
  }

  // itemSelectedNames.push(itemName);
  itemAmountValues.push(itemAmount);

  localStorage.setItem('storedObjects', JSON.stringify(selectedObjects));
  localStorage.setItem('storedAmounts', JSON.stringify(itemAmountValues));


  pEL.textContent = 'Item(s) added to Cart!';
  // console.log(pEL.textContent);
  divEl.appendChild(pEL);
  
}



function populateDropDown() {
  formEl.addEventListener('submit', buttonHandler);
  var optionEL = document.createElement('option');
  for (var i in Product.allProduct) {
    optionEL = document.createElement('option');
    optionEL.textContent = Product.allProduct[i].name;
    selectEl.appendChild(optionEL);
  }
}

function displayCartItems() {
  selectedObjects = JSON.parse(localStorage.storedObjects);
  itemAmountValues = JSON.parse(localStorage.storedAmounts);
  var h4El = document.createElement('h4');
  var h5El = document.createElement('h5');
  var imgEl = document.createElement('img');
  for (var i in selectedObjects) {
    h4El = document.createElement('h4');
    h5El = document.createElement('h5');
    imgEl = document.createElement('img');

    h4El.textContent = selectedObjects[i].name;
    h5El.textContent = itemAmountValues[i];
    imgEl.src = selectedObjects[i].filepath;

    sectionEl.appendChild(h4El);
    sectionEl.appendChild(h5El);
    sectionEl.appendChild(imgEl);
  }
}


function pageLoad() {
  if (sectionEl) {
    displayCartItems();
  } else {
    populateDropDown();
  }
}





// Grab button using the DOM
// create an event listern on it that runa a function buttonHandler
// buttonHandler will create an element using the DOM and giev it content. Display message.


// run a function on page load that checks if it's index.html or cart.html 
// if index.html, run populateDropDown, if cart.html run displayCartItems


pageLoad();
// populateDropDown();
// displayCartItems();