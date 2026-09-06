# SMART C&P — Site v3 multi-pages

## Ce qui est livré
- Page d'accueil très clairement positionnée **Intégrateur Odoo & IA**.
- Pages dédiées : Découvrir Odoo, Accompagnements, Méthode, Équipe, Odoo + IA, Contact.
- Mentions légales et confidentialité.
- Formulaire PHP compatible avec un hébergement IONOS PHP.
- Responsive mobile / tablette / desktop.

## Logo SMART C&P
Le fichier `assets/logo-smart-cp.png` est une **copie binaire exacte** du logo fourni dans la première version du site. Il n'a été ni redessiné ni modifié.

## Ajouter le lien partenaire Odoo
Dans `script.js`, remplacer :

```js
const partnerTrialUrl = '';
```

par votre URL de recommandation Odoo, par exemple :

```js
const partnerTrialUrl = 'https://...';
```

Tous les boutons `Tester Odoo avec SMART C&P` utiliseront automatiquement ce lien. Tant qu'il est vide, ils ouvrent le formulaire de contact.

## Vidéo Odoo
La page `decouvrir-odoo.html` intègre la vidéo officielle YouTube **What is Odoo in two minutes** via `youtube-nocookie.com`.

## Badge Odoo Ready
Le badge est appelé depuis le CDN Odoo. Si vous préférez l'héberger localement, téléchargez le fichier officiel depuis les Brand Assets Odoo et remplacez l'URL dans les pages concernées.

## Déploiement IONOS
1. Sauvegarder la version actuelle du site.
2. Envoyer le contenu de ce dossier à la racine web du domaine.
3. Vérifier que PHP est actif pour `contact.php`.
4. Tester le formulaire.
5. Ajouter le lien partenaire Odoo dans `script.js`.
6. Tester les pages sur mobile et desktop.

## Test local
Depuis le dossier :

```bash
php -S 127.0.0.1:8080
```

Puis ouvrir `http://127.0.0.1:8080/`.


- V10 : ajout de la page IA, harmonisation du footer sur tout le site, ajout des pages Machine à Leads / CGV / Gestion des cookies.

- V12 : refonte propre de la page IA, sans collage d'extractions d'image, avec composants HTML/CSS natifs.

- V13 : premier écran IA corrigé (visuel robot nettoyé, titre sur 2 lignes, 4 cartes en pleine largeur).


## Mise à jour v15
- Page IA : logos officiels fournis par le client
- Icônes du bloc 1 remplacées selon validation
- Ajout de la virgule/flèche bleue sous la note manuscrite
- Police Manrope conservée sur le site

- V16 : icônes bloc 1 légèrement agrandies, titre technologies parfaitement centré, note manuscrite remontée au-dessus du bloc suivant.

- V18 : bloc 3 IA repris selon la maquette : titre sur 2 lignes, 6 icônes fournies, titres compacts sur une ligne et contenus alignés à droite des icônes.

- V19 : bloc 3 affiné : icônes légèrement agrandies, texte descriptif gauche justifié, textes de cartes augmentés, alignement vertical harmonisé avec les 6 cartes.

- V20 : ajustements des blocs 4, 5 et 6 de la page IA (visuel d’intégration agrandi, nouveaux pictogrammes Odoo Online / Odoo.sh / On-Premise, note repositionnée avec flèche, bloc Machine à Leads remaquetté, CTA final avec bouton blanc).

- V21 : compression et harmonisation du bloc “Cas d’usage” sur la page IA (cartes moins hautes, titres ajustés pour éviter les débordements, texte de gauche justifié, espacements resserrés).

- V22 : ajustements des blocs 4, 5 et 6 de la page IA (image intégration agrandie et arrondie, note repositionnée au-dessus du bloc On-Premise, icônes Odoo agrandies, bloc Machine à Leads resserré, fusée CTA agrandie et rendue transparente).

- V23 : reprise du bloc des cas d’usage (mot “concrets” remis en bleu, icônes agrandies, titres/textes réduits, cartes compactées et meilleure harmonisation de la colonne gauche).

- V24 : police globale remplacée par Nunito Sans, plus ronde. Bloc intégration harmonisé : image à hauteur de la colonne droite, titre sur une ligne, texte réduit, tuiles raccourcies, pictogrammes agrandis et typographie réduite dans les tuiles.

- V26 : remplacement de la fusée du bloc 6 et du logo du footer par les visuels exacts fournis, sur fond transparent.

- V27 : footer — icône formulaire remplacée par le curseur cliquable fourni, enveloppe agrandie, icône de localisation remplacée par la version contour + point plein.

- V28 : footer mis à jour avec les nouvelles icônes blanches (email, localisation, formulaire de contact) et libellé “Albi, France”.

- V29 : page Accueil — remplacement des pictogrammes typographiques par les icônes graphiques validées (stats, bénéfices, accompagnements et bande équipe), sans modification de la mise en page ni des textes.
