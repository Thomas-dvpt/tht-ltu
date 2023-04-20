const fs = require('fs');
const path = require('path');
const acorn = require('acorn');

const sourceFile = path.join(__dirname, '..', 'dev','vscode', 'dev-vscode.mjs');
const targetDir = path.join(__dirname, '..', 'release', `LTU_Scripts-${getFormattedDate()}`);

fs.readFile(sourceFile, 'utf8', (err, data) => {
    if (err) {
        console.error(`Erreur lors de la lecture du fichier source: ${err}`);
        return;
    }

    const ast = acorn.parse(data, { sourceType: 'module', ecmaVersion: 2020 });
    const exportedFunctions = ast.body.filter(node => node.type === 'ExportNamedDeclaration' && node.declaration.type === 'FunctionDeclaration');

    fs.mkdir(targetDir, { recursive: true }, (err) => {
        if (err) {
            console.error(`Erreur lors de la création du dossier cible: ${err}`);
            return;
        }

        let functionCount = 0;

        for (const funcNode of exportedFunctions) {
            const functionName = funcNode.declaration.id.name;
            const startPos = funcNode.start;
            const endPos = funcNode.end;
            const functionContent = data.substring(startPos, endPos);
            const targetFile = path.join(targetDir, `${functionName}.js`);

            fs.writeFile(targetFile, functionContent, 'utf8', (err) => {
                if (err) {
                    console.error(`Erreur lors de l'écriture du fichier cible: ${err}`);
                    return;
                }

                functionCount++;
                console.log(`Fichier copié avec succès: ${targetFile}`);

                if (functionCount === exportedFunctions.length) {
                    console.log(`Nombre total de fonctions copiées: ${functionCount}`);
                }
            });
        }
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
