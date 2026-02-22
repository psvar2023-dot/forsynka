(function () {
  const STORAGE_KEY = 'forsynka_cookie_settings_v1';

  const defaultSettings = {
    necessary: true,
    analytics: false,
    marketing: false,
    personalization: false,
    updatedAt: null
  };

  function readSettings() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return null;
      return { ...defaultSettings, ...JSON.parse(raw), necessary: true };
    } catch (error) {
      return null;
    }
  }

  function saveSettings(settings) {
    const payload = {
      ...defaultSettings,
      ...settings,
      necessary: true,
      updatedAt: new Date().toISOString()
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  }

  function closeBanner() {
    const banner = document.getElementById('cookie-banner');
    if (banner) banner.remove();
  }

  function closeModal() {
    const modal = document.getElementById('cookie-settings-modal');
    if (!modal) return;
    modal.classList.remove('is-active');
    document.body.classList.remove('cookie-modal-open');
  }

  function openModal() {
    const modal = document.getElementById('cookie-settings-modal');
    if (!modal) return;
    modal.classList.add('is-active');
    document.body.classList.add('cookie-modal-open');
  }

  function applyFormValues(settings) {
    const analytics = document.getElementById('cookie-analytics');
    const marketing = document.getElementById('cookie-marketing');
    const personalization = document.getElementById('cookie-personalization');

    if (analytics) analytics.checked = Boolean(settings.analytics);
    if (marketing) marketing.checked = Boolean(settings.marketing);
    if (personalization) personalization.checked = Boolean(settings.personalization);
  }

  function createUi() {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = `
      <div id="cookie-banner" class="cookie-banner" role="region" aria-label="Уведомление о cookies">
        <p>
          Мы используем cookies для корректной работы сайта, аналитики и персонализации.
          Вы можете принять все cookies или настроить категории.
        </p>
        <div class="cookie-actions">
          <button type="button" class="btn btn-primary" id="cookie-accept-all">Принять все</button>
          <button type="button" class="btn btn-ghost" id="cookie-open-settings">Настроить</button>
        </div>
      </div>

      <div id="cookie-settings-modal" class="cookie-settings-modal" aria-hidden="true">
        <div class="cookie-settings-card" role="dialog" aria-modal="true" aria-labelledby="cookie-settings-title">
          <button type="button" class="close-btn" id="cookie-close-settings" aria-label="Закрыть">&times;</button>
          <h2 id="cookie-settings-title">Настройка cookies</h2>
          <p>Выберите, какие категории cookies вы разрешаете.</p>

          <label class="form-checkbox cookie-option">
            <input type="checkbox" checked disabled />
            <span>Необходимые cookies (всегда включены)</span>
          </label>
          <label class="form-checkbox cookie-option">
            <input type="checkbox" id="cookie-analytics" />
            <span>Аналитические cookies</span>
          </label>
          <label class="form-checkbox cookie-option">
            <input type="checkbox" id="cookie-marketing" />
            <span>Маркетинговые cookies</span>
          </label>
          <label class="form-checkbox cookie-option">
            <input type="checkbox" id="cookie-personalization" />
            <span>Персонализация</span>
          </label>

          <div class="cookie-actions">
            <button type="button" class="btn btn-primary" id="cookie-save-settings">Сохранить выбор</button>
            <button type="button" class="btn btn-ghost" id="cookie-reject-optional">Только необходимые</button>
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(wrapper);
  }

  function init() {
    const existing = readSettings();
    if (existing) return;

    createUi();

    document.getElementById('cookie-accept-all')?.addEventListener('click', () => {
      saveSettings({ analytics: true, marketing: true, personalization: true });
      closeBanner();
      closeModal();
    });

    document.getElementById('cookie-open-settings')?.addEventListener('click', () => {
      applyFormValues(readSettings() || defaultSettings);
      openModal();
    });

    document.getElementById('cookie-close-settings')?.addEventListener('click', closeModal);

    document.getElementById('cookie-settings-modal')?.addEventListener('click', (event) => {
      if (event.target.id === 'cookie-settings-modal') closeModal();
    });

    document.getElementById('cookie-save-settings')?.addEventListener('click', () => {
      saveSettings({
        analytics: Boolean(document.getElementById('cookie-analytics')?.checked),
        marketing: Boolean(document.getElementById('cookie-marketing')?.checked),
        personalization: Boolean(document.getElementById('cookie-personalization')?.checked)
      });
      closeBanner();
      closeModal();
    });

    document.getElementById('cookie-reject-optional')?.addEventListener('click', () => {
      saveSettings({ analytics: false, marketing: false, personalization: false });
      closeBanner();
      closeModal();
    });
  }

  document.addEventListener('DOMContentLoaded', init);
})();
