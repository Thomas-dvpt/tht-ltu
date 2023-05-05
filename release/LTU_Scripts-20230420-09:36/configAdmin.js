export function configAdmin() {
    /**
     * Suivi des modifications :
     *
     * Version   | Date      | Société            | Auteur                               | Modification(s)
     * 01.00.00  | 04/2023   | AgroMousquetaires  | thomas.heurtault@mousquetaires.com   | Version initiale
     *
     * Description de la fonction :
     * Cette fonction configure les paramètres souhaité par l'administrateur au lancement de l'OS
     */
  
     try {
    //TODO :  Écrire le code ici
     logToVsCode = false ;
     logToUnified = true ;
     logDebug = true ;
  
      // Tracer l'exécution de la fonction
      const messageLog = `logToVsCode=${logToVsCode}, logToUnified=${logToUnified}, logDebug=${logDebug}`;
      logTrace(configAdmin.name, 'success', messageLog);
      
      // Renvoie du résultat si nécessaire
    
    } catch (error) {
      // Tracer une erreur dans la fonction
      const messageLog = `${error}`;
      logTrace(configAdmin.name, 'error', messageLog);
  
      // Lève l'erreur à la fonction appelante si nécessaire
      throw error;
    }
  }