(() => {
  const body = document.body;
  const header = document.querySelector("[data-header]");
  const progress = document.querySelector("[data-progress]");
  const burger = document.querySelector("[data-burger]");
  const nav = document.querySelector("[data-nav]");
  const stickyCta = document.querySelector(".sticky-cta");

  const onScroll = () => {
    const y = window.scrollY || document.documentElement.scrollTop;
    header?.classList.toggle("is-scrolled", y > 18);
    stickyCta?.classList.toggle("is-visible", y > 680);

    if (progress) {
      const doc = document.documentElement;
      const max = Math.max(1, doc.scrollHeight - window.innerHeight);
      progress.style.width = `${Math.min(100, (y / max) * 100)}%`;
    }
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if (burger && nav) {
    burger.addEventListener("click", () => {
      const open = burger.getAttribute("aria-expanded") === "true";
      burger.setAttribute("aria-expanded", String(!open));
      body.classList.toggle("menu-open", !open);
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        burger.setAttribute("aria-expanded", "false");
        body.classList.remove("menu-open");
      });
    });
  }

  const reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach((el) => observer.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add("is-visible"));
  }

  const diagnostic = document.querySelector("[data-diagnostic]");
  const contactForm = document.querySelector("[data-contact-form]");
  const formScore = document.querySelector("[data-form-score]");
  const formLevel = document.querySelector("[data-form-level]");
  const formDetails = document.querySelector("[data-form-details]");
  const formRecommendation = document.querySelector("[data-form-recommendation]");
  const formSummary = document.querySelector("[data-diagnostic-summary-form]");

  const diagnosticState = {
    score: 0,
    level: "Non renseigné",
    details: "Aucun irritant sélectionné",
    recommendation: "Aucune recommandation générée"
  };

  const updateFormDiagnostic = () => {
    if (formScore) formScore.value = String(diagnosticState.score);
    if (formLevel) formLevel.value = diagnosticState.level;
    if (formDetails) formDetails.value = diagnosticState.details;
    if (formRecommendation) formRecommendation.value = diagnosticState.recommendation;

    if (formSummary) {
      formSummary.innerHTML = `
        <strong>Diagnostic joint au message</strong>
        <p><b>${diagnosticState.level}</b> — Score ${diagnosticState.score}/17<br>${diagnosticState.details}<br><em>${diagnosticState.recommendation}</em></p>
      `;
    }
  };

  if (diagnostic) {
    const checks = diagnostic.querySelectorAll("label[data-category]");
    const scoreEl = diagnostic.querySelector("[data-score]");
    const ring = diagnostic.querySelector("[data-score-ring]");
    const title = diagnostic.querySelector("[data-score-title]");
    const text = diagnostic.querySelector("[data-score-text]");
    const recommendation = diagnostic.querySelector("[data-recommendation] p");
    const barOrganisation = diagnostic.querySelector("[data-bar-organisation]");
    const barOutils = diagnostic.querySelector("[data-bar-outils]");
    const barPilotage = diagnostic.querySelector("[data-bar-pilotage]");

    const maxByCategory = { organisation: 0, outils: 0, pilotage: 0 };

    checks.forEach((label) => {
      const category = label.dataset.category;
      const weight = Number(label.dataset.weight || 1);
      maxByCategory[category] += weight;
    });

    const updateScore = () => {
      const categoryScores = { organisation: 0, outils: 0, pilotage: 0 };
      const selected = [];
      let score = 0;

      checks.forEach((label) => {
        const input = label.querySelector("input");
        const weight = Number(label.dataset.weight || 1);
        const category = label.dataset.category;

        if (input && input.checked) {
          score += weight;
          categoryScores[category] += weight;
          selected.push(input.value);
        }
      });

      const maxScore = Object.values(maxByCategory).reduce((a, b) => a + b, 0);
      const pct = Math.round((score / maxScore) * 100);

      const orgPct = Math.round((categoryScores.organisation / maxByCategory.organisation) * 100) || 0;
      const outilsPct = Math.round((categoryScores.outils / maxByCategory.outils) * 100) || 0;
      const pilotagePct = Math.round((categoryScores.pilotage / maxByCategory.pilotage) * 100) || 0;

      if (barOrganisation) barOrganisation.value = orgPct;
      if (barOutils) barOutils.value = outilsPct;
      if (barPilotage) barPilotage.value = pilotagePct;

      if (scoreEl) scoreEl.textContent = score;
      if (ring) {
        ring.style.background = `conic-gradient(var(--turquoise) ${pct * 3.6}deg, rgba(255,255,255,.12) 0deg)`;
      }

      const dominant = Object.entries(categoryScores).sort((a, b) => b[1] - a[1])[0]?.[0] || "organisation";
      let level = "Diagnostic à lancer";
      let message = "Cochez vos irritants pour obtenir une première lecture.";
      let reco = "Commencez par identifier les irritants qui reviennent le plus souvent dans le quotidien des équipes.";

      if (score === 0) {
        level = "Diagnostic à lancer";
      } else if (score <= 4) {
        level = "Friction modérée";
        message = "Quelques irritants sont visibles. C’est souvent le bon moment pour structurer avant que la complexité n’augmente.";
        reco = "Priorité : réaliser un diagnostic court des flux et sécuriser les processus les plus sensibles.";
      } else if (score <= 9) {
        level = "Flux à reprendre en main";
        message = "Les irritants commencent à créer un coût caché : temps perdu, informations dispersées, pilotage moins fiable.";
        reco = dominant === "outils"
          ? "Priorité : cartographier les outils, identifier les doubles saisies et définir un socle cible autour d’Odoo."
          : dominant === "pilotage"
            ? "Priorité : fiabiliser les données clés et construire des indicateurs de pilotage exploitables."
            : "Priorité : clarifier les rôles, les étapes de validation et les responsabilités dans les flux métier.";
      } else if (score <= 13) {
        level = "Transformation prioritaire";
        message = "La friction est probablement déjà visible dans la performance quotidienne : lenteurs, erreurs, arbitrages et manque de visibilité.";
        reco = "Priorité : lancer un cadrage structuré des flux et préparer une trajectoire de digitalisation progressive.";
      } else {
        level = "Urgence organisationnelle";
        message = "Les signaux indiquent un fort enjeu de cohérence entre outils, processus, données et pilotage.";
        reco = "Priorité : organiser rapidement un diagnostic complet pour sécuriser les flux critiques et définir une feuille de route Odoo / digitalisation.";
      }

      if (title) title.textContent = level;
      if (text) text.textContent = message;
      if (recommendation) recommendation.textContent = reco;

      diagnosticState.score = score;
      diagnosticState.level = level;
      diagnosticState.details = selected.length ? selected.join(" | ") : "Aucun irritant sélectionné";
      diagnosticState.recommendation = reco;

      updateFormDiagnostic();
    };

    checks.forEach((label) => {
      const input = label.querySelector("input");
      input?.addEventListener("change", updateScore);
    });

    diagnostic.querySelector("[data-copy-diagnostic]")?.addEventListener("click", () => {
      updateScore();
      setTimeout(() => {
        contactForm?.querySelector("textarea[name='message']")?.focus();
      }, 400);
    });

    updateScore();
  }

  if (contactForm) {
    contactForm.addEventListener("submit", () => {
      updateFormDiagnostic();
    });
  }
})();


