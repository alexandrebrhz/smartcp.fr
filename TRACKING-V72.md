# SMART C&P — Tracking V72

## Identifiants

- Google Tag Manager : `GTM-MN2VW4BK`
- Google Analytics 4 : `G-TBS9XT2XSD`
- Calendrier suivi : `https://calendar.app.google/jDHV4ySJgztGUdbm7`

## Consentement retenu

La V72 utilise une logique prudente de **Consent Mode basique** :

- avant choix : aucune balise Google de mesure n'est chargée ;
- Accepté : le consentement Analytics passe à `granted` et le conteneur GTM est chargé ;
- Refusé : les balises Google de mesure restent bloquées ;
- Personnaliser : l'utilisateur peut activer ou désactiver la mesure d'audience ;
- `ad_storage`, `ad_user_data` et `ad_personalization` restent toujours à `denied` dans la V72.

Le choix est mémorisé environ 6 mois dans `smartcp_cookie_consent_v2`.

## Evénements préparés dans le dataLayer

- `click_phone`
- `click_email`
- `click_calendar`
- `form_start`
- `generate_lead`
- `click_odoo`
- `click_linkedin`

`generate_lead` est envoyé depuis `merci.html` uniquement lorsqu'une soumission issue de `contact.html` a été marquée comme en cours dans la session.

## Attribution formulaire

Le formulaire prépare les champs cachés suivants :

- `page_url`
- `landing_page`
- `referrer`
- `utm_source`
- `utm_medium`
- `utm_campaign`
- `utm_term`
- `utm_content`

Important : le site envoie ces champs au endpoint Apps Script, mais leur persistance dans Google Sheets / email dépend du code Apps Script côté serveur. La V72 ne modifie pas le projet Apps Script distant.

## Configuration à terminer dans Google Tag Manager

Le code du site charge GTM seulement après acceptation. Pour que GA4 reçoive les données, publier dans le conteneur `GTM-MN2VW4BK` :

1. Une balise **Google tag** avec l'ID `G-TBS9XT2XSD`, déclencheur `All Pages`.
2. Une balise **Google Analytics: GA4 Event** (ou équivalent dans l'interface actuelle) utilisant le Google tag ci-dessus, nom d'événement `{{Event}}`.
3. Un déclencheur **Custom Event** avec l'expression régulière :
   `^(click_phone|click_email|click_calendar|form_start|generate_lead|click_odoo|click_linkedin)$`
4. Publier le conteneur.
5. Déclarer dans GA4 comme événements clés : `generate_lead`, `click_phone`, `click_calendar`.

## Tests après publication

- Refus : aucun chargement de `gtm.js`, aucun cookie `_ga`.
- Acceptation : GTM se charge, GA4 reçoit `page_view`.
- Tester chaque événement personnalisé dans GTM Preview / Tag Assistant et GA4 DebugView ou Realtime.
- Tester desktop, mobile et navigation privée.
