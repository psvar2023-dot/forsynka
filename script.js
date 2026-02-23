const products = [
  { name: 'Cummins 3411753/3095040', category: 'Распылитель 3095043', price: 'от 2 200 ₽' },
  { name: 'Cummins 3411754', category: 'Распылитель 3095729', price: 'от 2 200 ₽' },
  { name: 'Cummins 3411756', category: 'Распылитель 3609925', price: 'от 2 200 ₽' },
  { name: 'Cummins 3411764', category: 'Распылитель 3088175', price: 'от 2 200 ₽' },
  { name: 'Cummins 3411765', category: 'Распылитель 3411690', price: 'от 2 200 ₽' },
  { name: 'Cummins 3411766', category: 'Распылитель 3411694', price: 'от 2 200 ₽' },
  { name: 'Cummins 3411767', category: 'Распылитель 3411388', price: 'от 2 200 ₽' },
  { name: 'Cummins 4026222', category: 'Распылитель 4026225', price: 'от 2 200 ₽' },
  { name: 'Cummins 4061851', category: 'Распылитель 4061854', price: 'от 2 200 ₽' },
  { name: 'Cummins 4903472', category: 'Распылитель 4903475', price: 'от 2 200 ₽' },
  { name: 'Cummins 4903319', category: 'Распылитель 4903322', price: 'от 2 200 ₽' },
  { name: 'Cummins 4928171', category: 'Распылитель 4928174', price: 'от 2 200 ₽' },
  { name: 'Cummins 3652542', category: 'Распылитель 3076071', price: 'от 2 200 ₽' },
  { name: 'Cummins 3060001', category: 'Injector Repair Kit', price: '2 100 ₽' },
  { name: 'Cummins M11/N14', category: 'External O-Ring Kit', price: '0 ₽' },
  { name: 'Cummins 26124', category: 'Installation Seal Kit', price: '450 ₽' },
  { name: 'Cummins 26129', category: 'Injector Repair Kit', price: '1 300 ₽' },
  { name: 'Cummins 3076256', category: 'Wiring Harness', price: '1 300 ₽' },
  { name: 'Cummins ISXINJ', category: 'ISX external O-ring Kit', price: '300 ₽' },
  { name: 'Cummins 3066736', category: 'Spacer injector spring', price: '1 100 ₽' },
  { name: 'Cummins 3066738', category: 'Spring', price: '210 ₽' },
  { name: 'Cummins 3067426', category: 'Retainer', price: '250 ₽' },
  { name: 'Cummins O-ring', category: 'Все резинки', price: '290 ₽' },
  { name: 'Cummins 3071967', category: 'Screen filter', price: '300 ₽' },
  { name: 'Cummins 3411711', category: 'Barrel&Plunger Metal', price: 'от 2 300 ₽' },
  { name: 'Cummins 3411711', category: 'Barrel&Plunger Metal Ceramic', price: '2 600 ₽' },
  { name: 'Cummins 3034407', category: 'Poppet Control Valve', price: '5 900 ₽' },
  { name: 'Cummins 3072450', category: 'Barrel&Plunger (female)', price: 'от 2 300 ₽' },

  { name: 'Detroit 5234935', category: 'Распылитель 4991753-C1', price: 'от 2 200 ₽' },
  { name: 'Detroit 5235575', category: 'Распылитель 4991752-B5', price: 'от 2 200 ₽' },
  { name: 'Detroit 5235580', category: 'Распылитель 4991751-A1', price: 'от 2 200 ₽' },
  { name: 'Detroit 5236977', category: 'Распылитель 4991752-B3', price: 'от 2 200 ₽' },
  { name: 'Detroit 5237045', category: 'Распылитель 4991752-B4', price: 'от 2 200 ₽' },
  { name: 'Detroit 5237820', category: 'Распылитель 4991753-C1A', price: 'от 2 200 ₽' },
  { name: 'Detroit 414703002', category: 'Распылитель 0433175413', price: '3 300 ₽' },
  { name: 'Detroit 414703003', category: 'Распылитель 0433175414', price: '3 300 ₽' },
  { name: 'Detroit 26210', category: 'External Seal Kit', price: '230 ₽' },
  { name: 'Detroit 26209', category: 'Internal Injector Seal Repair Kit', price: '230 ₽' },
  { name: 'Detroit 5230001', category: 'Injector Repair Kit', price: '1 600 ₽' },
  { name: 'Detroit 23537111', category: 'External Injector Seal Kit N3', price: '620 ₽' },
  { name: 'Detroit 4991459', category: 'Control Valve', price: '650 ₽' },
  { name: 'Detroit 4991464', category: 'Spring', price: '210 ₽' },
  { name: 'Detroit 4991466', category: 'Retainer', price: '250 ₽' },
  { name: 'Detroit 4991465', category: 'Spacer', price: '1 100 ₽' },


  { name: 'Caterpillar 10R0781/198-6605/222-5926/222-5966/197-7107/199-6065', category: 'распылитель 41036/32', price: '3 100 ₽' },
  { name: 'Caterpillar 10R0782/177-4754/178-0198/178-0199/205-1285', category: 'распылитель 41046/32', price: '3 100 ₽' },
  { name: 'Caterpillar Piston', category: 'Piston', price: '850 ₽' },
  { name: 'Caterpillar Plunger', category: 'Plunger', price: '2 600 ₽' },
  { name: 'Caterpillar 11956', category: 'Check Valve', price: '2 200 ₽' },
  { name: 'Caterpillar 0530', category: 'Internal Seal Kit', price: '300 ₽' },
  { name: 'Caterpillar 2421539', category: 'External Seal Kit', price: '1 150 ₽' },
  { name: 'Caterpillar 183074C92', category: 'External Seal Kit', price: '650 ₽' },
  { name: 'Caterpillar 10R2781/10R0957/0R9257/211-3023/191-3003/140-8993', category: 'распылитель C15/3406', price: 'от 4 400 ₽' },
  { name: 'Caterpillar 10R2780/0R4668/0R9258/211-3024/10R0959/117-1146', category: 'распылитель C15/3406', price: 'от 4 400 ₽' },
  { name: 'Caterpillar 10R2782/118-7929/117-0481/10R0956/211-3022/0R9256', category: 'распылитель C15/3406', price: 'от 4 400 ₽' },
  { name: 'Caterpillar 10R1273/10R1000/249-0708/249-0709/239-4909/232-1199', category: 'распылитель C15/3406', price: 'от 4 400 ₽' },
  { name: 'Caterpillar 10R0963/212-3463/194-5083/10R9235/0R8773/0R4897', category: 'распылитель C12/3196', price: 'от 4 400 ₽' },
  { name: 'Caterpillar 249-0708/10R2977', category: 'распылитель C12/C13', price: 'от 4 400 ₽' },
  { name: 'Caterpillar 2123467/10R1259', category: 'распылитель C10', price: 'от 4 400 ₽' },
  { name: 'Caterpillar Solenoid Kit', category: 'Solenoid Kit', price: '220 ₽' },
  { name: 'Caterpillar RTF26300', category: 'External Kit C15(3406)', price: '420 ₽' },
  { name: 'Caterpillar RTF26301', category: 'External Kit C12(3196)', price: '620 ₽' },

  { name: 'Volvo/Scania/Iveco 7135-588', category: 'Клапан Delphi E3', price: '10 100 ₽' },
  { name: 'Volvo/Scania/Iveco 7206-0379', category: 'Клапан Delphi E1', price: '7 600 ₽' },
  { name: 'Volvo/Scania/Iveco без номера', category: 'Пружина распылителя', price: '260 ₽' },
  {
    name: 'Volvo/Scania/Iveco без номера',
    category: 'Проставка пружины "грибок", деталь комплекта 7135-487',
    price: '120 ₽'
  },
  {
    name: 'Volvo/Scania/Iveco без номера',
    category: 'Проставка распылителя, деталь комплекта 7135-487',
    price: '410 ₽'
  },
  { name: 'Volvo/Scania/Iveco без номера', category: 'Наружные уплотнения', price: '180 ₽' },
  { name: 'Volvo/Scania/Iveco 7135-486', category: 'Клапан Delphi', price: '9 800 ₽' },
  { name: 'Volvo/Scania/Iveco без номера', category: 'Пружина распылителя', price: '160 ₽' },
  { name: 'Volvo/Scania/Iveco 7135-488', category: 'Ремкомплект (аналог)', price: '700 ₽' },
  {
    name: 'Volvo/Scania/Iveco без номера',
    category: 'Проставка пружины "грибок", деталь комплекта 7135-487',
    price: '120 ₽'
  },
  {
    name: 'Volvo/Scania/Iveco без номера',
    category: 'Проставка распылителя, деталь комплекта 7135-487',
    price: '410 ₽'
  },
  { name: 'Volvo/Scania/Iveco без номера', category: 'Наружные уплотнения 4 резинки', price: '180 ₽' },
  { name: 'Volvo/Scania/Iveco 2434514040', category: 'Пружина распылителя (аналог)', price: '150 ₽' },
  { name: 'Volvo/Scania/Iveco F00ZB20001', category: 'Проставка пружины "грибок" (аналог)', price: '80 ₽' },
  { name: 'Volvo/Scania/Iveco F018B06804', category: 'Проставка распылителя (аналог)', price: '600 ₽' },
  { name: 'Volvo/Scania/Iveco F00HN37927', category: 'Внутренний р/к', price: '110 ₽' },
  { name: 'Volvo/Scania/Iveco F00HN37928', category: 'Внутренний р/к (аналог)', price: '190 ₽' },
  { name: 'Volvo/Scania/Iveco F00VX99999', category: 'Наружные уплотнения Scania (аналог)', price: '210 ₽' },
  { name: 'Volvo/Scania/Iveco F00VX99995', category: 'Наружные уплотнения Iveco (аналог)', price: '200 ₽' },
];

