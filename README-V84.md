# V84 — Correctif Google Analytics / GTM

## Problème constaté
- GTM `GTM-MN2VW4BK` se chargeait bien après consentement.
- La bibliothèque Google tag `G-TBS9XT2XSD` se chargeait également.
- Aucune requête Analytics `g/collect` n'était toutefois émise.

## Correctif
Le chargeur GTM dynamique de `cookie-consent.js` injectait `gtm.js` sans pousser l'événement de démarrage officiel du conteneur :

`{'gtm.start': Date.now(), event: 'gtm.js'}`

Cet événement est maintenant poussé après la mise à jour du consentement Analytics et avant le chargement du script GTM.

## Déploiement
Remplacer uniquement `cookie-consent.js` à la racine du site.
Aucun changement HTML/CSS n'est nécessaire.

## Test
1. Publier le fichier.
2. Recharger `https://smartcp.fr/` avec consentement Analytics accepté.
3. DevTools > Network : vérifier `gtm.js`, puis `collect` / `g/collect`.
4. Vérifier GA4 > Temps réel.
