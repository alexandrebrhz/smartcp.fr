(() => {
  const burger = document.querySelector('[data-burger]');
  const nav = document.querySelector('[data-nav]');
  if (burger && nav) {
    burger.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      burger.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      nav.classList.remove('open');
      burger.setAttribute('aria-expanded','false');
    }));
  }

  // Partner trial URL: replace with your Odoo referral link when available.
  const partnerTrialUrl = '';
  document.querySelectorAll('[data-odoo-trial]').forEach(link => {
    if (partnerTrialUrl) {
      link.href = partnerTrialUrl;
      link.target = '_blank';
      link.rel = 'noopener';
    } else {
      link.href = 'contact.html?source=essai-odoo';
      link.title = 'Le lien partenaire Odoo sera ajouté ici';
    }
  });

  const params = new URLSearchParams(location.search);
  if (params.get('source') === 'essai-odoo') {
    const topic = document.querySelector('select[name="topic"]');
    if (topic) topic.value = 'Essai / découverte Odoo';
  }
})();
