export function setGlobalVar(variableName, newValue) {
    /**
     * Suivi des modifications :
     *
     * Version   | Date      | Société            | Auteur                               | Modification(s)
     * 01.00.00  | 04/2023   | AgroMousquetaires  | thomas.heurtault@mousquetaires.com   | Version initiale
     *
     * Description de la fonction :
     * Cette fonction modifie la valeur d'une variable globale en fonction du nom et de la nouvelle valeur fournis.
     *
     * @param {string} variableName - Nom de la variable globale à modifier
     * @param {any} newValue - Nouvelle valeur à affecter à la variable globale
     * @throws {Error} - Description de l'erreur qui peut être levée
     */
    try {
      if (typeof variableName === 'string') {
        eval(`${variableName} = ${JSON.stringify(newValue)}`);
      } else {
        throw new Error(`Nom de variable inconnu: ${variableName}`);
      }
  
      // Tracer l'exécution de la fonction
      const messageLog = `Variable ${variableName} mis à jour : ${JSON.stringify(newValue)}`;
      logTrace(setGlobalVar.name, 'success', messageLog);
    } catch (error) {
      // Tracer une erreur dans la fonction
      const messageLog = `${error}`;
      logTrace(setGlobalVar.name, 'error', messageLog);
  
      // Lève l'erreur à la fonction appelante si nécessaire
      throw error;
    }
  }