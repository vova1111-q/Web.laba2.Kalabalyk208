document.addEventListener('DOMContentLoaded', () => {
  const products = [
    {
      id: 1,
      name: 'Балі Resort',
      type: 'Тури',
      price: 18900,
      discount: 35,
      image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Пляжний відпочинок, океан, вілли та найкращі локації для релаксу.'
    },
    {
      id: 2,
      name: 'Карпатський WeekEnd',
      type: 'Україна',
      price: 2700,
      discount: 15,
      image: 'https://plus.unsplash.com/premium_photo-1673618783715-b12ce989b946?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Активний відпочинок у горах, SPA та затишні котеджі.'
    },
    {
      id: 3,
      name: 'Прага Classic',
      type: 'Європа',
      price: 11500,
      discount: 20,
      image: 'https://images.unsplash.com/photo-1600623471616-8c1966c91ff6?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Місто з історією, музеями та атмосферними прогулянками.'
    },
    {
      id: 4,
      name: 'Лісабон City Tour',
      type: 'Європа',
      price: 14900,
      discount: 10,
      image: 'https://images.unsplash.com/photo-1675935123206-dacc60f43d59?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Яскраве місто біля океану з чудовою архітектурою.'
    },
    {
      id: 5,
      name: 'Одеса',
      type: 'Україна',
      price: 4200,
      discount: 18,
      image: 'https://images.unsplash.com/photo-1558003733-5133da3a6f24?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Море, набережна, ресторани та літня атмосфера відпочинку.'
    },
    {
      id: 6,
      name: 'Туреччина All Inclusive',
      type: 'Тури',
      price: 22300,
      discount: 27,
      image: 'https://images.unsplash.com/photo-1730196568851-382fa149eaa3?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Готелі з харчуванням, басейнами та сімейним сервісом.'
    },

    {
      id: 7,
      name: 'Рим Weekend',
      type: 'Європа',
      price: 17600,
      discount: 22,
      image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=900&q=80',
      description: 'Класика Європи, історія, кухня та неймовірні маршрути.'
    },
    {
      id: 8,
      name: 'Японія Dream',
      type: 'Азія',
      price: 48900,
      discount: 30,
      image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=900&q=80',
      description: 'Неймовірна культура, сучасні міста та чудова кухня.'
    },
    {
      id: 9,
      name: 'Стамбул Mix',
      type: 'Азія',
      price: 13900,
      discount: 14,
      image: 'https://images.unsplash.com/photo-1621165263528-1e3e07db1afe?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Місто, де поєднуються Європа й Азія.'
    },
    {
      id: 10,
      name: 'Буковель Ski',
      type: 'Україна',
      price: 5900,
      discount: 16,
      image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Гірськолижний відпочинок, підйомники та активні пригоди.'
    },
    {
      id: 11,
      name: 'Париж Romantic',
      type: 'Європа',
      price: 19800,
      discount: 25,
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=900&q=80',
      description: 'Романтичні вулиці, музеї та вечірні прогулянки.'
    }
  ];

  const newsData = [
    {
      date: '2026-01-10',
      title: 'Запуск зимових маршрутів',
      status: 'normal',
      body: 'Додано нові напрямки для зимового відпочинку: гірськолижні тури, SPA-програми та сімейні пакети.'
    },
    {
      date: '2026-02-04',
      title: 'Оновлено систему бронювання',
      status: 'important',
      body: 'Ми покращили швидкість оформлення заявок, додали зручні фільтри та нову панель вибору пропозицій.'
    },
    {
      date: '2026-03-18',
      title: 'Термінова акція: -30% на раннє бронювання',
      status: 'critical',
      body: 'Найвигідніша пропозиція сезону для популярних напрямків діє обмежений час.'
    }
  ].sort((a, b) => new Date(b.date) - new Date(a.date));

  const state = {
    activeType: 'Усі',
    sort: 'default',
    search: '',
    minPrice: '',
    maxPrice: '',
    visibleCount: 6,
    compactView: false,
    cart: [],
    adShown: false,
    adTimer: 5,
    adInterval: null,
    carouselIndex: 0
  };

  const els = {
    globalSearch: document.getElementById('globalSearch'),
    searchBtn: document.getElementById('searchBtn'),
    authBtn: document.getElementById('authBtn'),
    cartBtn: document.getElementById('cartBtn'),
    cartCount: document.getElementById('cartCount'),
    menuBtn: document.getElementById('menuBtn'),
    mobileNav: document.getElementById('mobileNav'),
    carouselTrack: document.getElementById('carouselTrack'),
    carouselDots: document.getElementById('carouselDots'),
    prevSlide: document.getElementById('prevSlide'),
    nextSlide: document.getElementById('nextSlide'),
    newsList: document.getElementById('newsList'),
    typeFilters: document.getElementById('typeFilters'),
    sortSelect: document.getElementById('sortSelect'),
    minPrice: document.getElementById('minPrice'),
    maxPrice: document.getElementById('maxPrice'),
    resetFilters: document.getElementById('resetFilters'),
    productGrid: document.getElementById('productGrid'),
    resultInfo: document.getElementById('resultInfo'),
    loadMoreBtn: document.getElementById('loadMoreBtn'),
    toggleView: document.getElementById('toggleView'),
    toTop: document.getElementById('toTop'),
    cartDrawer: document.getElementById('cartDrawer'),
    closeCart: document.getElementById('closeCart'),
    cartItems: document.getElementById('cartItems'),
    cartTotal: document.getElementById('cartTotal'),
    overlay: document.getElementById('overlay'),
    authModal: document.getElementById('authModal'),
    loginForm: document.getElementById('loginForm'),
    registerForm: document.getElementById('registerForm'),
    adModal: document.getElementById('adModal'),
    adClose: document.getElementById('adClose'),
    adTimer: document.getElementById('adTimer'),
    subscribeBar: document.getElementById('subscribeBar'),
    acceptSubscribe: document.getElementById('acceptSubscribe'),
    declineSubscribe: document.getElementById('declineSubscribe'),
    toast: document.getElementById('toast')
  };

  function formatUAH(value) {
    return `${value.toLocaleString('uk-UA')} грн`;
  }

  function showToast(message) {
    els.toast.textContent = message;
    els.toast.classList.remove('hidden');
    clearTimeout(showToast.timer);
    showToast.timer = setTimeout(() => els.toast.classList.add('hidden'), 2200);
  }

  function openOverlay() {
    els.overlay.classList.remove('hidden');
  }

  function closeOverlay() {
    els.overlay.classList.add('hidden');
    els.authModal.classList.add('hidden');
    els.adModal.classList.add('hidden');
  }

  function openAuth() {
    openOverlay();
    els.authModal.classList.remove('hidden');
  }

  function openCart() {
    els.cartDrawer.classList.add('open');
  }

  function closeCart() {
    els.cartDrawer.classList.remove('open');
  }

  function renderNews() {
    els.newsList.innerHTML = newsData.map(item => `
      <details class="news-item">
        <summary class="news-summary">
          <div class="news-title">
            <strong>${item.title}</strong>
            <small>${new Date(item.date).toLocaleDateString('uk-UA')}</small>
          </div>
          <span class="status ${item.status}">
            ${item.status === 'normal' ? 'Звичайна' : item.status === 'important' ? 'Важлива' : 'Дуже важлива'}
          </span>
        </summary>
        <div class="news-body">${item.body}</div>
      </details>
    `).join('');
  }

  function buildTypeFilters() {
    const types = ['Усі', ...new Set(products.map(p => p.type))];
    els.typeFilters.innerHTML = types.map(type => `
      <button class="filter-tab ${type === state.activeType ? 'active' : ''}" data-type="${type}" type="button">
        ${type}
      </button>
    `).join('');
  }

  function applyFilters(list) {
    let filtered = [...list];

    if (state.activeType !== 'Усі') {
      filtered = filtered.filter(item => item.type === state.activeType);
    }

    if (state.search.trim()) {
      const q = state.search.trim().toLowerCase();
      filtered = filtered.filter(item =>
        item.name.toLowerCase().includes(q) ||
        item.type.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q)
      );
    }

    if (state.minPrice !== '') {
      filtered = filtered.filter(item => item.price >= Number(state.minPrice));
    }

    if (state.maxPrice !== '') {
      filtered = filtered.filter(item => item.price <= Number(state.maxPrice));
    }

    switch (state.sort) {
      case 'name-asc':
        filtered.sort((a, b) => a.name.localeCompare(b.name, 'uk'));
        break;
      case 'name-desc':
        filtered.sort((a, b) => b.name.localeCompare(a.name, 'uk'));
        break;
      case 'price-asc':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        filtered.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    return filtered;
  }

  function renderProducts() {
    els.productGrid.classList.toggle('compact', state.compactView);

    const filtered = applyFilters(products);
    const visible = filtered.slice(0, state.visibleCount);

    els.resultInfo.textContent = `Показано ${Math.min(state.visibleCount, filtered.length)} з ${filtered.length} товарів`;
    els.loadMoreBtn.style.display = state.visibleCount < filtered.length ? 'inline-flex' : 'none';

    els.productGrid.innerHTML = visible.map(item => `
      <article class="product-card">
        <div class="product-image">
          <img src="${item.image}" alt="${item.name}" loading="lazy" />
          <span class="discount">-${item.discount}%</span>
        </div>
        <div class="product-content">
          <div class="product-top">
            <div>
              <h3>${item.name}</h3>
              <div class="product-type">${item.type}</div>
            </div>
            <div class="price">${formatUAH(item.price)}</div>
          </div>

          <div class="product-actions">
            <button class="primary add-cart" data-id="${item.id}" type="button">У кошик</button>
          </div>

          <details>
            <summary>Опис</summary>
            <p>${item.description}</p>
          </details>
        </div>
      </article>
    `).join('');

    document.querySelectorAll('.add-cart').forEach(btn => {
      btn.addEventListener('click', () => addToCart(Number(btn.dataset.id)));
    });

    updateCartBadge();
  }

  function addToCart(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;

    const existing = state.cart.find(item => item.id === id);
    if (existing) {
      existing.qty += 1;
    } else {
      state.cart.push({ ...product, qty: 1 });
    }

    renderCart();
    showToast(`${product.name} додано в кошик`);
  }

  function updateCartBadge() {
    const count = state.cart.reduce((sum, item) => sum + item.qty, 0);
    els.cartCount.textContent = count;
  }

  function renderCart() {
    updateCartBadge();

    if (!state.cart.length) {
      els.cartItems.innerHTML = '<p style="color:#6b7280">Кошик порожній.</p>';
      els.cartTotal.textContent = formatUAH(0);
      return;
    }

    const total = state.cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    els.cartTotal.textContent = formatUAH(total);

    els.cartItems.innerHTML = state.cart.map(item => `
      <div class="cart-item">
        <div>
          <strong>${item.name}</strong><br />
          <small>${item.qty} × ${formatUAH(item.price)}</small>
        </div>
        <button class="secondary remove-item" data-id="${item.id}" type="button">✕</button>
      </div>
    `).join('');

    document.querySelectorAll('.remove-item').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = Number(btn.dataset.id);
        state.cart = state.cart.filter(item => item.id !== id);
        renderCart();
      });
    });
  }

 function updateDots() {
    const slides = document.querySelectorAll('.slide');
    els.carouselDots.innerHTML = Array.from(slides)
      .map((_, i) => `<button class="dot ${i === state.carouselIndex ? 'active' : ''}" data-slide="${i}" aria-label="Слайд ${i + 1}"></button>`)
      .join('');

    document.querySelectorAll('.dot').forEach(dot => {
      dot.addEventListener('click', () => {
        goToSlide(Number(dot.dataset.slide));
      });
    });
  }

