// Display Constructor Function
function Display() {
    console.log("...display's this...");
    console.log(this);
    this.name = document.getElementById('name');
    this.price = document.getElementById('price');
    this.quantity = document.getElementById('quantity');
}
//Product Constructor Function
function Product(name, price, quantity) {
    console.log("...product's this...");
    console.log(this);
    this.name = name;
    this.price = price;
    this.quantity = quantity;
};

//add product on submit event
document.getElementById('customer-form').addEventListener('submit', function (e) {
    console.log("...event ...");
    console.log(e);
    e.preventDefault();
    console.log("...form's this...");
    console.log(this);
    const name = this.querySelector('.name');
    const price = this.querySelector('.price');
    const quantity = this.querySelector('.quantity');

    const product = new Product(name.value, price.value, quantity.value);
    const display = new Display();

    display.clearFields();
    display.showLoading(product);
});


//show loading
Display.prototype.showLoading = function (product) {
    const loading = document.querySelector('.loading');
    loading.style.display = "block";
    console.log("...showloading's this...");
    console.log(this);

    const displayObj = this;

    setTimeout(function () {
        loading.style.display = "none";
        displayObj.addProduct(product);
    }, 3000);
};

Display.prototype.addProduct = function (product) {

    const random = this.getRandom();
    const productsDiv = document.getElementsByClassName('products')[0];
    productsDiv.innerHTML += `<div class="product">
    <div class="product-image">
      <img src="img/product-${random}.jpg">
    </div>
    <div class="product-details">
      <div class="product-title">${product.name}</div>
    </div>
    <div class="product-price">${product.price}</div>
    <div class="product-quantity">
      <input type="number" value="${product.quantity}" min="1">
    </div>
    <div class="product-removal">
      <button class="remove-product">
        Remove
      </button>
    </div>
    <div class="product-line-price">${(parseFloat(product.price) * parseFloat(product.quantity)).toFixed(2)}</div>
  </div>`;

  // adding event handler to removebutton and inputs
    // document.querySelectorAll(".product-removal button").forEach(function (button) {
    //     button.addEventListener("click", function () {
    //         removeItem(this);
    //     });
    // });
    // document.querySelectorAll(".product-quantity input").forEach(function (input) {
    //     input.addEventListener("change", function () {
    //         updateQuantity(this);
    //     });
    //     input.dispatchEvent(new Event("change"));
    // });

}
//random number
Display.prototype.getRandom = function () {
    let random = Math.floor(Math.random() * 5);
    return random;
};

Display.prototype.clearFields = function () {
    console.log("...clearFields' this...");
    console.log(this);

    this.name.value = "";
    this.price.value = "";
    this.quantity.value = "";
};

// Catching Posted UrlParams 
// const queryString = window.location.search;
// const urlParams = new URLSearchParams(queryString);
// const firstName = urlParams.get("firstname");
// const lastName = urlParams.get("lastname");
// alert("Welcome to Checkout Page" + firstName + " " + lastName);

// taxRate and shippingPrice
const taxRate = 0.18;
const shippingPrice = 15.0;

//Adding EventListener to quantity inputs and remove buttons
document.querySelectorAll(".product-quantity input").forEach(function (input) {
    input.addEventListener("change", function () {
        updateQuantity(this);
    });
});

document.querySelectorAll(".product-removal button").forEach(function (button) {
    button.addEventListener("click", function () {
        removeItem(this);
    });
});

//Update quantity
const updateQuantity = (quantityInput) => {
    //Calculate product Total Price
    let productRow = quantityInput.parentElement.parentElement;
    let price = parseFloat(productRow.querySelector(".product-price").innerText);
    let quantity = quantityInput.value;
    let productTotalPrice = quantity * price;

    //Update product Display prices and calculate cart totals
    productRow.querySelectorAll(".product-line-price").forEach(function (productLinePrice) {
        productLinePrice.innerText = productTotalPrice.toFixed(2);
        calculateCartTotal();
    });
}
//Cart Totals calculation func
const calculateCartTotal = () => {
    let subtotal = 0;
    //Sum up row totals and Calculate Cart Subtotal
    document.querySelectorAll(".product").forEach(function (product) {
        subtotal += parseFloat(product.querySelector(".product-line-price").innerText);
    });

    //Calculate tax, shipping, grand total
    let tax = subtotal * taxRate;
    let shipping = (subtotal > 0 ? shippingPrice : 0);
    let grandTotal = subtotal + tax + shippingPrice;

    //Update cart totals display
    document.querySelector("#cart-subtotal").innerText = subtotal.toFixed(2);
    document.querySelector("#cart-tax").innerText = tax.toFixed(2);
    document.querySelector("#cart-shipping").innerText = shippingPrice.toFixed(2);
    document.querySelector("#cart-total").innerText = grandTotal.toFixed(2);
}

//remove item from chart
const removeItem = (removeButton) => {
    let productRow = removeButton.parentElement.parentElement;
    console.log(productRow)
    productRow.remove();
    //after remove re-calculate the cart totals 
    calculateCartTotal();
}


