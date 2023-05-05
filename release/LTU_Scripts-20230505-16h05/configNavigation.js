export function configNavigation() {
  /**
   * Suivi des modifications :
   *
   * Version   | Date      | Société            | Auteur                               | Modification(s)
   * 01.00.00  | 04/2023   | AgroMousquetaires  | thomas.heurtault@mousquetaires.com   | Version initiale
   *
   * Description de la fonction :
   * Cette fonction renvoie un tableau d'objets représentant le menu de navigation.
   *
   * @returns {Array} - Tableau d'objets représentant le menu de navigation
   * @throws {Error} - Erreur qui peut être levée en cas de problème lors de l'exécution de la fonction
   */
  try {
      //TODO :  Écrire le code ici

      //? MENU PAR DEFAUT
      const basic = [
          { label: 'Accueil', link: '@Home', access: 'HMI Monitor' },
         
           ];

      //? MENU GARIEN
      const gardien = [
        { label: 'Accueil', link: '@Home', access: 'HMI Monitor' },
        { label: 'Alarmes', link: 'Alarme', access: 'HMI Monitor'}
       
         ];

      //? MENU PRODUCTION 1 
      const production_1 = [
        { label: 'Accueil', link: '@Home', access: 'HMI Monitor' }
         ];

      //? MENU EXEMPLE - THOMAS 2023-04
      const exemple = [ 
        {label: 'Accueil', link: '@Home', access: 'HMI Monitor' },
        {label: 'Menu A', link: 'Menu_Test_A', access: 'HMI Administrator', dropdown: [
                { label: 'Menu A-1', link: 'Menu_Test_A_1', access: 'HMI Administrator', dropdown: [
                        {label: 'Menu A-1-1', link: 'Menu_Test_A_1_1', access: 'HMI Administrator'},
                        {label: 'Menu A-1-2', link: 'Menu_Test_A_1_2', access: 'HMI Administrator'},
                        {label: 'Menu A-1-3', link: 'Menu_Test_A_1_3', access: 'HMI Administrator'},
                        {label: 'Menu A-1-4', link: 'Menu_Test_A_1_4', access: 'HMI Administrator'},
                        {label: 'Menu A-1-5', link: 'Menu_Test_A_1_5', access: 'HMI Administrator'},
                        {label: 'Menu A-1-6', link: 'Menu_Test_A_1_6', access: 'HMI Administrator', dropdown :[
                              { label: 'Menu A-2', link: 'Menu_Test_A_2', access: 'HMI Administrator'},
                              { label: 'Menu A-3', link: 'Menu_Test_A_3', access: 'HMI Administrator'},
                              { label: 'Menu A-4', link: 'Menu_Test_A_4', access: 'HMI Administrator'},
                              { label: 'Menu A-5', link: 'Menu_Test_A_5', access: 'HMI Administrator'},
                              { label: 'Menu A-6', link: 'Menu_Test_A_6', access: 'HMI Administrator'},
                              { label: 'Menu A-7', link: 'Menu_Test_A_7', access: 'HMI Administrator'},
                              { label: 'Menu A-8', link: 'Menu_Test_A_8', access: 'HMI Administrator'},],},],},
                { label: 'Menu A-2', link: 'Menu_Test_A_2', access: 'HMI Administrator'},
                { label: 'Menu A-3', link: 'Menu_Test_A_3', access: 'HMI Administrator'},
                { label: 'Menu A-4', link: 'Menu_Test_A_4', access: 'HMI Administrator'},
                { label: 'Menu A-5', link: 'Menu_Test_A_5', access: 'HMI Administrator'},
                { label: 'Menu A-6', link: 'Menu_Test_A_6', access: 'HMI Administrator'},
                { label: 'Menu A-7', link: 'Menu_Test_A_7', access: 'HMI Administrator'},
                { label: 'Menu A-8', link: 'Menu_Test_A_8', access: 'HMI Administrator'},],},
        {label: 'Menu B', link: 'Menu_Test_B', access: 'HMI Administrator'},
        {label: 'Menu C', link: 'Menu_Test_C', access: 'HMI Administrator', dropdown: [
                { label: 'Menu C-1', link: 'Menu_Test_C_1', access: 'HMI Administrator',dropdown: [
                        {label: 'Menu C-1-1', link: 'Menu_Test_C_1_1', access: 'HMI Administrator'},],},
                { label: 'Menu C-2', link: 'Menu_Test_C_2', access: 'HMI Administrator',dropdown: [
                        {label: 'Menu C-2-1', link: 'Menu_Test_C_2_1', access: 'HMI Administrator'},],},],},
          {label: 'Menu D', link: 'Menu_Test_D', access: 'HMI Administrator'},  
    ];

      const menuID = Tags("LocalSessionSettings.menuID").Read();
      let menu = null;
      switch (menuID) {
        case 1:
            menu = basic;
            logTrace(configNavigation.name, 'debug', `menu = basic`);
            break;
        case 2:
          menu = gardien;
          logTrace(configNavigation.name, 'debug',`menu = gardien`);
            break;
        case 4:
          menu = production_1;
          logTrace(configNavigation.name, 'debug',`menu = production_1`);
            break;
        case 8:
          menu = exemple;
          logTrace(configNavigation.name, 'debug',`menu = exemple`);
            break;
        default:
          menu = basic;
          logTrace(configNavigation.name, 'debug', `menu = basic`);
            break;
        }

      // Tracer l'exécution de la fonction
      const messageLog = `Menu : ${JSON.stringify(menu)}`;
      logTrace(configNavigation.name, 'success', messageLog);

      // Renvoie le résultat
      return Promise.resolve(menu);
  } catch (error) {
      // Tracer une erreur dans la fonction
      const messageLog = `Erreur : ${error}`;
      logTrace(configNavigation.name, 'error', messageLog);

      // Lève l'erreur à la fonction appelante si nécessaire
      throw error;
  }
}