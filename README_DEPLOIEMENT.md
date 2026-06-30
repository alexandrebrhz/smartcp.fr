# SMART CONSEIL ET PERFORMANCE — V8.1 Retour V7 + ajustements hero

Version statique/PHP prête à tester en local et à déposer sur IONOS.

## Nouveautés V6

- Email harmonisé : `alexandre@smartcp.fr`
- Domaine harmonisé : `smartcp.fr`
- Témoignages anonymisés :
  - Salomé M. · Éditeur
  - Audrey R. · Consultante indépendante pour une pâtisserie occitane
  - Eddy A. · Négociant en outillage
- Formulaire de contact intégré
- Envoi email via `contact.php`
- Anti-spam simple par honeypot
- Diagnostic intelligent en 30 secondes :
  - score sur 17
  - familles d’irritants : organisation, outils, pilotage
  - niveau d’urgence
  - recommandation automatique
  - diagnostic repris automatiquement dans l’email

## Test local

Le site peut être ouvert localement avec `index.html` pour vérifier le design.

Attention : le formulaire ne peut envoyer un mail que sur un hébergement avec PHP actif.
En local, le design et le diagnostic fonctionnent, mais l’envoi email nécessite un serveur PHP.

## Déploiement IONOS

Envoyer tout le contenu du dossier à la racine du site :

```
index.html
styles.css
script.js
contact.php
merci.html
erreur.html
mentions-legales.html
politique-confidentialite.html
robots.txt
sitemap.xml
assets/
```

## Point important formulaire

Le fichier `contact.php` utilise la fonction PHP `mail()`.
Sur certains hébergements IONOS, il peut être nécessaire :
- que PHP soit activé ;
- que le domaine soit correctement configuré ;
- que l’adresse `no-reply@smartcp.fr` existe ou soit autorisée ;
- ou de remplacer `mail()` par un envoi SMTP si IONOS bloque les emails PHP.

## Après immatriculation

Compléter dans les mentions légales :
- SIRET
- RCS
- TVA intracommunautaire le cas échéant
- coordonnées exactes de l’hébergeur selon le contrat IONOS


## Ajustements V6

- Cible moins restrictive : cœur de cible PME, mais ouverture aux projets de refonte SI / ERP sur structures plus importantes.
- Diagnostic renommé en “30 secondes”.
- Sections claires enrichies avec une trame légère type grille pour éviter un rendu trop blanc.
- Message cible repositionné autour du système d’information et de la gestion de l’information.


## Ajustements V7

- Bande supérieure allongée et moins arrondie.
- Ajout du mot-symbole en header avec “PERFORMANCE” en bleu/turquoise.
- Slogan sous la marque : “Libérer le potentiel numérique de votre entreprise !”
- Titre principal légèrement réduit.
- Bulle “Comprendre” décalée pour ne plus passer sur le visage.
- Ciblage reformulé :
  - PE / PME / SEM / collectivités
  - 3 à 150 salariés comme cœur de cible
  - ouverture maintenue aux projets plus larges de refonte SI / ERP.
- Section Odoo ajustée avec rappel des couleurs de marque :
  - primaire #714B67
  - secondaire #017E84


## Ajustements V8.1

Version retravaillée à partir de la V7, en conservant ce qui fonctionne le mieux sur le hero.

Modifications principales :
- bandeau blanc conservé ;
- fond bleu conservé ;
- logo carré en header ;
- petites bulles autour de la photo conservées ;
- bulles Albi / 3–150 / Odoo conservées ;
- slogan sous le hero conservé ;
- titre hero revu :
  “Vos processus, enfin au service de votre performance.”
- mot “performance” mis en valeur ;
- boutons inspirés de la V8, mais avec meilleur contraste ;
- photo avec cartouche de présentation sous l’image ;
- marque réécrite en header :
  “SMART Conseil & Performance”.


## Ajustements V8.2

Modifications demandées sur les blocs :
- 1er bloc : bulle “Comprendre” repositionnée plus bas ;
- header : bouton “Planifier un échange” en rectangle à angles arrondis ;
- bloc diagnostic : suppression de “Mini”, titre commun aux 2 colonnes, texte de gauche remonté ;
- bloc Odoo : ajout d’un logo / wordmark Odoo dans la partie socle technologique ;
- bloc “Pour quelles entreprises ?” : ajout d’un titre à chaque tuile de contexte ;
- bloc témoignages : ajout d’une phrase de contexte avant chaque témoignage.


