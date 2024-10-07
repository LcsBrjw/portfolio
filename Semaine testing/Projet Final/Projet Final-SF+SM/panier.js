// Exemple de données du panier
var cartItems = [
  {
    name: "Air Jordan 4 Off-White",
    price: 2100,
    quantity: 0,
    image: "images 2/AJ4.png"
  },
  {
    name: "Air Jordan 5 Off-White",
    price: 225,
    quantity: 0,
    image: "images 2/AJ5.png"
  },
  {
    name: "Adidas Campus",
    price: 110,
    quantity: 0,
    image: "images 2/Campus.png"
  },
  {
    name: "Converse Run Star",
    price: 90,
    quantity: 0,
    image: "images 2/Conv.png"
  }
];

// Contenu du panier
function generateCartItems() {
  var cartItemsDiv = document.getElementById("cart-items");
  var total = 0;

  cartItemsDiv.innerHTML = ""; // Réinitialise le contenu

  // Génère chaque élément du panier
  for (var i = 0; i < cartItems.length; i++) {
    var item = cartItems[i];

    // Crée le HTML pour un élément du panier
    var cartItemDiv = document.createElement("div");
    cartItemDiv.className = "cart-item";

    var itemImage = document.createElement("img");
    itemImage.src = item.image;

    var itemDetailsDiv = document.createElement("div");
    itemDetailsDiv.className = "item-details";

    var itemName = document.createElement("div");
    itemName.className = "item-name";
    itemName.textContent = item.name;

    var itemPrice = document.createElement("div");
    itemPrice.className = "item-price";
    itemPrice.textContent = item.price + " EUR";

    var itemQuantity = document.createElement("div");
    itemQuantity.className = "item-quantity";

    var quantityLabel = document.createElement("span");
    quantityLabel.className = "quantity-label";
    quantityLabel.textContent = "Quantité:";

    var quantityButtons = document.createElement("span");
    quantityButtons.className = "quantity-buttons";

    var decreaseButton = document.createElement("button");
    decreaseButton.textContent = "-";
    (function (index) {
      decreaseButton.onclick = function () {
        decreaseQuantity(index);
      };
    })(i);

    var quantityValue = document.createElement("span");
    quantityValue.textContent = item.quantity;

    var increaseButton = document.createElement("button");
    increaseButton.textContent = "+";
    (function (index) {
      increaseButton.onclick = function () {
        increaseQuantity(index);
      };
    })(i);

    quantityButtons.appendChild(decreaseButton);
    quantityButtons.appendChild(quantityValue);
    quantityButtons.appendChild(increaseButton);

    itemQuantity.appendChild(quantityLabel);
    itemQuantity.appendChild(quantityButtons);

    itemDetailsDiv.appendChild(itemName);
    itemDetailsDiv.appendChild(itemPrice);
    itemDetailsDiv.appendChild(itemQuantity);

    cartItemDiv.appendChild(itemImage);
    cartItemDiv.appendChild(itemDetailsDiv);

    // Bouton "poubelle" pour supprimer l'article
    var deleteButton = document.createElement("span");
    deleteButton.className = "delete-button";
    deleteButton.textContent = "🗑️";
    (function (index) {
      deleteButton.onclick = function () {
        if (confirm("Voulez vous vraiment supprimer cet article ?")){
        deleteItem(index);
      }};
    })(i);
    cartItemDiv.appendChild(deleteButton);

    cartItemsDiv.appendChild(cartItemDiv);
    

    // Calcule le total
    total += item.price * item.quantity;
  }

  // Met à jour le total affiché
  var cartTotalSpan = document.getElementById("cart-total");
  cartTotalSpan.textContent = total;
}

// Fonction pour diminuer la quantité d'un article
function decreaseQuantity(index) {
  if (cartItems[index].quantity >= 1) {
    cartItems[index].quantity--;
    generateCartItems();
  }
}

// Fonction pour augmenter la quantité d'un article
function increaseQuantity(index) {
  cartItems[index].quantity++;
  generateCartItems();
}

// Fonction pour supprimer un article spécifique du panier
function deleteItem(index) {
  cartItems.splice(index, 1);
  generateCartItems();
}

// Appelle la fonction pour générer le contenu initial du panier
generateCartItems();

function addToCart(name, price, image) {
  var existingItem = cartItems.find(function (item) {
    return item.name === name;
  });

  if (existingItem) {
    existingItem.quantity++;
  } else {
    cartItems.push({
      name: name,
      price: price,
      quantity: 1,
      image: image
    });
  }

  generateCartItems();
}

var slideIndex = 0;
showSlides();

function showSlides() {
  var slides = document.getElementsByClassName("slide");

  // Masquer tous les slides
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Afficher le slide courant
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";

  // Défilement automatique toutes les 3 secondes
  setTimeout(showSlides, 3000);
}

function showPopup() {
  var popup = document.getElementById("popup");
  popup.classList.add("show");
}

function hidePopup() {
  var popup = document.getElementById("popup");
  popup.classList.remove("show");
}

const cartItem = document.querySelector('#cart-items');
const emptyCart = document.querySelector('.emptyCartButton');

