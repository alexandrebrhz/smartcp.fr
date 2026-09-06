# V68 — Formulaire de contact Google Workspace

Le formulaire `contact.html` envoie désormais directement les demandes vers l'application Web Google Apps Script "Leads Smart C&P".

Endpoint :
https://script.google.com/macros/s/AKfycbzH3WC8dPqMKVTN5LrT7tvu3Ym4ML0ldmOvXth1I6VuYKkiecqiAumeT8MQb3aUHDeADA/exec

Le traitement PHP `contact.php` a été supprimé car GitHub Pages n'exécute pas PHP.

Le script Google gère :
- envoi email vers alexandre@smartcp.fr ;
- reply-to vers l'adresse du prospect ;
- stockage dans Google Sheets ;
- honeypot anti-spam ;
- consentement ;
- redirection vers merci.html ou erreur.html.
