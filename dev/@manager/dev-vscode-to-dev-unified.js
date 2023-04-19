/**
     * Suivi des modifications :
     *
     * Version   | Date      | Société            | Auteur                               | Modification(s)
     * 01.00.00  | 04/2023   | --                 | thomas.heurtault                     | Version initiale
     *
     * Description de la fonction :
     * Cette fonction réalise une opération spécifique avec les paramètres d'entrée fournis.
     *
     */
 const fs = require('fs');
 const path = require('path');
 
 const sourceFile = path.join(__dirname, '..', 'vscode', 'dev-vscode.mjs');
 const targetFile = path.join(__dirname, '..', 'unified', `dev-unified-${getFormattedDate()}.js`);
 
 fs.readFile(sourceFile, 'utf8', (err, data) => {
     if (err) {
         console.error(`Erreur lors de la lecture du fichier source: ${err}`);
         return;
     }
 
     const indexToRemove = data.indexOf('//! NE PAS COPIER DANS WINCC UNIFIED');
     const newData = data.substring(0, indexToRemove);
 
     fs.writeFile(targetFile, newData, 'utf8', (err) => {
         if (err) {
             console.error(`Erreur lors de l'écriture du fichier cible: ${err}`);
             return;
         }
 
         console.log(`Fichier copié avec succès: ${targetFile}`);
     });
 });
 
 function getFormattedDate() {
     const date = new Date();
     const year = date.getFullYear().toString().padStart(4, '0');
     const month = (date.getMonth() + 1).toString().padStart(2, '0');
     const day = date.getDate().toString().padStart(2, '0');
     const hours = date.getHours().toString().padStart(2, '0');
     const minutes = date.getMinutes().toString().padStart(2, '0');
 
     return `${year}${month}${day}-${hours}h${minutes}`;
 }
 