// JavaScript for shoppinglist functionality

// SELECTORS
var shopInput = document.querySelector(".shop-input");
var shopButton = document.querySelector(".shop-button");
var shopList = document.querySelector(".shop-list");

// EVENT LISTENERS
shopButton.addEventListener("click", addToShopList);
shopList.addEventListener("click", completeDelete);

// FUNCTIONS
function addToShopList(event) {
  event.preventDefault();

  // Create DIV for the shoplist elements
  var shopDiv = document.createElement("div");
  shopDiv.classList.add("shop");

  // Create li element
  var newShop = document.createElement("li");
  newShop.innerText = shopInput.value;
  newShop.classList.add("shop-item");
  shopDiv.appendChild(newShop);

  // Cannot submit empty input
  if (shopInput.value.length > 0) {
    // Add completed button
    var completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-check-circle"> </i>';
    completedButton.classList.add("complete-btn");
    shopDiv.appendChild(completedButton);

    // Add delete button
    var deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class="fas fa-trash"> </i>';
    deleteButton.classList.add("delete-btn");
    shopDiv.appendChild(deleteButton);

    // Append to list
    shopList.appendChild(shopDiv);

    // Clear input field after submit
    shopInput.value = "";
  }
}

// Delete and complete shoplist items
function completeDelete(e) {
  var listElement = e.target;

  if (listElement.classList[0] === "delete-btn") {
    var shop = listElement.parentElement;
    shop.remove();
  }
  if (listElement.classList[0] === "complete-btn") {
    var shop = listElement.parentElement;
    shop.classList.toggle("completed");
  }
}