## Ajustements V8.3

- Ajout du lien Linktree : https://linktr.ee/alexandre.brihiez
- Intégration dans :
  - bloc profil ;
  - bloc contact ;
  - footer ;
  - données structurées `sameAs`.


## Ajustements V8.4

- Remplacement du placeholder Odoo par le logo officiel fourni : `assets/odoo_logo.svg`.
- Le logo `Odoo Ready Partner` n’est pas affiché tant que la certification n’est pas officiellement obtenue.
- La mention conservée reste : “Certification Odoo Ready en cours d’obtention.”


## Ajustements V8.5

- Ajout du badge officiel `Odoo Learning Partner` fourni : `assets/odoo_learning_partner_rgb.svg`.
- Le bloc “Socle technologique” affiche désormais :
  - le logo Odoo officiel ;
  - le badge Odoo Learning Partner.
- La mention devient :
  “Odoo Learning Partner — montée vers Ready en cours d’obtention.”
- Le badge Ready Partner n’est toujours pas affiché tant que le statut Ready n’est pas officiellement validé.


## Ajustements V8.6

- Le logo Odoo officiel est déplacé sous le schéma du bloc “Socle technologique”.
- Le badge Odoo Learning Partner est déplacé dans la tuile Odoo du premier bloc.
- La tuile Odoo affiche désormais :
  - badge Odoo Learning Partner ;
  - “Bientôt Ready” ;
  - “Learning Partner”.
- La mention du bloc Odoo devient :
  “Statut actuel : Odoo Learning Partner. Objectif : passage Ready Partner.”


## Ajustements V8.7

- Refonte complète du bloc “Pour quelles entreprises ?”
- Suppression des cartes imbriquées peu lisibles.
- Nouveau layout :
  - colonne gauche avec titre + texte d’introduction ;
  - colonne droite avec 3 cartes simples et lisibles.
- Titre réduit / mieux maîtrisé.
- Contraste et lisibilité renforcés.


## Ajustements V8.8

- Simplification du contexte des témoignages.
- Remplacement des longues phrases d’introduction par 3 labels courts :
  1. Partenariat Éditeur
  2. Projet digital
  3. Projet CRM
- Objectif : améliorer la lisibilité et rendre le bloc plus net visuellement.


## Ajustements V8.9

- Tuile Odoo du hero simplifiée :
  - suppression du texte “Learning Partner” redondant ;
  - conservation du badge + “Bientôt Ready”.
- Bande slogan :
  - suppression du logo redondant ;
  - conservation du slogan seul.
- Bloc Odoo :
  - suppression de la mention “Statut actuel...” jugée inutile ;
  - logo Odoo intégré directement dans le schéma ;
  - schéma et colonne de texte alignés en hauteur.
- Bloc “Pour qui ?” entièrement repensé :
  - suppression de la logique de tuiles imbriquées ;
  - remplacement par des use cases concrets qui parlent aux décideurs et managers.


## Ajustements V9.0

- Suppression complète de la bande slogan sous le hero.
- Suppression de la numérotation 01 / 02 / 03 / 04 dans les constats.
- Refonte du bloc Odoo visuel :
  - retrait du logo incrusté sans signification ;
  - ajout d’un cartouche plus lisible “Plateforme utilisée” + logo Odoo.
- Réécriture du bloc profil :
  - “Avant de parler logiciel, j’écoute et je pose des questions.”
  - “Quand le contexte est clair, je peux commencer à vous aider.”


### Correctif V9.0

Le texte du bloc profil a été corrigé pour refléter exactement le message souhaité :
- “Avant de parler logiciel, j’écoute et je pose des questions.”
- “Quand le contexte est clair, je peux commencer à vous aider.”


## Ajustements V9.1

- Bloc Odoo rendu à nouveau lisible.
- Suppression du cartouche intégré dans l’image.
- Fin du recadrage du schéma : affichage naturel, sans `object-fit: cover`.
- Rappel Odoo déplacé dans la colonne texte avec un branding discret “Socle : Odoo”.


## Ajustements V9.2

- Suppression de “Socle : Odoo” dans le hero / sous la photo.
- Remise du branding Odoo dans le bloc Odoo.
- Déplacement de la bulle “Impacter” pour qu’elle ne recouvre plus le nom sous la photo.


### Correctif V9.2b