const catalogGrid = document.getElementById('catalog-grid');
const catalogTableBody = document.getElementById('catalog-table-body');
const searchInput = document.getElementById('catalog-search');
const collapsedGroups = {};

function getBrandAndArticle(item) {
  const sourceName = item.name || '';
  const [parsedBrand, ...rest] = sourceName.split(' ');

  return {
    brand: item.brand || parsedBrand || 'Без бренда',
    article: item.article || item.code || rest.join(' ') || sourceName || 'без номера'
  };
}

function toggleCatalogGroup(group) {
  collapsedGroups[group] = !collapsedGroups[group];

  const groupRows = document.querySelectorAll(`[data-group-row="${group}"]`);
  groupRows.forEach((row) => {
    row.hidden = collapsedGroups[group];
  });

  const button = document.querySelector(`[data-group-toggle="${group}"]`);
  if (button) {
    button.textContent = collapsedGroups[group] ? 'Развернуть' : 'Свернуть';
    button.setAttribute('aria-expanded', String(!collapsedGroups[group]));
  }
}

function renderCatalog(items) {
  if (catalogTableBody) {
    const grouped = items.reduce((acc, item) => {
      const parsed = getBrandAndArticle(item);
      const group = parsed.brand;
      if (!acc[group]) acc[group] = [];
      acc[group].push({ ...item, article: parsed.article });
      return acc;
    }, {});

    catalogTableBody.innerHTML = Object.entries(grouped)
      .map(([group, rows]) => {
        const isCollapsed = Boolean(collapsedGroups[group]);
        const bodyRows = rows
          .map(
            (item) => `
              <tr data-group-row="${group}" ${isCollapsed ? 'hidden' : ''}>
                <td>${item.article}</td>
                <td>${item.category}</td>
                <td>${item.price}</td>
              </tr>
            `
          )
          .join('');

        return `
          <tr class="catalog-group-row" data-group-header="${group}">
            <td colspan="3">
              <div class="catalog-group-head">
                <span>${group}</span>
                <button
                  type="button"
                  class="catalog-toggle-btn"
                  data-group-toggle="${group}"
                  aria-expanded="${String(!isCollapsed)}"
                >
                  ${isCollapsed ? 'Развернуть' : 'Свернуть'}
                </button>
              </div>
            </td>
          </tr>
          ${bodyRows}
        `;
      })
      .join('');

    const toggleButtons = catalogTableBody.querySelectorAll('[data-group-toggle]');
    toggleButtons.forEach((button) => {
      button.addEventListener('click', (event) => {
        event.stopPropagation();
        toggleCatalogGroup(button.dataset.groupToggle);
      });
    });

    const groupHeaders = catalogTableBody.querySelectorAll('[data-group-header]');
    groupHeaders.forEach((header) => {
      header.addEventListener('click', () => {
        toggleCatalogGroup(header.dataset.groupHeader);
      });
    });

    if (catalogGrid) catalogGrid.innerHTML = '';
    return;
  }

  if (!catalogGrid) return;

  catalogGrid.innerHTML = items
    .map(
      (item) => `
      <article class="product-card">
        <h3>${item.name}</h3>
        <p>${item.category}</p>
        <p class="price">${item.price}</p>
      </article>
    `
    )
    .join('');
}

