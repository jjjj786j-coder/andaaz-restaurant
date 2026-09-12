/**
 * Andaaz Restaurant - Official Website Script
 * Interactive Menu, Lightbox, Reservation Validation, and Pakistan Timezone Open/Closed Status
 */

// Global Menu Data for Andaaz Restaurant
window.ANDAAZ_MENU = [
  {
    id: "m1",
    name: "Masala Chanp",
    category: "tandoor",
    categoryLabel: "From the Tandoor",
    price: 3250,
    portion: "4 Chops / Serving",
    description: "Double-cut mutton chops marinated overnight in crushed spices, ginger-garlic paste, and slow-roasted over live charcoal.",
    image: "assets/images/food-placeholder.svg",
    tags: ["mutton", "tandoori", "signature"],
    ingredients: "Prime mutton chops, raw papaya, coriander, cumin, black pepper, chili, ginger, garlic, mustard oil.",
    variants: [
      { name: "Standard Portion (4 pcs)", priceOffset: 0 },
      { name: "Large Portion (6 pcs)", priceOffset: 1500 }
    ],
    addOns: [
      { name: "Extra Mint Chutney", price: 150 },
      { name: "Garlic Butter Glaze", price: 200 }
    ]
  },
  {
    id: "m2",
    name: "Murgh Malai Tikka",
    category: "tandoor",
    categoryLabel: "From the Tandoor",
    price: 1950,
    portion: "6 Pieces",
    description: "Succulent boneless chicken tenders prepared with green cardamom, cream, white pepper, and gentle tandoori heat.",
    image: "assets/images/murgh-malai-tikka.jpg",
    tags: ["chicken", "mild", "creamy"],
    ingredients: "Chicken breast, fresh cream, yogurt, white pepper, green cardamom, lemon juice, butter.",
    variants: [
      { name: "Boneless Breast Portion", priceOffset: 0 },
      { name: "Thigh Fillet Portion", priceOffset: 100 }
    ],
    addOns: [
      { name: "Extra Cream Dip", price: 150 }
    ]
  },
  {
    id: "m3",
    name: "Macchli Gulnar",
    category: "tandoor",
    categoryLabel: "From the Tandoor",
    price: 2450,
    portion: "Fillet / 350g",
    description: "Fresh river fish fillet coated with a tamarind glaze, carom seeds, and finished over clay tandoor embers.",
    image: "assets/images/macchli-gulnar.jpg",
    tags: ["seafood", "fish"],
    ingredients: "River sole fish, tamarind pulp, ajwain (carom seeds), red chili, lemon juice, turmeric.",
    variants: [
      { name: "Clay Tandoor Grilled", priceOffset: 0 }
    ],
    addOns: []
  },
  {
    id: "m4",
    name: "Bewazni Paneer Tikka",
    category: "tandoor",
    categoryLabel: "From the Tandoor",
    price: 1650,
    portion: "6 Cubes",
    description: "House-made artisanal paneer cubes, lightly marinated with yellow mustard, carom seeds, and bell peppers.",
    image: "assets/images/paneer-tikka.jpg",
    tags: ["vegetarian"],
    ingredients: "Fresh cottage cheese (paneer), bell peppers, onion, yellow mustard, yogurt, carom seeds.",
    variants: [
      { name: "Classic Spiced", priceOffset: 0 }
    ],
    addOns: []
  },
  {
    id: "m5",
    name: "Bhuna Gosht",
    category: "karahi",
    categoryLabel: "From the Karahi",
    price: 3450,
    portion: "Full Karahi (Serves 2)",
    description: "Mutton cooked slowly in its own natural juices with coarse black pepper, tomatoes, and freshly pounded ginger.",
    image: "assets/images/bhuna-gosht.jpg",
    tags: ["mutton", "spiced", "signature"],
    ingredients: "Fresh mutton, ginger julienne, garlic, tomatoes, black pepper, crushed coriander, green chili, desi ghee.",
    variants: [
      { name: "Half Karahi (1 Person)", priceOffset: -1200 },
      { name: "Full Karahi (2-3 Persons)", priceOffset: 0 }
    ],
    addOns: [
      { name: "Extra Ginger Julienne & Chillies", price: 100 },
      { name: "Desi Ghee Tempering", price: 250 }
    ]
  },
  {
    id: "m6",
    name: "Murgh Kali Mirch",
    category: "karahi",
    categoryLabel: "From the Karahi",
    price: 2250,
    portion: "Serves 2",
    description: "Boneless chicken simmered in a velvet white gravy with cracked Tellicherry black pepper and rich dairy cream.",
    image: "assets/images/murgh-kali-mirch.jpg",
    tags: ["chicken", "mild", "creamy"],
    ingredients: "Boneless chicken, fresh cream, black pepper, almond paste, green chili, white butter.",
    variants: [
      { name: "Standard Pot", priceOffset: 0 }
    ],
    addOns: []
  },
  {
    id: "m7",
    name: "Mutton Shank Achari",
    category: "karahi",
    categoryLabel: "From the Karahi",
    price: 3850,
    portion: "2 Shanks / Serves 2",
    description: "Slow-braised mutton shanks infused with tangy homemade pickling spices and slow-roasted mustard oil.",
    image: "assets/images/mutton-shank-achari.jpg",
    tags: ["mutton", "spicy"],
    ingredients: "Mutton shanks, fennel seeds, nigella seeds (kalonji), fenugreek, mustard oil, yogurt, dry red chillies.",
    variants: [
      { name: "Standard Serving", priceOffset: 0 }
    ],
    addOns: []
  },
  {
    id: "m8",
    name: "Nizami Murgh Kaju",
    category: "karahi",
    categoryLabel: "From the Karahi",
    price: 2450,
    portion: "Serves 2",
    description: "Royal Mughlai chicken curry prepared with cashew nut paste, saffron, and gentle aromatic spices.",
    image: "assets/images/nizami-murgh-kaju.jpg",
    tags: ["chicken", "creamy"],
    ingredients: "Chicken, cashew paste, onion, saffron, kewra water, cardamom, ghee.",
    variants: [
      { name: "Standard Portion", priceOffset: 0 }
    ],
    addOns: []
  },
  {
    id: "m9",
    name: "Tandoori Jhinga",
    category: "ocean",
    categoryLabel: "From the Ocean",
    price: 4650,
    portion: "6 Jumbo Prawns",
    description: "Jumbo ocean prawns marinated in garlic butter, lemon, and flame-seared on live charcoal skewers.",
    image: "assets/images/tandoori-jhinga.jpg",
    tags: ["seafood", "prawns", "signature"],
    ingredients: "Jumbo prawns, garlic, lemon juice, butter, red chili flakes, crushed carom seeds.",
    variants: [
      { name: "Charcoal Skewer (6 Prawns)", priceOffset: 0 }
    ],
    addOns: [
      { name: "Extra Lemon Butter Dip", price: 200 }
    ]
  },
  {
    id: "m10",
    name: "Jhinga Karahi",
    category: "ocean",
    categoryLabel: "From the Ocean",
    price: 4250,
    portion: "Serves 2",
    description: "Fresh prawns toss-cooked in a high-fire wok with roasted tomatoes, fresh coriander, and ginger.",
    image: "assets/images/jhinga-karahi.jpg",
    tags: ["seafood", "prawns"],
    ingredients: "Fresh prawns, tomato concasse, garlic, green chilies, coriander, fenugreek leaves.",
    variants: [
      { name: "Wok Cooked", priceOffset: 0 }
    ],
    addOns: []
  },
  {
    id: "m11",
    name: "Shahi Biryani",
    category: "table",
    categoryLabel: "For the Table",
    price: 2650,
    portion: "Handi / Serves 2-3",
    description: "Fragrant long-grain basmati rice layered with spiced mutton shank, saffron milk, and fried onions.",
    image: "assets/images/shahi-biryani.jpg",
    tags: ["mutton", "rice", "signature"],
    ingredients: "Aged basmati rice, mutton shank, saffron, kewra, caramelised onions, mint, kewra water, green cardamom.",
    variants: [
      { name: "Mutton Biryani Handi", priceOffset: 0 }
    ],
    addOns: [
      { name: "Mint Zeera Raita", price: 250 },
      { name: "Kachumber Salad", price: 200 }
    ]
  },
  {
    id: "m12",
    name: "Roghani Naan",
    category: "table",
    categoryLabel: "For the Table",
    price: 250,
    portion: "1 Naan",
    description: "Fluffy tandoori bread brushed with pure ghee and sprinkled with white sesame seeds.",
    image: "assets/images/roghani-naan.jpg",
    tags: ["bread", "vegetarian"],
    ingredients: "Wheat flour, milk, ghee, white sesame seeds, yeast.",
    variants: [
      { name: "Single Naan", priceOffset: 0 }
    ],
    addOns: []
  },
  {
    id: "m13",
    name: "Jalebi Garam",
    category: "close",
    categoryLabel: "To Close",
    price: 850,
    portion: "250g Serving",
    description: "Crisp saffron syrup spirals, freshly prepared live at the courtyard tandoor and served piping hot.",
    image: "assets/images/jalebi-garam.jpg",
    tags: ["dessert", "sweet", "vegetarian"],
    ingredients: "Refined flour, saffron, cardamom, sugar syrup, ghee.",
    variants: [
      { name: "Hot Serving (250g)", priceOffset: 0 }
    ],
    addOns: [
      { name: "Rabri Scoop Add-on", price: 300 }
    ]
  },
  {
    id: "m14",
    name: "Firni",
    category: "close",
    categoryLabel: "To Close",
    price: 750,
    portion: "Earthen Matka",
    description: "Traditional slow-cooked ground rice pudding served in chilled earthenware bowls with silver leaf & pistachios.",
    image: "assets/images/firni.jpg",
    tags: ["dessert", "sweet", "vegetarian"],
    ingredients: "Basmati rice flour, full-cream milk, green cardamom, rose water, pistachios, silver leaf.",
    variants: [
      { name: "Single Bowl", priceOffset: 0 }
    ],
    addOns: []
  },
  {
    id: "m15",
    name: "Peshawar Kehwa",
    category: "accompany",
    categoryLabel: "To Accompany",
    price: 450,
    portion: "Brass Pot / Serves 2",
    description: "Traditional green tea infused with green cardamom pods, served with saffron strands and rock sugar.",
    image: "assets/images/peshawar-kehwa.jpg",
    tags: ["beverage", "tea", "traditional"],
    ingredients: "Peshawari green tea leaves, green cardamom, saffron, rock sugar (nabaat).",
    variants: [
      { name: "Brass Pot (2 Cups)", priceOffset: 0 }
    ],
    addOns: []
  },
  {
    id: "m16",
    name: "Lahori Meethi Lassi",
    category: "accompany",
    categoryLabel: "To Accompany",
    price: 520,
    portion: "Clay Mug (500ml)",
    description: "Chilled rich yogurt smoothie churned with rabri cream and topped with fresh malai.",
    image: "assets/images/lahori-lassi.jpg",
    tags: ["beverage", "lassi", "chilled"],
    ingredients: "Fresh buffalo yogurt, milk, sugar, rabri cream, ice.",
    variants: [
      { name: "Sweet Rabri Lassi", priceOffset: 0 }
    ],
    addOns: []
  }
];