- Correction du bug d’injection HTML : le bloc “Socle : Odoo” est supprimé du hero.
- Le rappel Odoo n’est désormais présent que dans le bloc Odoo, après les pastilles fonctionnelles.


## V9.3 — Version Google Workspace / GitHub Pages

Cette version est prête pour GitHub Pages.

### Formulaire

Le formulaire de contact n'utilise plus PHP.
Il envoie désormais les données vers Google Apps Script :

https://script.google.com/macros/s/AKfycbzH3WC8dPqMKVTN5LrT7tvu3Ym4ML0ldmOvXth1I6VuYKkiecqiAumeT8MQb3aUHDeADA/exec

Le fichier `contact.php` a été supprimé du ZIP car GitHub Pages ne l'exécute pas.

### Fonctionnement attendu

1. Le visiteur remplit le formulaire.
2. Les champs du mini-diagnostic sont ajoutés automatiquement en champs cachés.
3. Le formulaire poste les données vers Google Apps Script.
4. Google Apps Script :
   - envoie un email à alexandre@smartcp.fr ;
   - ajoute la demande dans le Google Sheet ;
   - redirige vers `https://smartcp.fr/merci.html`.

### À vérifier côté Google Apps Script

Dans le déploiement de l'application web :
- Exécuter en tant que : Moi
- Qui a accès : Tout le monde

Il faut utiliser l'URL de déploiement qui se termine par `/exec`.


## V9.4 — Contact remanié

- Suppression du bouton email affiché dans le bloc contact.
- Renommage du bouton “Mes liens utiles” en “Linktree · mes coordonnées”.
- Fusion des 3 tuiles de réassurance en un seul bloc compact.
- Version toujours compatible GitHub Pages + Google Apps Script.


## V9.5 — Google Analytics et consentement

- Ajout de Google Analytics GA4 : G-TBS9XT2XSD
- Ajout du Consent Mode v2 avec consentement par défaut refusé.
- Ajout d’une bannière personnalisée Accepter / Refuser.
- Google Analytics est chargé uniquement après acceptation.
- Ajout d’un lien “Gestion des cookies” dans le footer.
- Mise à jour de la politique de confidentialité.
- Formulaire Google Apps Script conservé.


### Correctif V9.5

- Injection effective de la bannière de consentement avant `script.js`.
- Ajout effectif du bouton “Gestion des cookies” dans le footer.


## V9.6 — Méthode & savoir-faire

- Remplacement du bloc méthode par une proposition plus forte :
  - Écouter
  - Clarifier
  - Structurer
  - Déployer
- Ajout d’un bloc posture :
  “Ni au-dessus, ni à la place. À vos côtés.”
- Ajout d’un bloc savoir-faire avec 6 domaines :
  ERP & Odoo, Commerce & CRM, Finance & pilotage, SIRH & organisation, Mobilité & terrain, IA & automatisation.
- Diagnostic conservé.
- Formulaire Google Apps Script conservé.
- Google Analytics + bannière de consentement conservés.


## V9.7 — Ajustements de fond

- Repositionnement du bloc méthode autour de l’idée :
  “Installer un ERP, c’est 10 % du projet.”
- Mise en avant de la valeur créée avant le paramétrage :
  compréhension des enjeux, transcription du besoin, adoption, ROI.
- Reformulation de l’encart bleu autour du client :
  “À vos côtés pour comprendre vos enjeux.”
- Ajustement du bloc enjeux autour de la résilience, de la croissance et de la pérennisation.
- Diagnostic conservé mais mieux contextualisé :
  ce n’est pas un quiz, c’est un point de départ pour objectiver les irritants.
- Correction du bloc profil :
  “je vous écoute et je vous pose des questions.”
- Correction footer : “Gestion des cookies” séparé visuellement de l’adresse.


## V9.8 — Résilience SI & partenaire

- Bloc enjeux recentré sur la question :
  “À quel point votre système d’information est-il résilient ?”
- Reformulation des constats :
  effets silo, Excel rustine, pilotage à vue, coûts invisibles.
- Ajout de la notion de fragilités identifiées, documentées, priorisées et traitées.
- Bloc méthode simplifié :
  “Installer un ERP, c’est 10 % du projet.”
- Mise en avant du rôle du partenaire :
  accompagnement, engagement, expertise métier, volonté d’aboutir.
- Méthode ajustée autour de l’écoute, de la documentation, de la traduction du besoin et du ROI.


