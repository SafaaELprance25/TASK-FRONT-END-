


// بيانات القائمة مع الصور والأسعار الأساسية
const menuData = {
    // ... العناصر الحالية ...
    "appetizers": [
        {
      "name": "Caprese Salad",
      "description": "Fresh tomatoes, mozzarella, and basil.",
      "basePrice": 9,
      "image": "images/caprese-salad.jpg"
    },
    {
      "name": "Nachos",
      "description": "Cheesy nachos with jalapeños and salsa.",
      "basePrice": 7,
      "image": "images/nachos.jpg"
    }
  ],
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
  "sides": [ // فئة جديدة
    {
      "name": "French Fries",
      "description": "Crispy golden french fries.",
      "basePrice": 4,
      "image": "images/french-fries.jpg"
    },
    {
      "name": "Onion Rings",
      "description": "Battered and fried to perfection.",
      "basePrice": 4,
      "image": "images/onion-rings.jpg"
    }
  ]
};
/* 
  "appetizers": [
    // ... العناصر الحالية ...
    {
      "name": "Caprese Salad",
      "description": "Fresh tomatoes, mozzarella, and basil.",
      "basePrice": 9,
      "image": "images/caprese-salad.jpg"
    },
    {
      "name": "Nachos",
      "description": "Cheesy nachos with jalapeños and salsa.",
      "basePrice": 7,
      "image": "images/nachos.jpg"
    }
    ,
    {
      "name": "Bruschetta",
      "description": "Grilled bread garlic, tomatoes, olive oil.",
      "price": "$8",
      "image": "images/bruschetta.jpg"
    },
    {
      "name": "Garlic Knots",
      "description": "Garlic butter knots served with marinara sauce.",
      "price": "$5",
      "image": "images/garlic-knots.jpg"
    },
    {
      "name": "Stuffed Mushrooms",
      "description": "Mushrooms stuffed with herbed cheese.",
      "price": "$7",
      "image": "images/stuffed-mushrooms.jpg"
    }
  ],
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
    },
    {
      "name": "Grilled Salmon",
      "description": "Salmon fillet with a lemon herb seasoning.",
      "price": "$15",
      "image": "images/grilled-salmon.jpg"
    },
    {
      "name": "Ribeye Steak",
      "description": "10 oz. Ribeye with garlic mashed potatoes.",
      "price": "$20",
      "image": "images/ribeye-steak.jpg"
    },
    {
      "name": "Chicken Alfredo",
      "description": "Fettuccine pasta with creamy Alfredo sauce.",
      "price": "$12",
      "image": "images/chicken-alfredo.jpg"
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
    ,
    {
      "name": "Tiramisu",
      "description": "Layered Italian dessert with mascarpone cheese.",
      "price": "$6",
      "image": "images/tiramisu.jpg"
    },
    {
      "name": "Cheesecake",
      "description": "Classic cheesecake with a graham cracker crust.",
      "price": "$7",
      "image": "images/cheesecake.jpg"
    },
    {
      "name": "Chocolate Lava Cake",
      "description": "Warm cake with a molten chocolate center.",
      "price": "$8",
      "image": "images/chocolate-lava-cake.jpg"
    }
  ],
  "beverages": [
    // ... العناصر الحالية ...
    {
      "name": "Mango Smoothie",
      "description": "Refreshing mango smoothie.",
      "basePrice": 5,
      "image": "images/mango-smoothie.jpg"
    },
    {
      "name": "Iced Tea",
      "description": "Freshly brewed iced tea, sweetened or unsweetened.",
      "price": "$2",
      "image": "images/iced-tea.jpg"
    },
    {
      "name": "Lemonade",
      "description": "Freshly squeezed lemonade.",
      "price": "$3",
      "image": "images/lemonade.jpg"
    },
    {
      "name": "Espresso",
      "description": "Strong black coffee.",
      "price": "$3",
      "image": "images/espresso.jpg"
    }
  ],
  "sides": [ // فئة جديدة
    {
      "name": "French Fries",
      "description": "Crispy golden french fries.",
      "basePrice": 4,
      "image": "images/french-fries.jpg"
    },
    {
      "name": "Onion Rings",
      "description": "Battered and fried to perfection.",
      "basePrice": 4,
      "image": "images/onion-rings.jpg"
    }
  ]
}; */

// دالة لعرض عناصر القائمة بناءً على الفئة المختارة
function displayMenuItems(category) {
  const menuItemsContainer = document.getElementById('menuItems');
  menuItemsContainer.innerHTML = ''; // تنظيف العناصر السابقة

  let itemsToDisplay = category === 'all' ? 
    Object.values(menuData).flat() : 
    menuData[category];

  itemsToDisplay.forEach(item => {
    const itemElement = document.createElement('div');
    itemElement.classList.add('menu-item');
    itemElement.setAttribute('data-base-price', item.basePrice);
    itemElement.innerHTML = `
      <img src="${item.image}" alt="${item.name}" class="menu-item-image">
      <h3>${item.name}</h3>
      <p>${item.description}</p>
      <div class="sizes">
        <button class="size-button" data-size="S">S</button>
        <button class="size-button" data-size="M">M</button>
        <button class="size-button" data-size="L">L</button>
      </div>
      <p class="price">$${item.basePrice.toFixed(2)}</p>
      <button class="add-button">Add to Cart</button>
    `;
    menuItemsContainer.appendChild(itemElement);
  });
}

// دالة لتحديث السعر بناءً على الحجم المختار
function updatePrice(selectedSize, itemElement) {
  const basePrice = parseFloat(itemElement.getAttribute('data-base-price'));
  let updatedPrice = basePrice;

  switch (selectedSize) {
    case 'S':
      updatedPrice = basePrice;
      break;
    case 'M':
      updatedPrice = basePrice + 2;
      break;
    case 'L':
      updatedPrice = basePrice + 4;
      break;
  }

  const priceElement = itemElement.querySelector('.price');
  priceElement.textContent = `$${updatedPrice.toFixed(2)}`;
}

// إضافة الاستماع للأحداث عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
  displayMenuItems('all'); // عرض جميع العناصر

  const categoryButtons = document.querySelectorAll('.category-button');
  categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
      const category = button.getAttribute('data-category');
      displayMenuItems(category);
    });
  });
});

// إضافة الاستماع لأحداث النقر على أزرار الحجم وإضافة العناصر إلى السلة
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('size-button')) {
    const selectedSize = e.target.getAttribute('data-size');
    const itemElement = e.target.closest('.menu-item');
    updatePrice(selectedSize, itemElement);
  } else if (e.target.classList.contains('add-button')) {
    const itemName = e.target.closest('.menu-item').querySelector('h3').textContent;
    alert(`${itemName} added to cart!`);
  }
});