// App State
const state = {
  cart: [],
  selectedCategory: 'all',
  searchQuery: '',
  sortBy: 'default',
  dietaryFilter: 'all',
  activeModalDish: null,
  galleryFilter: 'all',
  activeLightboxIndex: 0,
  filteredGalleryImages: []
};

// Initialize App on DOM Load
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initPakistanStatus();
  initMenuPage();
  initReservationForm();
  initGalleryPage();
  initContactForm();
  initAccessibility();
});

/* -------------------------------------------------------------
 * 1. Mobile Navigation & Accessibility
 * ------------------------------------------------------------- */
function initNavigation() {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (toggleBtn && mobileMenu) {
    toggleBtn.addEventListener('click', () => {
      const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
      toggleBtn.setAttribute('aria-expanded', !isExpanded);
      mobileMenu.classList.toggle('hidden');
    });
  }

  const mobileCartButtons = document.querySelectorAll('#mobile-cart-button, #mobile-cart-button-2');
  mobileCartButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const drawer = document.getElementById('cart-drawer');
      if (drawer) {
        drawer.classList.remove('translate-x-full');
        document.body.classList.add('overflow-hidden');
      }
      if (mobileMenu) mobileMenu.classList.add('hidden');
    });
  });
}

/* -------------------------------------------------------------
 * 2. Real-Time Pakistan (Asia/Karachi) Status Indicator
 * ------------------------------------------------------------- */
