# Stratégie de diffusion — V74

## Architecture retenue

La diffusion locale est structurée en trois niveaux :

1. **Hub régional** : `integrateur-odoo-occitanie.html`.
2. **Pages départementales** : Tarn, Haute-Garonne, Tarn-et-Garonne, Aveyron, Aude, puis Hérault et Gard, puis les autres départements selon les données.
3. **Pages villes** seulement lorsque l'intention et le potentiel le justifient : Albi, Castres, Toulouse, Montauban, Rodez, Millau, Carcassonne, Narbonne, puis Montpellier, Nîmes, Béziers, etc.

## Règle de production

Une page départementale n'est pas une page ville avec le nom remplacé. Exemple :

- `integrateur-odoo-aude.html` doit traiter l'Aude dans son ensemble ;
- `integrateur-odoo-narbonne.html` et `integrateur-odoo-carcassonne.html` peuvent être créées séparément si les données et le potentiel le justifient.

Les gabarits graphiques peuvent rester proches, mais chaque page doit avoir un contenu local propre : tissu économique, profils d'entreprises, problématiques, modalités d'intervention, FAQ et maillage spécifiques.

## Première vague Occitanie

- Occitanie — hub produit en V74.
- Haute-Garonne / Toulouse — page produite et améliorée en V74.
- Tarn.
- Tarn-et-Garonne.
- Aveyron.
- Aude.

## Extension nationale

Paris / Île-de-France reste la première zone nationale prioritaire hors Occitanie. La future page devra être factuellement exacte : SMART C&P est basé à Albi et n'affichera pas de fausse agence parisienne.

## Mesure

Toutes les futures pages héritent du dispositif V72 : GTM / GA4 après consentement, clic téléphone, clic calendrier, formulaire, UTM et provenance.
