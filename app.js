

// crate a loop that iterates the entire legnth or Products.allProducts[i].
// with each iteration create a option element. give it the value of i in the array.
//append to the selectEL.


Product.allProduct = [];

var selectEl = document.getElementById('drop-down');
var divEl = document.getElementById('message');
var buttonEl = document.getElementById('add-product');
var formEl = document.getElementById('products-form');


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

function populateDropDown() {
  var optionEL = document.createElement('option');
  for (i in Product.allProduct) {
    optionEL = document.createElement('option');
    optionEL.textContent = Product.allProduct[i].name;
    selectEl.appendChild(optionEL);
  }
}


function buttonHandler(event) {
  console.log("hello");
  event.preventDefault();
  console.log(event.target.children);
  


  var pEL = document.createElement('p');
  pEL.textContent = ' Item added to Cart!';
  // console.log(pEL.textContent);
  divEl.appendChild(pEL);
}

formEl.addEventListener('submit', buttonHandler);

// Grab button using the DOM
// create an event listern on it that runa a function buttonHandler
// buttonHandler will create an element using the DOM and giev it content. Display message.


populateDropDown();