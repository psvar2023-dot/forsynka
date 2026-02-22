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
  { name: 'Detroit 4991465', category: 'Spacer', price: '1 100 ₽' }
];

const catalogGrid = document.getElementById('catalog-grid');
const catalogTableBody = document.getElementById('catalog-table-body');
const searchInput = document.getElementById('catalog-search');

function getBrandAndCode(name) {
  const [brand, ...rest] = name.split(' ');
  return {
    brand,
    code: rest.join(' ') || name
  };
}

function renderCatalog(items) {
  if (catalogTableBody) {
    const grouped = items.reduce((acc, item) => {
      const parsed = getBrandAndCode(item.name);
      const group = parsed.brand;
      if (!acc[group]) acc[group] = [];
      acc[group].push({ ...item, code: parsed.code });
      return acc;
    }, {});

    catalogTableBody.innerHTML = Object.entries(grouped)
      .map(([group, rows]) => {
        const bodyRows = rows
          .map(
            (item) => `
              <tr>
                <td>${item.code}</td>
                <td>${item.category}</td>
                <td>${item.price}</td>
              </tr>
            `
          )
          .join('');

        return `
          <tr class="catalog-group-row">
            <td colspan="3">${group}</td>
          </tr>
          ${bodyRows}
        `;
      })
      .join('');

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

searchInput?.addEventListener('input', (event) => {
  const query = event.target.value.trim().toLowerCase();
  const filtered = products.filter((product) => {
    return (
      product.name.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query)
    );
  });
  renderCatalog(filtered);
});

renderCatalog(products);

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

submitBtn?.addEventListener('click', (event) => {
  event.preventDefault();
  if (messageBox) messageBox.style.display = 'block';

  setTimeout(() => {
    if (messageBox) messageBox.style.display = 'none';
    closeModal();
  }, 3000);
});

calculateTotal();
