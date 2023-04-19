export function initOS() {
    /**
     * Suivi des modifications :
     *
     * Version   | Date      | Société            | Auteur                               | Modification(s)
     * 01.00.00  | 04/2023   | AgroMousquetaires  | thomas.heurtault@mousquetaires.com   | Version initiale
     *
     * Description de la fonction :
     * Cette fonction initiamliser des paramètres au lancmeent de l'OS
     */
  
    try {
      
      //TODO :  Écrire le code ici
        configAdmin();
        configNavigation();
  
      // Tracer l'exécution de la fonction
      const messageLog = `Initialisation de l'OS terminée`;
      logTrace(initOS.name, 'success', messageLog);
    } catch (error) {
      // Tracer une erreur dans la fonction
      const messageLog = `${error}`;
      logTrace(initOS.name, 'error', messageLog);
  
      // Lève l'erreur à la fonction appelante si nécessaire
      throw error;
    }
  }