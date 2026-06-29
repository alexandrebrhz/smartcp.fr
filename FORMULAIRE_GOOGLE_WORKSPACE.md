# Formulaire Google Workspace

Le formulaire du site `smartcp.fr` est connecté à Google Apps Script.

Endpoint utilisé :

```text
https://script.google.com/macros/s/AKfycbzH3WC8dPqMKVTN5LrT7tvu3Ym4ML0ldmOvXth1I6VuYKkiecqiAumeT8MQb3aUHDeADA/exec
```

## En cas de modification du script Google

Après modification dans Apps Script, cliquer sur :

Déployer > Gérer les déploiements > Modifier > Nouvelle version > Déployer

Si Google fournit une nouvelle URL `/exec`, remplacer l'attribut `action` du formulaire dans `index.html`.

## Test recommandé

1. Publier les fichiers sur GitHub Pages.
2. Ouvrir `https://smartcp.fr`.
3. Remplir le formulaire avec un email de test.
4. Vérifier :
   - réception email sur `alexandre@smartcp.fr` ;
   - ajout d'une ligne dans Google Sheet ;
   - redirection vers `merci.html`.

