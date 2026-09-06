# V65 — SEO technique, cookies et conformité

## Ce qui a été mis en place

### Cookies / vie privée
- Bandeau d'information commun à toutes les pages.
- Aucun cookie publicitaire ou outil de mesure d'audience n'est activé dans cette version.
- La fermeture du bandeau est mémorisée localement pendant environ 6 mois (`smartcp_cookie_notice_v1`).
- Page `gestion-cookies.html` réécrite pour décrire la situation réelle du site et permettre de réafficher le bandeau.
- Politique de confidentialité enrichie avec une section cookies / ressources externes et la possibilité de saisir la CNIL.

### SEO technique
- Titres SEO uniques sur les 7 pages principales.
- Meta descriptions uniques et orientées intention de recherche.
- URL canonique (`rel=canonical`) sur les pages indexables.
- Open Graph + Twitter Cards pour le partage social.
- Directives robots permettant des aperçus enrichis (`max-image-preview`, `max-snippet`, `max-video-preview`).
- Données structurées Schema.org `Organization` + `WebSite` sur l'accueil.
- Sitemap nettoyé : uniquement les pages utiles au référencement.
- Pages techniques, légales ou provisoires passées en `noindex,follow`.

## Cibles sémantiques principales
Les expressions sont travaillées dans les titres, descriptions et contenus déjà existants, sans ajout de balise `meta keywords` :
- intégrateur Odoo
- intégrateur Odoo Ready
- ERP Odoo
- consultant Odoo
- déploiement Odoo
- migration Odoo
- audit et cadrage Odoo
- support / TMA Odoo
- formation Odoo
- Odoo et intelligence artificielle
- automatisation IA
- intégrateur Odoo Albi / Tarn / Occitanie

## À faire après mise en ligne
1. Ajouter le domaine dans Google Search Console.
2. Soumettre `https://smartcp.fr/sitemap.xml`.
3. Demander l'indexation des pages principales après déploiement.
4. Vérifier les Core Web Vitals / PageSpeed sur mobile et desktop.
5. Créer ou optimiser la fiche Google Business Profile si elle est pertinente pour l'activité locale.
6. Développer progressivement des contenus métiers / cas clients : c'est le principal levier SEO restant une fois la technique propre.

## Point juridique à valider
La page `mentions-legales.html` est déjà renseignée (éditeur, forme, capital, adresse, SIREN/SIRET/RCS, TVA, direction, hébergeur). Les informations juridiques n'ont pas été modifiées dans V65 : elles doivent être contrôlées par SMART C&P avant publication.

La page `cgv.html` reste une page provisoire et ne constitue pas encore des CGV complètes. Elle est donc en `noindex` dans V65.