function initPakistanStatus() {
  const statusBadge = document.getElementById('pk-status-badge');
  if (!statusBadge) return;

  function updateStatus() {
    const now = new Date();
    const options = { timeZone: 'Asia/Karachi', hour12: false, weekday: 'short', hour: 'numeric', minute: 'numeric' };
    const formatter = new Intl.DateTimeFormat('en-US', options);
    const parts = formatter.formatToParts(now);
    
    let day = '', hour = 0, minute = 0;
    parts.forEach(p => {
      if (p.type === 'weekday') day = p.value;
      if (p.type === 'hour') hour = parseInt(p.value, 10);
      if (p.type === 'minute') minute = parseInt(p.value, 10);
    });

    const timeMinutes = hour * 60 + minute;
    const isClosedDay = (day === 'Mon');
    const isOpenHours = (!isClosedDay && timeMinutes >= 1080 && timeMinutes <= 1410);

    if (isOpenHours) {
      statusBadge.innerHTML = `
        <span class="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold bg-white/10 backdrop-blur-lg text-[#F7C873] border border-[#F7C873]/60">
          <span class="w-2 h-2 mr-1.5 rounded-full bg-[#F7C873] animate-pulse"></span>
          Open Now (Kitchen cutoff 11:00 PM)
        </span>
      `;
    } else {
      const nextOpen = isClosedDay ? "Opens Tue at 6:00 PM" : (timeMinutes < 1080 ? "Opens Today at 6:00 PM" : "Opens Tomorrow at 6:00 PM");
      statusBadge.innerHTML = `
        <span class="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold bg-white/10 backdrop-blur-lg text-[#E5D7C8] border border-[#FF6B55]/70">
          <span class="w-2 h-2 mr-1.5 rounded-full bg-[#FF6B55]"></span>
          Closed Now &bull; ${nextOpen} PKT
        </span>
      `;
    }
  }

  updateStatus();
  setInterval(updateStatus, 60000);
}

/* -------------------------------------------------------------
 * 3. Menu Page Logic
 * ------------------------------------------------------------- */
function initMenuPage() {
  const menuGrid = document.getElementById('menu-items-grid');
  if (!menuGrid) return;

  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.has('category')) state.selectedCategory = urlParams.get('category');
  if (urlParams.has('q')) state.searchQuery = urlParams.get('q');

  const searchInput = document.getElementById('menu-search');
  const sortSelect = document.getElementById('menu-sort');
  const dietSelect = document.getElementById('menu-dietary');
  const clearBtn = document.getElementById('clear-filters');

  if (searchInput) {
    searchInput.value = state.searchQuery;
    searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      renderMenu();
    });
  }

  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      state.sortBy = e.target.value;
      renderMenu();
    });
  }

  if (dietSelect) {
    dietSelect.addEventListener('change', (e) => {
      state.dietaryFilter = e.target.value;
      renderMenu();
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      state.selectedCategory = 'all';
      state.searchQuery = '';
      state.sortBy = 'default';
      state.dietaryFilter = 'all';
      if (searchInput) searchInput.value = '';
      if (sortSelect) sortSelect.value = 'default';
      if (dietSelect) dietSelect.value = 'all';
      updateCategoryTabs();
      renderMenu();
    });
  }

  const categoryContainer = document.getElementById('category-tabs');
  if (categoryContainer) {
    categoryContainer.querySelectorAll('button').forEach(btn => {
      btn.addEventListener('click', () => {
        state.selectedCategory = btn.dataset.category;
        updateCategoryTabs();
        renderMenu();
      });
    });
  }

  updateCategoryTabs();
  renderMenu();
  initDishModal();
  initCartDrawer();
}

function updateCategoryTabs() {
  const categoryContainer = document.getElementById('category-tabs');
  if (!categoryContainer) return;
  categoryContainer.querySelectorAll('button').forEach(btn => {
    if (btn.dataset.category === state.selectedCategory) {
      btn.className = "shrink-0 px-4 py-2.5 rounded-full bg-[#F7C873] text-[#10101A] text-xs font-semibold uppercase tracking-[0.12em] whitespace-nowrap transition-colors duration-150";
    } else {
      btn.className = "shrink-0 px-4 py-2.5 rounded-full border border-white/20 bg-white/5 text-[#D8CABB] text-xs uppercase tracking-[0.12em] hover:border-[#F7C873] hover:text-[#F7C873] transition-colors duration-150 whitespace-nowrap";
    }
  });
}

function renderMenu() {
  const menuGrid = document.getElementById('menu-items-grid');
  const emptyState = document.getElementById('menu-empty-state');
  const resultCount = document.getElementById('menu-result-count');
  if (!menuGrid) return;

  let filtered = [...window.ANDAAZ_MENU];

  if (state.selectedCategory !== 'all') {
    filtered = filtered.filter(item => item.category === state.selectedCategory);
  }

  if (state.searchQuery.trim() !== '') {
    const q = state.searchQuery.toLowerCase().trim();
    filtered = filtered.filter(item =>
      item.name.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q) ||
      item.categoryLabel.toLowerCase().includes(q)
    );
  }

  if (state.dietaryFilter !== 'all') {
    filtered = filtered.filter(item => item.tags.includes(state.dietaryFilter));
  }

  if (state.sortBy === 'price-low') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (state.sortBy === 'price-high') {
    filtered.sort((a, b) => b.price - a.price);
  }

  if (resultCount) {
    resultCount.textContent = `Showing ${filtered.length} dish${filtered.length === 1 ? '' : 'es'}`;
  }

  if (filtered.length === 0) {
    menuGrid.innerHTML = '';
    if (emptyState) emptyState.classList.remove('hidden');
    return;
  } else {
    if (emptyState) emptyState.classList.add('hidden');
  }

  let html = '';
  const categories = [
    { key: 'tandoor', title: 'From the Tandoor' },
    { key: 'karahi', title: 'From the Karahi' },
    { key: 'ocean', title: 'From the Ocean' },
    { key: 'table', title: 'For the Table' },
    { key: 'close', title: 'To Close' },
    { key: 'accompany', title: 'To Accompany' }
  ];

  if (state.selectedCategory === 'all' && state.searchQuery === '' && state.dietaryFilter === 'all') {
    categories.forEach(cat => {
      const itemsInCat = filtered.filter(item => item.category === cat.key);
      if (itemsInCat.length === 0) return;
      html += `
        <div class="col-span-full mt-6 first:mt-0">
          <div class="flex items-center gap-4 mb-6">
            <h2 class="text-2xl md:text-3xl font-serif font-semibold text-[#FFF4E5]">${cat.title}</h2>
            <div class="flex-1 h-px bg-white/15"></div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            ${itemsInCat.map(renderDishCard).join('')}
          </div>
        </div>
      `;
    });
  } else {
    html = `
      <div class="col-span-full grid grid-cols-1 md:grid-cols-2 gap-6">
        ${filtered.map(renderDishCard).join('')}
      </div>
    `;
  }

  menuGrid.innerHTML = html;

  menuGrid.querySelectorAll('.dish-card').forEach(card => {
    card.addEventListener('click', () => {
      const dishId = card.dataset.dishId;
      openDishModal(dishId);
    });
  });
}

