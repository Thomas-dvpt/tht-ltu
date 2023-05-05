export function getGlobalVar(variableName) {
    /**
     * Suivi des modifications :
     *
     * Version   | Date      | Société            | Auteur                               | Modification(s)
     * 01.00.00  | 04/2023   | AgroMousquetaires  | thomas.heurtault@mousquetaires.com   | Version initiale
     *
     * Description de la fonction :
     * Cette fonction récupère la valeur d'une variable globale en fonction du nom fourni.
     *
     * @param {string} variableName - Nom de la variable globale dont la valeur doit être récupérée
     * @returns {any} - Valeur de la variable globale demandée
     * @throws {Error} - Description de l'erreur qui peut être levée
     */
    try {
      let value;
      if (typeof variableName === 'string') {
        value = eval(variableName);
      } else {
        throw new Error(`Nom de varibale inconnu: ${variableName}`);
      }
  
      // Tracer l'exécution de la fonction
      const messageLog = `La valeur de la variable ${variableName}: ${JSON.stringify(value)}`;
      logTrace(getGlobalVar.name, 'success', messageLog);
  
      // Renvoie la valeur de la variable
      return value;
    } catch (error) {
      // Tracer une erreur dans la fonction
      const messageLog = `${error}`;
      logTrace(getGlobalVar.name, 'error', messageLog);
  
      // Lève l'erreur à la fonction appelante si nécessaire
      throw error;
    }
  }