/* V9.5 — Google Analytics avec consentement personnalisé */
(function () {
  const GA_ID = window.SMARTCP_GA_ID || "G-TBS9XT2XSD";
  const STORAGE_KEY = "smartcp_analytics_consent";
  const banner = document.querySelector("[data-cookie-banner]");
  const acceptBtn = document.querySelector("[data-cookie-accept]");
  const denyBtn = document.querySelector("[data-cookie-deny]");
  const resetBtns = document.querySelectorAll("[data-cookie-reset]");

  function loadGoogleAnalytics() {
    if (window.__smartcpGaLoaded) return;
    window.__smartcpGaLoaded = true;

    const script = document.createElement("script");
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(GA_ID);
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };

    window.gtag("js", new Date());
    window.gtag("consent", "update", {
      "analytics_storage": "granted",
      "ad_storage": "denied",
      "ad_user_data": "denied",
      "ad_personalization": "denied"
    });
    window.gtag("config", GA_ID, {
      "anonymize_ip": true
    });
  }

  function hideBanner() {
    if (banner) banner.hidden = true;
  }

  function showBanner() {
    if (banner) banner.hidden = false;
  }

  function accept() {
    localStorage.setItem(STORAGE_KEY, "granted");
    loadGoogleAnalytics();
    hideBanner();
  }

  function deny() {
    localStorage.setItem(STORAGE_KEY, "denied");
    if (typeof window.gtag === "function") {
      window.gtag("consent", "update", {
        "analytics_storage": "denied",
        "ad_storage": "denied",
        "ad_user_data": "denied",
        "ad_personalization": "denied"
      });
    }
    hideBanner();
  }

  function resetConsent() {
    localStorage.removeItem(STORAGE_KEY);
    showBanner();
  }

  const saved = localStorage.getItem(STORAGE_KEY);

  if (saved === "granted") {
    loadGoogleAnalytics();
  } else if (saved === "denied") {
    hideBanner();
  } else {
    showBanner();
  }

  if (acceptBtn) acceptBtn.addEventListener("click", accept);
  if (denyBtn) denyBtn.addEventListener("click", deny);
  resetBtns.forEach((btn) => btn.addEventListener("click", resetConsent));
})();