function renderDishCard(item) {
  return `
    <article data-dish-id="${item.id}" class="dish-card group cursor-pointer bg-white/10 backdrop-blur-xl border border-white/15 hover:border-[#F7C873] rounded-3xl p-5 transition-all duration-300 flex flex-col sm:flex-row gap-5 hover:-translate-y-1 hover:shadow-2xl">
      <div class="w-full sm:w-36 h-36 shrink-0 overflow-hidden bg-slate-100 rounded-2xl border border-white/20">
        <img 
          src="${item.image}" 
          alt="${item.name} served at Andaaz Restaurant" 
          width="112" 
          height="112"
          loading="lazy"
          onerror="this.onerror=null;this.src='assets/images/food-placeholder.svg';"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 bg-slate-100"
        />
      </div>
      <div class="flex-1 flex flex-col justify-between">
        <div>
          <div class="flex items-baseline justify-between gap-2">
            <h3 class="text-xl font-serif font-semibold text-[#FFF4E5] group-hover:text-[#F7C873] transition-colors">${item.name}</h3>
            <span class="text-base font-semibold text-[#F7C873] whitespace-nowrap">PKR ${item.price.toLocaleString()}</span>
          </div>
          <p class="text-xs uppercase tracking-wider font-semibold text-[#A54832] mt-0.5">${item.portion}</p>
          <p class="text-sm text-[#BBAA9A] mt-2 line-clamp-2 leading-relaxed">${item.description}</p>
        </div>
        <div class="mt-3 flex items-center justify-between pt-3 border-t border-white/10">
          <span class="text-xs text-[#82786F] font-medium">Click for options & ingredients</span>
          <span class="inline-flex items-center text-xs font-semibold text-[#F7C873] group-hover:translate-x-1 transition-transform">
            Inquire Dish &rarr;
          </span>
        </div>
      </div>
    </article>
  `;
}

/* -------------------------------------------------------------
 * 4. Dish Details Modal Logic
 * ------------------------------------------------------------- */
function initDishModal() {
  const modal = document.getElementById('dish-modal');
  if (!modal) return;

  const closeBtn = document.getElementById('close-dish-modal');
  const backdrop = modal.querySelector('.modal-backdrop');

  const closeModal = () => {
    modal.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  };

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (backdrop) backdrop.addEventListener('click', closeModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });
}

function openDishModal(dishId) {
  const dish = window.ANDAAZ_MENU.find(d => d.id === dishId);
  const modal = document.getElementById('dish-modal');
  if (!dish || !modal) return;

  state.activeModalDish = {
    ...dish,
    selectedVariant: dish.variants[0] || { name: 'Standard', priceOffset: 0 },
    selectedAddOns: [],
    quantity: 1
  };

  updateModalUI();
  modal.classList.remove('hidden');
  document.body.classList.add('overflow-hidden');
}

function updateModalUI() {
  const dish = state.activeModalDish;
  if (!dish) return;

  document.getElementById('modal-dish-name').textContent = dish.name;
  document.getElementById('modal-dish-portion').textContent = dish.portion;
  document.getElementById('modal-dish-desc').textContent = dish.description;
  document.getElementById('modal-dish-ingredients').textContent = dish.ingredients;
  
  const imgEl = document.getElementById('modal-dish-img');
  if (imgEl) {
    imgEl.src = dish.image;
    imgEl.alt = dish.name;
  }

  const variantContainer = document.getElementById('modal-variants-container');
  if (variantContainer) {
    if (dish.variants && dish.variants.length > 1) {
      variantContainer.innerHTML = `
        <label class="block text-xs uppercase tracking-wider font-semibold text-[#F7C873] mb-2">Select Portion / Variant</label>
        <div class="space-y-2">
          ${dish.variants.map((v, idx) => `
            <label class="flex items-center justify-between p-2.5 rounded-2xl border ${dish.selectedVariant.name === v.name ? 'border-[#F7C873] bg-white/10' : 'border-white/20 bg-white/5'} cursor-pointer backdrop-blur-lg">
              <span class="text-sm font-medium text-[#F3E9D7]">
                <input type="radio" name="dish-variant" value="${idx}" ${dish.selectedVariant.name === v.name ? 'checked' : ''} class="accent-[#F7C873] mr-2">
                ${v.name}
              </span>
              <span class="text-xs font-semibold text-[#F7C873]">
                ${v.priceOffset === 0 ? 'Included' : (v.priceOffset > 0 ? `+PKR ${v.priceOffset}` : `-PKR ${Math.abs(v.priceOffset)}`)}
              </span>
            </label>
          `).join('')}
        </div>
      `;

      variantContainer.querySelectorAll('input[name="dish-variant"]').forEach(radio => {
        radio.addEventListener('change', (e) => {
          dish.selectedVariant = dish.variants[parseInt(e.target.value, 10)];
          updateModalUI();
        });
      });
    } else {
      variantContainer.innerHTML = '';
    }
  }

  const addOnContainer = document.getElementById('modal-addons-container');
  if (addOnContainer) {
    if (dish.addOns && dish.addOns.length > 0) {
      addOnContainer.innerHTML = `
        <label class="block text-xs uppercase tracking-wider font-semibold text-[#F7C873] mb-2">Optional Add-ons</label>
        <div class="space-y-2">
          ${dish.addOns.map((addon, idx) => {
            const isChecked = dish.selectedAddOns.some(a => a.name === addon.name);
            return `
              <label class="flex items-center justify-between p-2.5 rounded-2xl border ${isChecked ? 'border-[#F7C873] bg-white/10' : 'border-white/20 bg-white/5'} cursor-pointer backdrop-blur-lg">
                <span class="text-sm font-medium text-[#F3E9D7]">
                  <input type="checkbox" name="dish-addon" value="${idx}" ${isChecked ? 'checked' : ''} class="accent-[#F7C873] mr-2">
                  ${addon.name}
                </span>
                <span class="text-xs font-semibold text-[#F7C873]">+PKR ${addon.price}</span>
              </label>
            `;
          }).join('')}
        </div>
      `;

      addOnContainer.querySelectorAll('input[name="dish-addon"]').forEach(cb => {
        cb.addEventListener('change', () => {
          const selected = [];
          addOnContainer.querySelectorAll('input[name="dish-addon"]:checked').forEach(c => {
            selected.push(dish.addOns[parseInt(c.value, 10)]);
          });
          dish.selectedAddOns = selected;
          updateModalUI();
        });
      });
    } else {
      addOnContainer.innerHTML = '';
    }
  }

  const qtyVal = document.getElementById('modal-qty-val');
  if (qtyVal) qtyVal.textContent = dish.quantity;

  const btnDec = document.getElementById('modal-qty-dec');
  const btnInc = document.getElementById('modal-qty-inc');
  if (btnDec) {
    btnDec.onclick = () => {
      if (dish.quantity > 1) {
        dish.quantity--;
        updateModalUI();
      }
    };
  }
  if (btnInc) {
    btnInc.onclick = () => {
      dish.quantity++;
      updateModalUI();
    };
  }

  let unitPrice = dish.price + (dish.selectedVariant ? dish.selectedVariant.priceOffset : 0);
  dish.selectedAddOns.forEach(a => unitPrice += a.price);
  const totalPrice = unitPrice * dish.quantity;

  document.getElementById('modal-total-price').textContent = `PKR ${totalPrice.toLocaleString()}`;

  const addToCartBtn = document.getElementById('modal-add-to-cart');
  if (addToCartBtn) {
    addToCartBtn.onclick = () => {
      addToCart({
        id: dish.id + '-' + Date.now(),
        dishId: dish.id,
        name: dish.name,
        variantName: dish.selectedVariant ? dish.selectedVariant.name : 'Standard',
        addOns: [...dish.selectedAddOns],
        unitPrice: unitPrice,
        quantity: dish.quantity,
        totalPrice: totalPrice
      });
      document.getElementById('dish-modal').classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
      toggleCartDrawer(true);
    };
  }
}