## V9.9 — Odoo, silos logiciels et diagnostic

- Remplacement de l’encart méthode :
  “Le choix du partenaire engage votre réussite.”
- Recentrage des champs d’action sur le choix d’un nouvel ERP et Odoo.
- Suppression de la formule “pas des silos de plus”.
- Suppression de l’idée “le besoin n’est pas toujours de changer d’outil”.
- Diagnostic renommé :
  “30 secondes pour analyser vos enjeux.”
- Ajout de la notion d’intégration Odoo à reprendre / améliorer dans le diagnostic.
- Diagnostic, formulaire Google Apps Script, Analytics et consentement conservés.


### Correctif V9.9

- Ajout effectif de l’option diagnostic :
  “Intégration Odoo à reprendre”.
- Reformulation du texte d’introduction du diagnostic dans la structure HTML réelle.


## V9.10 — Lien partenaire Odoo

- Ajout d’un bouton visible dans le bloc Odoo :
  “Découvrir Odoo avec SMART C&P”
- Lien partenaire intégré :
  https://www.odoo.com/fr_FR?utm_campaign=partner-08e0f5fc&utm_source=partner_ref
- Ajout d’un rappel discret “Découvrir Odoo” dans le footer.
- Formulaire Google Apps Script, diagnostic, Analytics et bannière de consentement conservés.


## V9.11 — Bloc Odoo harmonisé

- Recentrage du bloc “Socle technologique”.
- Schéma “outil éclaté / flux structuré / pilotage clair” remonté au centre.
- CTA partenaire Odoo placé sous le schéma.
- Suppression du cartouche “Socle : Odoo”.
- Ajout du logo Odoo directement dans le bouton “Découvrir Odoo avec SMART C&P”.


## V9.12 — Aération du bloc Odoo

- Plus d’espace vertical dans la section Odoo.
- H2 légèrement mieux respirant.
- Paragraphe plus espacé sous le titre.
- Pastilles descendues et un peu plus aérées.
- Respiration générale améliorée sans changer la structure.


## V9.13 — Partenariat ADII

- Ajout d’un bloc “Un partenariat naturel avec ADII”.
- Présentation de la complémentarité entre ADII (IT) et SMART C&P (ERP / digitalisation / Odoo).
- Ajout du logo ADII.
- Ajout de 4 tuiles : IT Cloud, Réseau, Cybersécurité, Maintenance & SAV.
- Liens vers le site ADII et les pages LinkedIn ADII / SMART C&P.


## V9.14 — Ajustements ADII

- Bouton “Découvrir ADII” rendu plus visible.
- Ajout du logo LinkedIn sur les boutons Smart C&P et ADII.
- Icône “Réseau” agrandie pour une meilleure lisibilité.


## V9.15 — Refonte du diagnostic

- Bloc d’introduction du diagnostic réorganisé pour supprimer la grande zone blanche.
- Légende et bénéfices regroupés dans une vraie carte d’introduction.
- Outil de diagnostic remaquetté en 2 colonnes : checklist à gauche, score / synthèse / actions à droite.
- Meilleure lecture desktop, tout en restant responsive sur mobile.


## V9.16 — Icônes LinkedIn et Réseau

- Remplacement du logo LinkedIn bitmap par un pictogramme SVG net.
- Correction de l’affichage des boutons LinkedIn Smart C&P et LinkedIn ADII.
- Remplacement de l’icône “Réseau” par un pictogramme d’interconnexion.
- Ajustement CSS pour une meilleure lisibilité des icônes.


## V9.17 — Tuiles diagnostic compactées

- Tuile 1 : “Premier score” devient “1er score”.
- Tuile 2 : “3 familles” devient “3 items”.
- Tuile 3 : “Synthèse utile” devient “Synthèse”.
- Objectif : compacter les titres et harmoniser visuellement les trois tuiles du bloc diagnostic.


## V9.18 — Icône réseau harmonisée

- Icône Réseau recolorisée en bleu/cyan pour être cohérente avec les autres pictogrammes du bloc ADII.


## V9.19 — Profil boutons

- Ajout du logo LinkedIn dans le bouton “Voir mon LinkedIn”.
- Reformulation du texte profil :
  “je peux commencer à travailler” au lieu de “je peux commencer à être utile”.
- Renommage “Mes liens utiles” en “Mon Linktree”.
- Renommage “M’écrire” en “Contact”.
