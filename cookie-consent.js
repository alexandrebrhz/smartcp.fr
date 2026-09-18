(() => {
  'use strict';

  // V72 — Consentement + mesure Google.
  // Mode retenu : Consent Mode basique. Aucun tag Google n'est chargé tant
  // que l'utilisateur n'a pas accepté la mesure d'audience.
  const STORAGE_KEY = 'smartcp_cookie_consent_v2';
  const ATTRIBUTION_KEY = 'smartcp_attribution_v1';
  const PENDING_LEAD_KEY = 'smartcp_pending_lead_v1';
  const SIX_MONTHS = 1000 * 60 * 60 * 24 * 183;
  const GTM_ID = 'GTM-MN2VW4BK';
  const GA4_ID = 'G-TBS9XT2XSD';
  const CALENDAR_URL = 'https://calendar.app.google/jDHV4ySJgztGUdbm7';

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function(){ window.dataLayer.push(arguments); };

  // Valeurs par défaut avant tout chargement de Google Tag Manager.
  window.gtag('consent', 'default', {
    analytics_storage: 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    functionality_storage: 'granted',
    security_storage: 'granted',
    wait_for_update: 500
  });

  let gtmLoading = false;

  function readChoice() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return null;
      const saved = JSON.parse(raw);
      if (!saved || typeof saved.timestamp !== 'number' || typeof saved.analytics !== 'boolean') return null;
      if (Date.now() - saved.timestamp > SIX_MONTHS) {
        localStorage.removeItem(STORAGE_KEY);
        return null;
      }
      return saved;
    } catch (_) {
      return null;
    }
  }

  function saveChoice(analytics) {
    const choice = { analytics: Boolean(analytics), timestamp: Date.now() };
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(choice)); } catch (_) {}
    return choice;
  }

  function hasAnalyticsConsent() {
    const choice = readChoice();
    return Boolean(choice && choice.analytics === true);
  }

  function loadGTM() {
    if (!hasAnalyticsConsent() || gtmLoading || document.querySelector(`script[data-smartcp-gtm="${GTM_ID}"]`)) return;
    gtmLoading = true;

    // Mise à jour du consentement AVANT le chargement du conteneur.
    window.gtag('consent', 'update', {
      analytics_storage: 'granted',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied'
    });

    window.dataLayer.push({
      event: 'smartcp_consent_granted',
      smartcp_consent_analytics: true,
      ga4_measurement_id: GA4_ID
    });

    const script = document.createElement('script');
    script.async = true;
    script.dataset.smartcpGtm = GTM_ID;
    script.src = `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(GTM_ID)}`;
    script.onload = () => { gtmLoading = false; };
    script.onerror = () => { gtmLoading = false; };
    document.head.appendChild(script);
  }

  function denyGoogle() {
    window.gtag('consent', 'update', {
      analytics_storage: 'denied',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied'
    });
  }

  function removeBanner() {
    document.querySelector('.sc-cookie-banner')?.remove();
  }

  function closePreferences() {
    const dialog = document.querySelector('.sc-cookie-preferences');
    if (dialog) dialog.remove();
    document.documentElement.classList.remove('sc-cookie-modal-open');
  }

  function emitConsentChange(choice) {
    document.dispatchEvent(new CustomEvent('smartcp:consent-change', { detail: choice }));
  }

  function applyChoice(analytics) {
    const choice = saveChoice(analytics);
    if (choice.analytics) loadGTM(); else denyGoogle();
    removeBanner();
    closePreferences();
    emitConsentChange(choice);
  }

  function showPreferences() {
    closePreferences();
    const existing = readChoice();
    const analyticsChecked = existing?.analytics === true;

    const wrapper = document.createElement('div');
    wrapper.className = 'sc-cookie-preferences';
    wrapper.innerHTML = `
      <div class="sc-cookie-preferences__backdrop" data-cookie-close></div>
      <section class="sc-cookie-preferences__panel" role="dialog" aria-modal="true" aria-labelledby="sc-cookie-pref-title">
        <button class="sc-cookie-preferences__close" type="button" aria-label="Fermer" data-cookie-close>×</button>
        <p class="sc-cookie-preferences__eyebrow">CONFIDENTIALITÉ</p>
        <h2 id="sc-cookie-pref-title">Personnaliser mes cookies</h2>
        <p class="sc-cookie-preferences__intro">Les éléments nécessaires au fonctionnement du site restent actifs. La mesure d'audience Google Analytics est facultative.</p>

        <div class="sc-cookie-option">
          <div>
            <strong>Fonctionnement du site</strong>
            <p>Mémorisation de votre choix et fonctions indispensables du site.</p>
          </div>
          <span class="sc-cookie-option__required">Toujours actif</span>
        </div>

        <label class="sc-cookie-option sc-cookie-option--toggle">
          <div>
            <strong>Mesure d'audience</strong>
            <p>Google Analytics 4 nous aide à comprendre les visites et les interactions afin d'améliorer smartcp.fr.</p>
          </div>
          <span class="sc-cookie-switch">
            <input type="checkbox" data-cookie-analytics ${analyticsChecked ? 'checked' : ''}>
            <span aria-hidden="true"></span>
          </span>
        </label>

        <p class="sc-cookie-preferences__details"><a href="gestion-cookies.html">Voir le détail des cookies et de la mesure d'audience</a></p>
        <div class="sc-cookie-preferences__actions">
          <button type="button" class="sc-cookie-action sc-cookie-action--outline" data-cookie-reject>Refuser</button>
          <button type="button" class="sc-cookie-action sc-cookie-action--primary" data-cookie-save>Enregistrer mes choix</button>
        </div>
      </section>`;

    document.body.appendChild(wrapper);
    document.documentElement.classList.add('sc-cookie-modal-open');

    wrapper.querySelectorAll('[data-cookie-close]').forEach(el => el.addEventListener('click', closePreferences));
    wrapper.querySelector('[data-cookie-reject]')?.addEventListener('click', () => applyChoice(false));
    wrapper.querySelector('[data-cookie-save]')?.addEventListener('click', () => {
      applyChoice(Boolean(wrapper.querySelector('[data-cookie-analytics]')?.checked));
    });
  }

  function showBanner(force = false) {
    if (!force && readChoice()) return;
    if (document.querySelector('.sc-cookie-banner')) return;

    const banner = document.createElement('aside');
    banner.className = 'sc-cookie-banner';
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-label', 'Choix des cookies');
    banner.innerHTML = `
      <div class="sc-cookie-banner__inner">
        <div class="sc-cookie-banner__copy">
          <p class="sc-cookie-banner__title">Votre confidentialité</p>
          <p class="sc-cookie-banner__text">Avec votre accord, nous utilisons Google Analytics pour mesurer l'audience de smartcp.fr et comprendre les interactions avec le site. Vous pouvez accepter, refuser ou personnaliser votre choix.</p>
        </div>
        <div class="sc-cookie-banner__actions">
          <button class="sc-cookie-action sc-cookie-action--primary" type="button" data-cookie-reject>Refuser</button>
          <button class="sc-cookie-action sc-cookie-action--outline" type="button" data-cookie-customize>Personnaliser</button>
          <button class="sc-cookie-action sc-cookie-action--primary" type="button" data-cookie-accept>Accepter</button>
        </div>
      </div>`;

    document.body.appendChild(banner);
    banner.querySelector('[data-cookie-accept]')?.addEventListener('click', () => applyChoice(true));
    banner.querySelector('[data-cookie-reject]')?.addEventListener('click', () => applyChoice(false));
    banner.querySelector('[data-cookie-customize]')?.addEventListener('click', showPreferences);
  }

  function manageChoice(event) {
    if (event) event.preventDefault();
    removeBanner();
    showPreferences();
  }

  function resetChoice() {
    try { localStorage.removeItem(STORAGE_KEY); } catch (_) {}
    denyGoogle();
    closePreferences();
    removeBanner();
    showBanner(true);
  }

  function track(eventName, params = {}) {
    if (!hasAnalyticsConsent()) return false;
    window.dataLayer.push({
      event: eventName,
      ...params,
      page_location: window.location.href,
      page_path: window.location.pathname
    });
    return true;
  }

  function readAttribution() {
    try {
      const saved = JSON.parse(sessionStorage.getItem(ATTRIBUTION_KEY) || 'null');
      if (saved && typeof saved === 'object') return saved;
    } catch (_) {}
    return null;
  }

  function initAttribution() {
    let data = readAttribution();
    if (data) return data;

    const params = new URLSearchParams(window.location.search);
    let referrerHost = '';
    try { referrerHost = document.referrer ? new URL(document.referrer).hostname : ''; } catch (_) {}

    data = {
      landing_page: window.location.href,
      referrer: document.referrer || '',
      source: params.get('utm_source') || referrerHost || 'direct',
      medium: params.get('utm_medium') || (referrerHost ? 'referral' : 'direct'),
      campaign: params.get('utm_campaign') || '',
      term: params.get('utm_term') || '',
      content: params.get('utm_content') || ''
    };

    try { sessionStorage.setItem(ATTRIBUTION_KEY, JSON.stringify(data)); } catch (_) {}
    return data;
  }

  function populateTrackingFields(form) {
    if (!form) return;
    const attribution = initAttribution();
    const values = {
      page_url: window.location.href,
      landing_page: attribution.landing_page || '',
      referrer: attribution.referrer || '',
      utm_source: attribution.source || '',
      utm_medium: attribution.medium || '',
      utm_campaign: attribution.campaign || '',
      utm_term: attribution.term || '',
      utm_content: attribution.content || ''
    };

    Object.entries(values).forEach(([name, value]) => {
      let input = form.querySelector(`input[name="${name}"]`);
      if (!input) {
        input = document.createElement('input');
        input.type = 'hidden';
        input.name = name;
        form.appendChild(input);
      }
      input.value = value;
    });
  }

  function markLeadPending() {
    try {
      sessionStorage.setItem(PENDING_LEAD_KEY, JSON.stringify({ timestamp: Date.now(), source: 'contact_form' }));
    } catch (_) {}
  }

  function clearLeadPending() {
    try { sessionStorage.removeItem(PENDING_LEAD_KEY); } catch (_) {}
  }

  function flushPendingLead() {
    if (!/\/merci\.html$/.test(window.location.pathname)) return;
    let pending = null;
    try { pending = JSON.parse(sessionStorage.getItem(PENDING_LEAD_KEY) || 'null'); } catch (_) {}
    if (!pending) return;
    if (Date.now() - Number(pending.timestamp || 0) > 1000 * 60 * 30) {
      clearLeadPending();
      return;
    }
    if (track('generate_lead', { lead_source: pending.source || 'contact_form' })) clearLeadPending();
  }

  function bindTracking() {
    const form = document.querySelector('#contactForm');
    if (form) {
      populateTrackingFields(form);
      let started = false;
      form.addEventListener('focusin', (event) => {
        if (started || !event.target.matches('input, select, textarea')) return;
        if (event.target.type === 'hidden' || event.target.name === 'website') return;
        started = true;
        track('form_start', { form_id: 'contactForm' });
      }, { passive: true });
    }

    document.addEventListener('click', (event) => {
      const anchor = event.target.closest('a[href]');
      if (!anchor) return;
      const rawHref = anchor.getAttribute('href') || '';
      const text = (anchor.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 120);
      const common = { link_url: anchor.href, link_text: text };

      if (rawHref.startsWith('tel:')) return void track('click_phone', common);
      if (rawHref.startsWith('mailto:')) return void track('click_email', common);
      if (anchor.href.startsWith(CALENDAR_URL)) return void track('click_calendar', common);

      let host = '';
      try { host = new URL(anchor.href).hostname; } catch (_) {}
      if (host === 'www.linkedin.com' || host.endsWith('.linkedin.com')) return void track('click_linkedin', common);
      if (host === 'www.odoo.com' || host.endsWith('.odoo.com')) return void track('click_odoo', common);
    }, true);
  }

  window.SmartCookieConsent = {
    show: () => showBanner(true),
    manage: showPreferences,
    reset: resetChoice,
    choice: readChoice,
    analyticsAllowed: hasAnalyticsConsent
  };

  window.SmartTracking = {
    track,
    populateForm: populateTrackingFields,
    markLeadPending,
    clearLeadPending,
    attribution: readAttribution
  };

  document.addEventListener('smartcp:consent-change', (event) => {
    if (event.detail?.analytics) flushPendingLead();
  });

  document.addEventListener('DOMContentLoaded', () => {
    initAttribution();
    bindTracking();

    document.querySelectorAll('[data-cookie-reset]').forEach(button => button.addEventListener('click', resetChoice));
    document.querySelectorAll('[data-cookie-manage]').forEach(link => link.addEventListener('click', manageChoice));

    const choice = readChoice();
    if (!choice) showBanner();
    else if (choice.analytics) loadGTM();
    else denyGoogle();

    flushPendingLead();
  });
})();
