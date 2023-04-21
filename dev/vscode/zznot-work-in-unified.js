//! CES FONCTIONS NE FONT PAS L'OPERATION PRÉVUE DANS WINCC UNIFIED
//! Différentes raisons (non-exhaustive)
//!     - accès aux fonctionnalités JS limitées
//!     - Pas d'accès aux élément via HTML 
//!     - 
//! 
//! 

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

  //?-------------------------------------------------------------------------
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