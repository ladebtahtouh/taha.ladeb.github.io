# Page personnelle

Site statique : `index.html` (la page), `contenu.js` (tout le contenu), `pdfs/` (les fichiers).

## Mise en ligne sur GitHub Pages (une seule fois)

1. Crée un compte sur https://github.com si tu n'en as pas. Le nom d'utilisateur donnera l'adresse du site.
2. Crée un dépôt **public** nommé exactement `TON-NOM-UTILISATEUR.github.io`.
3. Sur la page du dépôt : **Add file → Upload files**, glisse `index.html`, `contenu.js`, `README.md` et le dossier `pdfs`, puis **Commit changes**.
4. Après une à deux minutes, le site est à l'adresse `https://TON-NOM-UTILISATEUR.github.io`.
   Si rien n'apparaît : **Settings → Pages**, source « Deploy from a branch », branche `main`, dossier `/ (root)`.

## Ajouter un PDF

1. Ouvre le dossier `pdfs` du dépôt, **Add file → Upload files**, dépose le PDF, **Commit changes**.
   Évite les espaces et les accents dans le nom du fichier (`notes-dft.pdf`).
2. Ouvre `contenu.js`, clique sur le crayon, ajoute un bloc dans `PUBLICATIONS` :

   ```js
   {
     type: "pdf",
     date: "2026-11-11",
     titre: "Notes sur la DFT",
     fichier: "pdfs/notes-dft.pdf",
     texte: "Commentaire facultatif.",
   },
   ```
3. **Commit changes**. Le site se met à jour en une minute environ.

## Ajouter un lien ou une note

Même chose, sans fichier à déposer : un bloc `type: "lien"` avec `url`, ou `type: "note"` avec `texte`.
Les modèles sont en commentaire dans `contenu.js`.

## À savoir

- Le dépôt est public : tout ce que tu y déposes est accessible à tous et le reste dans l'historique même après suppression.
- GitHub refuse les fichiers de plus de 100 Mo et déconseille d'aller au-delà de 1 Go par dépôt.
- Pour tester avant de publier, ouvre `index.html` dans ton navigateur.
