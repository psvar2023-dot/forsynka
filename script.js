const products = [
  { name: 'Форсунка 3411753/3095040', category: 'Распылитель 3095043', price: 'от 2 200 ₽' },
  { name: 'Форсунка 3411754', category: 'Распылитель 3095729', price: 'от 2 200 ₽' },
  { name: 'Форсунка 3411756', category: 'Распылитель 3609925', price: 'от 2 200 ₽' },
  { name: 'Форсунка 3411764', category: 'Распылитель 3088175', price: 'от 2 200 ₽' },
  { name: 'Форсунка 3411765', category: 'Распылитель 3411690', price: 'от 2 200 ₽' },
  { name: 'Форсунка 3411766', category: 'Распылитель 3411694', price: 'от 2 200 ₽' },
  { name: 'Форсунка 3411767', category: 'Распылитель 3411388', price: 'от 2 200 ₽' },
  { name: 'Форсунка 4026222', category: 'Распылитель 4026225', price: 'от 2 200 ₽' },
  { name: 'Форсунка 4061851', category: 'Распылитель 4061854', price: 'от 2 200 ₽' },
  { name: 'Форсунка 4903472', category: 'Распылитель 4903475', price: 'от 2 200 ₽' },
  { name: 'Форсунка 4903319', category: 'Распылитель 4903322', price: 'от 2 200 ₽' },
  { name: 'Форсунка 4928171', category: 'Распылитель 4928174', price: 'от 2 200 ₽' },
  { name: 'Форсунка 3652542', category: 'Распылитель 3076071', price: 'от 2 200 ₽' },
  { name: '3060001', category: 'Injector Repair Kit', price: '2 100 ₽' },
  { name: 'M11/N14', category: 'External O-Ring Kit', price: '0 ₽' },
  { name: '26124', category: 'Installation Seal Kit', price: '450 ₽' },
  { name: '26129', category: 'Injector Repair Kit', price: '1 300 ₽' },
  { name: '3076256', category: 'Wiring Harness', price: '1 300 ₽' },
  { name: 'ISXINJ', category: 'ISX external O-ring Kit', price: '300 ₽' },
  { name: '3066736', category: 'Spacer injector spring', price: '1 100 ₽' },
  { name: '3066738', category: 'Spring', price: '210 ₽' },
  { name: '3067426', category: 'Retainer', price: '250 ₽' },
  { name: 'O-ring', category: 'Все резинки', price: '290 ₽' },
  { name: '3071967', category: 'Screen filter', price: '300 ₽' },
  { name: '3411711', category: 'Barrel&Plunger Metal', price: 'от 2 300 ₽' },
  {
    name: '3411711',
    category: 'Barrel&Plunger Metal Ceramic (с учётом возврата плунжера)',
    price: '2 600 ₽'
  },
  { name: '3034407', category: 'Poppet Control Valve', price: '5 900 ₽' },
  { name: '3072450', category: 'Barrel&Plunger (female)', price: 'от 2 300 ₽' }
];

const catalogGrid = document.getElementById('catalog-grid');
const catalogTableBody = document.getElementById('catalog-table-body');
const searchInput = document.getElementById('catalog-search');

function renderCatalog(items) {
  if (catalogTableBody) {
    catalogTableBody.innerHTML = items
      .map(
        (item) => `
          <tr>
            <td>${item.name}</td>
            <td>${item.category}</td>
            <td>${item.price}</td>
          </tr>
        `
      )
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
