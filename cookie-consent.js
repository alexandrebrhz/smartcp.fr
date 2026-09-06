(() => {
  'use strict';

  const STORAGE_KEY = 'smartcp_cookie_notice_v1';
  const SIX_MONTHS = 1000 * 60 * 60 * 24 * 183;

  function readChoice() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return null;
      const saved = JSON.parse(raw);
      if (!saved || typeof saved.timestamp !== 'number') return null;
      if (Date.now() - saved.timestamp > SIX_MONTHS) {
        localStorage.removeItem(STORAGE_KEY);
        return null;
      }
      return saved;
    } catch (_) {
      return null;
    }
  }

  function saveChoice() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        status: 'acknowledged',
        timestamp: Date.now()
      }));
    } catch (_) {
      /* The banner can simply reappear if storage is unavailable. */
    }
  }

  function removeBanner() {
    const banner = document.querySelector('.sc-cookie-banner');
    if (banner) banner.remove();
  }

  function showBanner() {
    if (document.querySelector('.sc-cookie-banner')) return;

    const banner = document.createElement('aside');
    banner.className = 'sc-cookie-banner';
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-label', 'Information sur les cookies');
    banner.innerHTML = `
      <div class="sc-cookie-banner__inner">
        <div class="sc-cookie-banner__copy">
          <p class="sc-cookie-banner__title">Respect de votre vie privée</p>
          <p class="sc-cookie-banner__text">SMART Conseil &amp; Performance n'active actuellement aucun cookie publicitaire ni traceur de mesure d'audience. Seuls les éléments strictement nécessaires au fonctionnement du site et à la mémorisation de votre choix sont utilisés.</p>
        </div>
        <div class="sc-cookie-banner__actions">
          <a class="sc-cookie-banner__link" href="gestion-cookies.html">En savoir plus</a>
          <button class="sc-cookie-banner__button" type="button" data-cookie-ack>Compris</button>
        </div>
      </div>`;

    document.body.appendChild(banner);
    const button = banner.querySelector('[data-cookie-ack]');
    if (button) {
      button.addEventListener('click', () => {
        saveChoice();
        removeBanner();
      });
    }
  }

  function resetChoice() {
    try { localStorage.removeItem(STORAGE_KEY); } catch (_) {}
    removeBanner();
    showBanner();
  }

  window.SmartCookieNotice = { reset: resetChoice, show: showBanner };

  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-cookie-reset]').forEach(button => {
      button.addEventListener('click', resetChoice);
    });
    if (!readChoice()) showBanner();
  });
})();