/* -------------------------------------------------------------
 * 5. Cart Drawer & WhatsApp Order Handoff
 * ------------------------------------------------------------- */
function initCartDrawer() {
  const cartDrawer = document.getElementById('cart-drawer');
  const cartToggleBtn = document.getElementById('view-cart-btn');
  const cartCloseBtn = document.getElementById('close-cart-btn');
  const cartBackdrop = document.getElementById('cart-backdrop');

  if (cartToggleBtn) {
    cartToggleBtn.addEventListener('click', () => toggleCartDrawer(true));
  }
  if (cartCloseBtn) {
    cartCloseBtn.addEventListener('click', () => toggleCartDrawer(false));
  }
  if (cartBackdrop) {
    cartBackdrop.addEventListener('click', () => toggleCartDrawer(false));
  }

  const sendWhatsAppBtn = document.getElementById('send-whatsapp-order');
  if (sendWhatsAppBtn) {
    sendWhatsAppBtn.addEventListener('click', sendOrderViaWhatsApp);
  }
}

function toggleCartDrawer(open) {
  const cartDrawer = document.getElementById('cart-drawer');
  if (!cartDrawer) return;
  if (open) {
    cartDrawer.classList.remove('translate-x-full');
    document.body.classList.add('overflow-hidden');
  } else {
    cartDrawer.classList.add('translate-x-full');
    document.body.classList.remove('overflow-hidden');
  }
}

function addToCart(item) {
  state.cart.push(item);
  renderCart();
}

function renderCart() {
  const cartItemsContainer = document.getElementById('cart-items-list');
  const cartSubtotalEl = document.getElementById('cart-subtotal');
  const cartTaxEl = document.getElementById('cart-tax');
  const cartTotalEl = document.getElementById('cart-total');
  const cartCountBadge = document.getElementById('cart-count-badge');

  const totalItems = state.cart.reduce((sum, i) => sum + i.quantity, 0);
  if (cartCountBadge) cartCountBadge.textContent = totalItems;

  if (!cartItemsContainer) return;

  if (state.cart.length === 0) {
    cartItemsContainer.innerHTML = `
      <div class="text-center py-12">
        <svg class="w-12 h-12 text-[#DDD7CD] mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
        <p class="text-[#F3E9D7] font-medium">Your inquiry tray is empty.</p>
        <p class="text-xs text-[#82786F] mt-1">Select dishes from the menu to request availability.</p>
      </div>
    `;
    if (cartSubtotalEl) cartSubtotalEl.textContent = 'PKR 0';
    if (cartTaxEl) cartTaxEl.textContent = 'PKR 0';
    if (cartTotalEl) cartTotalEl.textContent = 'PKR 0';
    return;
  }

  let subtotal = 0;
  cartItemsContainer.innerHTML = state.cart.map((item, index) => {
    subtotal += item.totalPrice;
    const addOnText = item.addOns.length > 0 ? ` + ${item.addOns.map(a => a.name).join(', ')}` : '';
    return `
      <div class="flex items-start justify-between p-3.5 bg-white/10 backdrop-blur-xl border border-white/15 rounded-2xl">
        <div class="flex-1 pr-3">
          <h4 class="font-serif font-semibold text-[#FFF4E5] text-base">${item.name}</h4>
          <p class="text-xs text-[#D6A85F] font-semibold">${item.variantName}${addOnText}</p>
          <p class="text-xs text-[#AFA397] mt-1">PKR ${item.unitPrice.toLocaleString()} &times; ${item.quantity}</p>
        </div>
        <div class="text-right">
          <span class="block font-semibold text-[#F7C873] text-sm mb-2">PKR ${item.totalPrice.toLocaleString()}</span>
          <button onclick="removeFromCart(${index})" class="text-xs text-[#C85A3D] hover:underline">Remove</button>
        </div>
      </div>
    `;
  }).join('');

  const pstTax = Math.round(subtotal * 0.16);
  const estimatedTotal = subtotal + pstTax;

  if (cartSubtotalEl) cartSubtotalEl.textContent = `PKR ${subtotal.toLocaleString()}`;
  if (cartTaxEl) cartTaxEl.textContent = `PKR ${pstTax.toLocaleString()}`;
  if (cartTotalEl) cartTotalEl.textContent = `PKR ${estimatedTotal.toLocaleString()}`;
}