function goToSlide(index) {
    const slides = document.querySelectorAll('.slide');
    state.carouselIndex = (index + slides.length) % slides.length;
    
    slides.forEach(slide => {
      slide.style.transform = `translateX(-${state.carouselIndex * 100}%)`;
    });
    
    updateDots();
  }

  function nextSlide() {
    goToSlide(state.carouselIndex + 1);
  }

  function prevSlide() {
    goToSlide(state.carouselIndex - 1);
  }

function startCarousel() {
    updateDots();
    
    document.querySelectorAll('.slide').forEach(slide => {
      slide.style.transition = 'transform .55s ease';
    });
    
  }

  function showSubscribeBar() {
    const accepted = localStorage.getItem('notifyAccepted');
    if (accepted === 'yes') return;
    els.subscribeBar.classList.remove('hidden');
  }

  function hideSubscribeBar() {
    els.subscribeBar.classList.add('hidden');
  }

  function showAd() {
    if (state.adShown) return;
    state.adShown = true;

    openOverlay();
    els.adModal.classList.remove('hidden');

    clearInterval(state.adInterval);
    state.adTimer = 5;
    els.adTimer.textContent = state.adTimer;
    els.adClose.disabled = true;
    els.adClose.textContent = `Закрити (${state.adTimer})`;

    state.adInterval = setInterval(() => {
      state.adTimer -= 1;
      els.adTimer.textContent = state.adTimer;
      els.adClose.textContent = state.adTimer > 0 ? `Закрити (${state.adTimer})` : 'Закрити';

      if (state.adTimer <= 0) {
        clearInterval(state.adInterval);
        els.adClose.disabled = false;
      }
    }, 1000);
  }

  function initAdTrigger() {
    const trigger = () => {
      const showAfterTime = setTimeout(() => {
        showAd();
      }, 15000);

      const onScroll = () => {
        const scrolled = window.scrollY;
        const adFloat = document.getElementById('scrollAd');

        if (scrolled > 650) {
          if (!document.getElementById('scrollAd')) {
            const box = document.createElement('div');
            box.id = 'scrollAd';
            box.className = 'ad-float show';
            box.innerHTML = `
              <strong>Реклама</strong>
              <small>Знижка -20% на літні тури.</small>
              <button class="primary" type="button">Деталі</button>
            `;
            document.body.appendChild(box);
            box.querySelector('button').addEventListener('click', showAd);
          } else {
            adFloat.classList.add('show');
          }
        }

        if (scrolled > 1600 && document.getElementById('scrollAd')) {
          document.getElementById('scrollAd').classList.add('bottom-right');
        }

        if (scrolled > window.innerHeight * 0.66) {
          els.toTop.classList.add('show');
        } else {
          els.toTop.classList.remove('show');
        }
      };

      window.addEventListener('scroll', onScroll);
      onScroll();

      window.addEventListener('beforeunload', () => clearTimeout(showAfterTime));
    };

    trigger();
  }

  function syncFilterUI() {
    document.querySelectorAll('.filter-tab').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.type === state.activeType);
    });
  }

  function setSearch(value) {
    state.search = value;
    state.visibleCount = 6;
    renderProducts();
  }

  // Events
  els.authBtn.addEventListener('click', openAuth);
  els.cartBtn.addEventListener('click', openCart);
  els.closeCart.addEventListener('click', closeCart);

  els.menuBtn.addEventListener('click', () => {
    els.mobileNav.classList.toggle('open');
  });

  els.overlay.addEventListener('click', () => {
    closeOverlay();
    closeCart();
  });

  document.querySelectorAll('[data-close]').forEach(btn => {
    btn.addEventListener('click', closeOverlay);
  });

  document.querySelectorAll('.tab').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      btn.classList.add('active');

      const mode = btn.dataset.authTab;
      els.loginForm.classList.toggle('hidden', mode !== 'login');
      els.registerForm.classList.toggle('hidden', mode !== 'register');
    });
  });

  els.loginForm.addEventListener('submit', e => {
    e.preventDefault();
    showToast('Вхід виконано');
    closeOverlay();
  });

  els.registerForm.addEventListener('submit', e => {
    e.preventDefault();
    showToast('Реєстрацію виконано');
    closeOverlay();
  });

  els.searchBtn.addEventListener('click', () => setSearch(els.globalSearch.value));
  els.globalSearch.addEventListener('input', () => setSearch(els.globalSearch.value));

  els.typeFilters.addEventListener('click', e => {
    const btn = e.target.closest('.filter-tab');
    if (!btn) return;
    state.activeType = btn.dataset.type;
    state.visibleCount = 6;
    syncFilterUI();
    renderProducts();
  });

  els.sortSelect.addEventListener('change', () => {
    state.sort = els.sortSelect.value;
    state.visibleCount = 6;
    renderProducts();
  });

  function readRange() {
    state.minPrice = els.minPrice.value;
    state.maxPrice = els.maxPrice.value;
    state.visibleCount = 6;
    renderProducts();
  }

  els.minPrice.addEventListener('input', readRange);
  els.maxPrice.addEventListener('input', readRange);

  els.resetFilters.addEventListener('click', () => {
    state.activeType = 'Усі';
    state.sort = 'default';
    state.search = '';
    state.minPrice = '';
    state.maxPrice = '';
    state.visibleCount = 6;

    els.globalSearch.value = '';
    els.sortSelect.value = 'default';
    els.minPrice.value = '';
    els.maxPrice.value = '';

    syncFilterUI();
    renderProducts();
  });

  els.loadMoreBtn.addEventListener('click', () => {
    state.visibleCount += 4;
    renderProducts();
  });

  els.toggleView.addEventListener('click', () => {
    state.compactView = !state.compactView;
    els.toggleView.textContent = state.compactView ? 'Звичайний вигляд' : 'Щільний вигляд';
    renderProducts();
  });

  els.prevSlide.addEventListener('click', prevSlide);
  els.nextSlide.addEventListener('click', nextSlide);

  els.toTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  els.acceptSubscribe.addEventListener('click', () => {
    localStorage.setItem('notifyAccepted', 'yes');
    hideSubscribeBar();
    showToast('Дякуємо за приєднання!');
  });

  els.declineSubscribe.addEventListener('click', () => {
    hideSubscribeBar();
  });

  els.adClose.addEventListener('click', () => {
    if (!els.adClose.disabled) {
      closeOverlay();
    }
  });

  // Init
  buildTypeFilters();
  renderNews();
  renderProducts();
  renderCart();
  startCarousel();
  showSubscribeBar();
  initAdTrigger();
});