const hasCatalog = Boolean(catalogTableBody || catalogGrid);
let catalogProducts = [...products];

function filterCatalog(query) {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return catalogProducts;

  return catalogProducts.filter((product) => {
    return (
      product.name.toLowerCase().includes(normalized) ||
      product.category.toLowerCase().includes(normalized) ||
      String(product.article || product.code || '').toLowerCase().includes(normalized)
    );
  });
}

searchInput?.addEventListener('input', (event) => {
  renderCatalog(filterCatalog(event.target.value));
});

async function loadCatalogFromSupabase() {
  if (!hasCatalog) return;

  const client =
    window.supabase &&
    window.SUPABASE_URL &&
    window.SUPABASE_ANON_KEY &&
    !window.SUPABASE_URL.includes('YOUR_PROJECT_REF') &&
    !window.SUPABASE_ANON_KEY.includes('YOUR_SUPABASE_ANON_KEY')
      ? window.supabase.createClient(window.SUPABASE_URL, window.SUPABASE_ANON_KEY)
      : null;

  if (!client) {
    renderCatalog(catalogProducts);
    return;
  }

  const productsTable = window.SUPABASE_PRODUCTS_TABLE || 'products';

  const { data, error } = await client
    .from(productsTable)
    .select('name, category, price, brand, code, article')
    .order('brand', { ascending: true })
    .order('name', { ascending: true });

  if (error || !Array.isArray(data) || data.length === 0) {
    renderCatalog(catalogProducts);
    return;
  }

  catalogProducts = data.map((item) => {
    const normalizedName =
      item.name ||
      [item.brand, item.code]
        .filter(Boolean)
        .join(' ')
        .trim() ||
      'Без названия';

    return {
      name: normalizedName,
      brand: item.brand || null,
      article: item.article || item.code || null,
      category: item.category || 'Без категории',
      price: item.price || 'По запросу'
    };
  });

  renderCatalog(filterCatalog(searchInput?.value || ''));
}