window.removeFromCart = function(index) {
  state.cart.splice(index, 1);
  renderCart();
};

function sendOrderViaWhatsApp() {
  if (state.cart.length === 0) {
    alert('Please add at least one dish to your order inquiry.');
    return;
  }

  let subtotal = 0;
  let lines = [];
  lines.push(" Salam Andaaz Restaurant, I would like to inquire about placing an order / dining inquiry:");
  lines.push("");

  state.cart.forEach((item, i) => {
    subtotal += item.totalPrice;
    const addOnText = item.addOns.length > 0 ? ` (${item.addOns.map(a => a.name).join(', ')})` : '';
    lines.push(`${i + 1}. *${item.name}* [${item.variantName}${addOnText}] x${item.quantity} - PKR ${item.totalPrice.toLocaleString()}`);
  });

  const pstTax = Math.round(subtotal * 0.16);
  const estimatedTotal = subtotal + pstTax;

  lines.push("");
  lines.push(`*Estimated Subtotal*: PKR ${subtotal.toLocaleString()}`);
  lines.push(`*PST (16%)*: PKR ${pstTax.toLocaleString()}`);
  lines.push(`*Estimated Total*: PKR ${estimatedTotal.toLocaleString()}`);
  lines.push("");
  lines.push(" Please confirm availability and pickup / dining details. (Note: Subject to restaurant confirmation)");

  const msg = encodeURIComponent(lines.join("\n"));
  const waUrl = `https://wa.me/923000263229?text=${msg}`;

  window.open(waUrl, '_blank');
}

/* -------------------------------------------------------------
 * 6. Reservation Form Logic & Validation
 * ------------------------------------------------------------- */
function initReservationForm() {
  const form = document.getElementById('reservation-form');
  if (!form) return;

  const dateInput = document.getElementById('res-date');
  if (dateInput) {
    const today = new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Karachi' }).format(new Date());
    dateInput.min = today;
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const fullName = document.getElementById('res-name').value.trim();
    const phone = document.getElementById('res-phone').value.trim();
    const email = document.getElementById('res-email').value.trim();
    const date = document.getElementById('res-date').value;
    const time = document.getElementById('res-time').value;
    const guests = document.getElementById('res-guests').value;
    const seating = document.getElementById('res-seating').value;
    const occasion = document.getElementById('res-occasion').value;
    const notes = document.getElementById('res-notes').value.trim();

    if (!fullName || !phone || !date || !time || !guests) {
      alert('Please fill out all required reservation fields.');
      return;
    }

    const selectedDateObj = new Date(`${date}T12:00:00`);
    if (selectedDateObj.getDay() === 1) {
      alert('Andaaz Restaurant is closed on Mondays for kitchen maintenance. Please choose a date between Tuesday and Sunday.');
      return;
    }

    const pakistanNow = new Intl.DateTimeFormat('en-US', {
      timeZone: 'Asia/Karachi', weekday: 'short', hour: 'numeric', minute: 'numeric', hour12: false
    }).formatToParts(new Date());
    const currentParts = {};
    pakistanNow.forEach((part) => { currentParts[part.type] = part.value; });
    const selectedToday = date === new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Karachi' }).format(new Date());
    const requestedMinutes = (() => {
      const match = time.match(/(\d+):(\d+)\s*(AM|PM)/i);
      if (!match) return 0;
      let hour = Number(match[1]);
      if (match[3].toUpperCase() === 'PM' && hour !== 12) hour += 12;
      if (match[3].toUpperCase() === 'AM' && hour === 12) hour = 0;
      return hour * 60 + Number(match[2]);
    })();
    const nowMinutes = Number(currentParts.hour) * 60 + Number(currentParts.minute);
    if (selectedToday && requestedMinutes <= nowMinutes) {
      alert('Please choose a future time today, or select another date.');
      return;
    }
    if (requestedMinutes < 1080 || requestedMinutes > 1380) {
      alert('Please choose a dinner time between 6:00 PM and 11:00 PM PKT.');
      return;
    }

    let msgLines = [
      " Salam Andaaz Restaurant, I would like to request a table reservation:",
      "",
      `*Guest Name*: ${fullName}`,
      `*Phone*: ${phone}`,
      `*Email*: ${email || 'N/A'}`,
      `*Date*: ${date}`,
      `*Time*: ${time} PKT`,
      `*Guests*: ${guests} Guest(s)`,
      `*Seating Preference*: ${seating}`,
      `*Occasion*: ${occasion || 'Standard Dining'}`,
      `*Special Notes*: ${notes || 'None'}`
    ];

    if (parseInt(guests, 10) >= 6) {
      msgLines.push("");
      msgLines.push("*Note*: Party size 6+ requires advance deposit confirmation from management.");
    }

    msgLines.push("");
    msgLines.push(" Please confirm table availability. (Note: Table is not confirmed until Andaaz Restaurant replies with confirmation)");

    const msg = encodeURIComponent(msgLines.join("\n"));
    const waUrl = `https://wa.me/923000263229?text=${msg}`;

    const confirmModal = document.getElementById('res-confirm-modal');
    if (confirmModal) {
      const details = document.getElementById('res-modal-details');
      details.textContent = '';
      const detailBox = document.createElement('div');
      detailBox.className = 'text-left space-y-2 text-sm text-[#D8CABB] bg-white/10 backdrop-blur-lg border-l-2 border-[#F7C873] rounded-2xl p-4 my-4';
      [["Name", fullName], ["Date & Time", `${date} at ${time} PKT`], ["Party Size", `${guests} Guests (${seating})`]].forEach(([label, value]) => {
        const row = document.createElement('p');
        const strong = document.createElement('strong');
        strong.textContent = `${label}: `;
        row.append(strong, document.createTextNode(value));
        detailBox.appendChild(row);
      });
      details.appendChild(detailBox);
      confirmModal.classList.remove('hidden');
      document.getElementById('proceed-res-wa').onclick = () => {
        window.open(waUrl, '_blank');
        confirmModal.classList.add('hidden');
      };
      document.getElementById('close-res-modal').onclick = () => {
        confirmModal.classList.add('hidden');
      };
      const secondaryClose = document.getElementById('close-res-modal-2');
      if (secondaryClose) secondaryClose.onclick = () => confirmModal.classList.add('hidden');
    } else {
      window.open(waUrl, '_blank');
    }
  });
}

