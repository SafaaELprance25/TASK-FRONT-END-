/* 
  const menuData = {
    "appetizers": [
      {
        "name": "Bruschetta",
        "description": "Grilled bread garlic, tomatoes, olive oil.",
        "price": "$8",
        "image": "bruschetta.jpg"
      }, ],
  "main-courses": [
    // ... العناصر الحالية ...
    {
      "name": "Spaghetti Bolognese",
      "description": "Classic spaghetti with meat sauce.",
      "basePrice": 14,
      "image": "images/spaghetti-bolognese.jpg"
    },
    {
      "name": "Vegetable Stir Fry",
      "description": "Mixed vegetables stir-fried with tofu.",
      "basePrice": 12,
      "image": "images/vegetable-stir-fry.jpg"
    }
  ],
  "desserts": [
    // ... العناصر الحالية ...
    {
      "name": "Panna Cotta",
      "description": "Creamy Italian dessert with berry sauce.",
      "basePrice": 6,
      "image": "images/panna-cotta.jpg"
    }
  ],
  "beverages": [
    // ... العناصر الحالية ...
    {
      "name": "Mango Smoothie",
      "description": "Refreshing mango smoothie.",
      "basePrice": 5,
      "image": "images/mango-smoothie.jpg"
    }
  ],
     
  };
   */
/*   function filterCategory(category) {
    const menuItemsDiv = document.getElementById('menu-items');
    menuItemsDiv.innerHTML = ''; // Clear existing items
    let itemsToShow = menuData[category] || Object.values(menuData).flat();
  
    itemsToShow.forEach(item => {
      let itemDiv = document.createElement('div');
      itemDiv.classList.add('menu-item');
      itemDiv.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        <p class="price">${item.price}</p>
      `;
      menuItemsDiv.appendChild(itemDiv);
    });
  }
  
  // Initial display of all items
  filterCategory('all');
  filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
} 

function searchByName() {
  var input, filter, i, txtValue;
  input = document.getElementById('searchInput');
  filter = input.value.toUpperCase();
  var x = document.getElementsByClassName("column");
  for (i = 0; i < x.length; i++) {
    txtValue = x[i].textContent || x[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      x[i].style.display = "";
    } else {
      x[i].style.display = "none";
    }
  }
}


function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}


var cart = []; // مصفوفة لتخزين المنتجات المختارة

function addToCart(productName) {
  cart.push(productName); // إضافة اسم المنتج إلى المصفوفة
  var cartItems = document.getElementById('cartItems');
  cartItems.innerHTML = ''; // إفراغ القائمة
  for(var i = 0; i < cart.length; i++) {
    cartItems.innerHTML += '<li>' + cart[i] + '</li>'; // إضافة كل عنصر إلى القائمة
  }
}

var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
 */












filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function searchByName() {
  var input, filter, i, txtValue;
  input = document.getElementById('searchInput');
  filter = input.value.toUpperCase();
  var x = document.getElementsByClassName("column");
  for (i = 0; i < x.length; i++) {
    txtValue = x[i].textContent || x[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      x[i].style.display = "";
    } else {
      x[i].style.display = "none";
    }
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

var cart = []; // مصفوفة لتخزين المنتجات المختارة

function addToCart(productName) {
  cart.push(productName); // إضافة اسم المنتج إلى المصفوفة
  var cartItems = document.getElementById('cartItems');
  cartItems.innerHTML = ''; // إفراغ القائمة
  for(var i = 0; i < cart.length; i++) {
    cartItems.innerHTML += '<li>' + cart[i] + '</li>'; // إضافة كل عنصر إلى القائمة
  }
}

var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    if (current.length > 0) { 
      current[0].className = current[0].className.replace(" active", "");
    }
    this.className += " active";
  });
}