loadCatalogFromSupabase();

const openModalBtn = document.getElementById('btn-open-calc');
const closeModalBtn = document.getElementById('btn-close-calc');
const modalOverlay = document.getElementById('calc-modal-overlay');
const brandSelect = document.getElementById('calc-brand');
const qtyInput = document.getElementById('calc-qty');
const diagCheckbox = document.getElementById('calc-diag');
const urgentCheckbox = document.getElementById('calc-urgent');
const totalDisplay = document.getElementById('calc-total');
const submitBtn = document.getElementById('calc-submit');
const messageBox = document.getElementById('calc-message');

function openModal() {
  if (!modalOverlay) return;
  modalOverlay.style.display = 'flex';
  setTimeout(() => modalOverlay.classList.add('is-active'), 10);
  modalOverlay.setAttribute('aria-hidden', 'false');
  document.body.classList.add('calc-modal-open');
}

function closeModal() {
  if (!modalOverlay) return;
  modalOverlay.classList.remove('is-active');
  setTimeout(() => {
    modalOverlay.style.display = 'none';
    modalOverlay.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('calc-modal-open');
  }, 300);
}

function calculateTotal() {
  if (!brandSelect || !qtyInput || !totalDisplay) return;

  const basePrice = parseFloat(brandSelect.value);
  let qty = parseInt(qtyInput.value, 10);

  if (Number.isNaN(qty) || qty < 1) qty = 1;
  if (qty > 50) qty = 50;

  let total = basePrice * qty;

  if (diagCheckbox?.checked) total += 2000;
  if (urgentCheckbox?.checked) total *= 1.3;

  totalDisplay.textContent = Math.round(total).toLocaleString('ru-RU');
}