/* -------------------------------------------------------------
 * 7. Gallery Filtering & Fullscreen Lightbox
 * ------------------------------------------------------------- */

const GALLERY_DATA = [
  { src: "assets/images/hero-rooftop.jpg", category: "interiors", title: "Rooftop Terrace Dining", caption: "Candlelit rooftop tables with direct panoramic views of Badshahi Masjid minarets." },
  { src: "https://framerusercontent.com/images/aICYX2Ex61syRcyO70tyd6DWg.jpg?height=1350&width=1080", category: "interiors", title: "Official Rooftop View", caption: "Rooftop dining photograph published on the official Andaaz Restaurant website." },
  { src: "https://framerusercontent.com/images/0G8eEWLIwWNxGLDHSGOCtpItCt0.jpg?height=3016&width=4528", category: "interiors", title: "The House Above Fort Road", caption: "Dining-space photograph published on the official Andaaz Restaurant website." },
  { src: "assets/images/dining-hall.jpg", category: "interiors", title: "Heritage Indoor Courtyard", caption: "Traditional Lahori architectural courtyard adorned with copper lanterns and carved woodwork." },
  { src: "assets/images/badshahi-night.jpg", category: "interiors", title: "Illuminated Night Panorama", caption: "Nighttime vista overlooking Badshahi Mosque illuminated against the night sky." },
  { src: "assets/images/rooftop-table.jpg", category: "interiors", title: "Sunset Dining Atmosphere", caption: "Golden hour seating at Andaaz Restaurant in the Walled City of Lahore." },
  { src: "assets/images/murgh-malai-tikka.jpg", category: "food", title: "Murgh Malai Tikka", caption: "Cream and cardamom infused chicken tenders skewered over charcoal." },
  { src: "assets/images/macchli-gulnar.jpg", category: "food", title: "Macchli Gulnar", caption: "Tamarind-glazed river fish fillet roasted over clay tandoor embers." },
  { src: "assets/images/paneer-tikka.jpg", category: "food", title: "Bewazni Paneer Tikka", caption: "House-made artisanal paneer cubes grilled with carom seeds and yellow mustard." },
  { src: "assets/images/ref-slow-cooked-bhuna-gosht.jpg", category: "food", title: "Slow-Cooked Bhuna Gosht", caption: "Topic reference photograph from a published Bhuna Gosht recipe; not photographed at Andaaz Restaurant.", alt: "Slow-cooked bhuna gosht curry in a serving bowl", source: "https://recipes.timesofindia.com/bhuna-gosht/rs83711127.cms", permission: "Third-party editorial image; reuse permission not separately confirmed." },
  { src: "assets/images/murgh-kali-mirch.jpg", category: "food", title: "Murgh Kali Mirch", caption: "Boneless chicken simmered in velvet white cream gravy with Tellicherry black pepper." },
  { src: "assets/images/mutton-shank-achari.jpg", category: "food", title: "Mutton Shank Achari", caption: "Slow-braised mutton shanks infused with tangy homemade pickling spices." },
  { src: "assets/images/ref-nizami-murgh-kaju.jpg", category: "food", title: "Nizami Murgh Kaju", caption: "Topic reference photograph from a published Chicken Nizami recipe; not photographed at Andaaz Restaurant.", alt: "Nizami chicken curry with cashews and cream", source: "https://food.tribune.com.pk/en/recipe/chicken-nizami", permission: "Third-party editorial image; reuse permission not separately confirmed." },
  { src: "assets/images/tandoori-jhinga.jpg", category: "food", title: "Tandoori Ocean Jhinga", caption: "Flame-seared jumbo prawns tossed with garlic butter and chili." },
  { src: "assets/images/ref-jhinga-karahi.jpg", category: "food", title: "Fresh Jhinga Karahi", caption: "Topic reference photograph from a Karachi coastal-cuisine article; not photographed at Andaaz Restaurant.", alt: "Fresh jhinga karahi with prawns, tomato masala, coriander, and green chili", source: "https://karachikhatmal.com/why-karachis-indigenous-coastal-cuisine-finds-itself-on-the-margins", permission: "Third-party editorial image; reuse permission not separately confirmed." },
  { src: "assets/images/shahi-biryani.jpg", category: "food", title: "Mughlai Shahi Biryani", caption: "Fragrant saffron basmati rice layered with spiced mutton shank." },
  { src: "assets/images/ref-roghni-naan.jpg", category: "food", title: "Fresh Roghni Naan", caption: "Topic reference photograph of Roghni naan; not photographed at Andaaz Restaurant.", alt: "Fresh Roghni naan flatbreads stacked on a serving plate", source: "https://commons.wikimedia.org/wiki/File:Roghni_Naan.jpg", permission: "Wikimedia Commons CC BY-SA 4.0; attribution and share-alike terms apply." },
  { src: "assets/images/ref-jalebi.jpg", category: "food", title: "Live Courtyard Jalebi", caption: "Topic reference photograph of jalebi; not photographed at Andaaz Restaurant.", alt: "Fresh jalebi spirals on a green leaf", source: "https://commons.wikimedia.org/wiki/File:Jalebi.jpg", permission: "Wikimedia Commons CC BY-SA 2.0; attribution and share-alike terms apply." },
  { src: "assets/images/ref-shahi-tukra.jpg", category: "food", title: "Royal Shahi Tukra", caption: "Topic reference photograph of shahi tukda; not photographed at Andaaz Restaurant.", alt: "Royal shahi tukda dessert with creamy rabri and red garnish", source: "https://commons.wikimedia.org/wiki/File:Shahi_Tukda_-_Dessert_of_India.jpg", permission: "Wikimedia Commons CC BY-SA 4.0; attribution and share-alike terms apply." },
  { src: "assets/images/peshawar-kehwa.jpg", category: "drinks", title: "Traditional Peshawar Kehwa", caption: "Green tea with cardamom pods served in hand-hammered brass kettles." },
  { src: "assets/images/ref-rabri-lassi.jpg", category: "drinks", title: "Chilled Rabri Lassi", caption: "Topic reference photograph of rabri lassi; not photographed at Andaaz Restaurant.", alt: "Rabri lassi served in decorated glasses with rabri garnish", source: "https://commons.wikimedia.org/wiki/File:Rabidi_lasi.jpg", permission: "Wikimedia Commons CC BY-SA 3.0; attribution and share-alike terms apply." }
];

function initGalleryPage() {
  const galleryGrid = document.getElementById('gallery-grid');
  if (!galleryGrid) return;

  state.filteredGalleryImages = [...GALLERY_DATA];
  renderGallery();

  const filterContainer = document.getElementById('gallery-filters');
  if (filterContainer) {
    filterContainer.querySelectorAll('button').forEach(btn => {
      btn.addEventListener('click', () => {
        state.galleryFilter = btn.dataset.filter;
          filterContainer.querySelectorAll('button').forEach(b => {
          b.className = (b.dataset.filter === state.galleryFilter)
            ? "px-4 py-2.5 rounded-full bg-[#F7C873] text-[#10101A] text-xs font-semibold uppercase tracking-[0.12em] whitespace-nowrap"
            : "px-4 py-2.5 rounded-full border border-white/20 bg-white/5 text-[#D8CABB] text-xs uppercase tracking-[0.12em] hover:border-[#F7C873] hover:text-[#F7C873] whitespace-nowrap";
        });
        if (state.galleryFilter === 'all') {
          state.filteredGalleryImages = [...GALLERY_DATA];
        } else {
          state.filteredGalleryImages = GALLERY_DATA.filter(g => g.category === state.galleryFilter);
        }
        renderGallery();
      });
    });
  }

  initLightbox();
}

function renderGallery() {
  const galleryGrid = document.getElementById('gallery-grid');
  if (!galleryGrid) return;

  galleryGrid.innerHTML = state.filteredGalleryImages.map((img, idx) => `
    <div data-gallery-index="${idx}" class="gallery-item break-inside-avoid mb-6 group cursor-pointer relative overflow-hidden bg-white/10 backdrop-blur-xl rounded-3xl border border-white/15 hover:border-[#F7C873] transition-all duration-300 hover:-translate-y-1">
      <div class="overflow-hidden bg-slate-100">
        <img 
          src="${img.src}" 
          alt="${img.alt || `${img.title} reference photograph`}"
          width="600"
          height="400"
          loading="lazy"
          onerror="this.onerror=null;this.src='assets/images/food-placeholder.svg';"
          class="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 bg-slate-100"
        />
      </div>
      <div class="p-4 bg-transparent">
        <span class="text-[10px] uppercase tracking-widest font-semibold text-[#F7C873]">${img.category}</span>
        <h3 class="text-lg font-serif font-semibold text-[#FFF4E5] mt-0.5">${img.title}</h3>
        <p class="text-xs text-[#AFA397] mt-1 leading-relaxed">${img.caption}</p>
      </div>
    </div>
  `).join('');

  galleryGrid.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
      const idx = parseInt(item.dataset.galleryIndex, 10);
      openLightbox(idx);
    });
  });
}

function initLightbox() {
  const lightbox = document.getElementById('gallery-lightbox');
  if (!lightbox) return;

  const closeBtn = document.getElementById('close-lightbox');
  const prevBtn = document.getElementById('prev-lightbox');
  const nextBtn = document.getElementById('next-lightbox');
  const backdrop = lightbox.querySelector('.lightbox-backdrop');

  const closeLb = () => {
    lightbox.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  };

  if (closeBtn) closeBtn.addEventListener('click', closeLb);
  if (backdrop) backdrop.addEventListener('click', closeLb);

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      state.activeLightboxIndex = (state.activeLightboxIndex - 1 + state.filteredGalleryImages.length) % state.filteredGalleryImages.length;
      updateLightboxContent();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      state.activeLightboxIndex = (state.activeLightboxIndex + 1) % state.filteredGalleryImages.length;
      updateLightboxContent();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('hidden')) {
      if (e.key === 'Escape') closeLb();
      if (e.key === 'ArrowLeft') prevBtn && prevBtn.click();
      if (e.key === 'ArrowRight') nextBtn && nextBtn.click();
    }
  });
}

function openLightbox(index) {
  state.activeLightboxIndex = index;
  updateLightboxContent();
  const lightbox = document.getElementById('gallery-lightbox');
  if (lightbox) {
    lightbox.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
  }
}

function updateLightboxContent() {
  const item = state.filteredGalleryImages[state.activeLightboxIndex];
  if (!item) return;

  const lbImg = document.getElementById('lightbox-img');
  const lbTitle = document.getElementById('lightbox-title');
  const lbCaption = document.getElementById('lightbox-caption');

  if (lbImg) {
    lbImg.src = item.src;
    lbImg.alt = item.title;
  }
  if (lbTitle) lbTitle.textContent = item.title;
  if (lbCaption) lbCaption.textContent = item.caption;
}

/* -------------------------------------------------------------
 * 8. Contact Form Logic
 * ------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('contact-inquiry-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('contact-name').value.trim();
    const email = document.getElementById('contact-email').value.trim();
    const phone = document.getElementById('contact-phone').value.trim();
    const subject = document.getElementById('contact-subject').value;
    const message = document.getElementById('contact-message').value.trim();

    if (!name || !email || !message) {
      alert('Please complete all required fields.');
      return;
    }

    const msgLines = [
      " Salam Andaaz Restaurant, general website inquiry:",
      "",
      `*Name*: ${name}`,
      `*Email*: ${email}`,
      `*Phone*: ${phone || 'N/A'}`,
      `*Subject*: ${subject}`,
      `*Message*: ${message}`
    ];

    const waUrl = `https://wa.me/923000263229?text=${encodeURIComponent(msgLines.join("\n"))}`;
    
    alert('Thank you for contacting Andaaz Restaurant. Your inquiry message draft is ready to send on WhatsApp.');
    window.open(waUrl, '_blank');
    form.reset();
  });
}

/* -------------------------------------------------------------
 * 9. Accessibility Enhancements
 * ------------------------------------------------------------- */
function initAccessibility() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    document.querySelectorAll('*').forEach(el => {
      el.style.animationDuration = '0.001ms';
      el.style.transitionDuration = '0.001ms';
    });
  }
}