function validateQuantity() {
  if (!qtyInput) return;
  const qty = parseInt(qtyInput.value, 10);

  if (Number.isNaN(qty) || qty < 1) {
    qtyInput.value = '1';
  } else if (qty > 50) {
    qtyInput.value = '50';
  }

  calculateTotal();
}

openModalBtn?.addEventListener('click', openModal);
closeModalBtn?.addEventListener('click', closeModal);
modalOverlay?.addEventListener('click', (event) => {
  if (event.target === modalOverlay) closeModal();
});

brandSelect?.addEventListener('change', calculateTotal);
qtyInput?.addEventListener('input', calculateTotal);
qtyInput?.addEventListener('change', validateQuantity);
diagCheckbox?.addEventListener('change', calculateTotal);
urgentCheckbox?.addEventListener('change', calculateTotal);

function getSupabaseClient() {
  if (
    !window.supabase ||
    !window.SUPABASE_URL ||
    !window.SUPABASE_ANON_KEY ||
    window.SUPABASE_URL.includes('YOUR_PROJECT_REF') ||
    window.SUPABASE_ANON_KEY.includes('YOUR_SUPABASE_ANON_KEY')
  ) {
    return null;
  }

  return window.supabase.createClient(window.SUPABASE_URL, window.SUPABASE_ANON_KEY);
}

const supabaseClient = getSupabaseClient();

function showFormMessage(text, isError = false) {
  if (!messageBox) return;
  messageBox.textContent = text;
  messageBox.style.display = 'block';
  messageBox.style.background = isError ? '#fef2f2' : '#ecfdf3';
  messageBox.style.color = isError ? '#991b1b' : '#166534';
}

submitBtn?.addEventListener('click', async (event) => {
  event.preventDefault();

  if (!supabaseClient) {
    showFormMessage('⚠️ Подключите Supabase: заполните SUPABASE_URL и SUPABASE_ANON_KEY в supabase-config.js.', true);
    return;
  }

  if (!brandSelect || !qtyInput || !diagCheckbox || !urgentCheckbox || !totalDisplay) return;

  submitBtn.disabled = true;

  const requestPayload = {
    brand: brandSelect.options[brandSelect.selectedIndex]?.text || 'Не указан',
    quantity: parseInt(qtyInput.value, 10) || 1,
    diagnostics: Boolean(diagCheckbox.checked),
    urgent: Boolean(urgentCheckbox.checked),
    total: parseInt((totalDisplay.textContent || '0').replace(/\s+/g, ''), 10) || 0
  };

  const { error } = await supabaseClient.from('repair_requests').insert(requestPayload);

  if (error) {
    showFormMessage(`❌ Ошибка отправки: ${error.message}`, true);
    submitBtn.disabled = false;
    return;
  }

  showFormMessage('✅ Ваша заявка успешно отправлена!');

  setTimeout(() => {
    if (messageBox) messageBox.style.display = 'none';
    closeModal();
    submitBtn.disabled = false;
  }, 2500);
});

calculateTotal();
