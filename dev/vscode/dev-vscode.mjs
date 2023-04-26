
/**
     * Suivi des modifications :
     *
     * Version   | Date      | Société            | Auteur                               | Modification(s)
     * 01.00.00  | 04/2023   | AgroMousquetaires  | thomas.heurtault@mousquetaires.com   | Version initiale
     *
     * Description de la fonction :
     * GLOBAL TAGS
     *

*/


//?-------------------------------------------------------------------------
export function _TemplateFunction(param1, param2) {
  /**
   * Suivi des modifications :
   *
   * Version   | Date      | Société            | Auteur                               | Modification(s)
   * 01.00.00  | 04/2023   | AgroMousquetaires  | thomas.heurtault@mousquetaires.com   | Version initiale
   *
   * Description de la fonction :
   * Cette fonction réalise une opération spécifique avec les paramètres d'entrée fournis.
   *
   * @param {string} param1 - Description du premier paramètre d'entrée
   * @param {number} param2 - Description du deuxième paramètre d'entrée
   * @returns {any} - Description de la valeur ou des valeurs renvoyées
   * @throws {Error} - Description de l'erreur qui peut être levée
   */

  try {
    // Validation des paramètres d'entrée
    if (typeof param1 !== 'string' || typeof param2 !== 'number') {
      throw new Error('Paramètres d\'entrée invalides');
    }

    //TODO :  Écrire le code ici
    const resultat = `Traitement : ${param1}, ${param2}`; // Remplacez par votre résultat réel

    // Trace de DEBUG 
    logTrace(_TemplateFunction.name, 'debug', `Mon message ici`);

    // Tracer l'exécution de la fonction
    const messageLog = `Mon message ici`;
    logTrace(_TemplateFunction.name, 'success', messageLog);
    
    // Renvoie du résultat si nécessaire
    return resultat;
  } catch (error) {
    // Tracer une erreur dans la fonction
    const messageLog = `${error}`;
    logTrace(_TemplateFunction.name, 'error', messageLog);

    // Lève l'erreur à la fonction appelante si nécessaire
    throw error;
  }
}

//?-------------------------------------------------------------------------  
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
      const basic = [
          { label: 'Accueil', link: '@Home', access: 'HMI Monitor' },
         
           ];

      //? MENU EXEMPLE - THOMAS 2023-04
      const exemple = [ {label: 'Accueil', link: '@Home', access: 'HMI Monitor' },
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

        //? MENU TEST - THOMAS 2023-04                
        const thomas = [ {label: 'Accueil', link: '@Home', access: 'HMI Monitor' }];


      const menuID = Tags("RuntimeSettings.menuID").Read();
      let menu = null;
      switch (menuID) {
        case 1:
            menu = basic;
            logTrace(configNavigation.name, 'debug', `menu = basic`);
            break;
        case 2:
          menu = exemple;
          logTrace(configNavigation.name, 'debug',`menu = exemple`);
            break;
        case 4:
          menu = thomas;
          logTrace(configNavigation.name, 'debug',`menu = thomas`);
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
//?-------------------------------------------------------------------------
export function initRuntime() {
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
    setNavigation(); 

    // Tracer l'exécution de la fonction
    const messageLog = `Initialisation de l'OS terminée`;
    logTrace(initRuntime.name, 'success', messageLog);
  } catch (error) {
    // Tracer une erreur dans la fonction
    const messageLog = `${error}`;
    logTrace(initRuntime.name, 'error', messageLog);

    // Lève l'erreur à la fonction appelante si nécessaire
    throw error;
  }
}
//?-------------------------------------------------------------------------
export function logTrace(functionName, type, message) {
  /**
   * Suivi des modifications :
   *
   * Version   | Date      | Société            | Auteur                               | Modification(s)
   * 01.00.00  | 04/2023   | AgroMousquetaires  | thomas.heurtault@mousquetaires.com   | Version initiale
   *
   * Description de la fonction :
   * Fonction pour enregistrer des messages de trace avec des paramètres d'entrée spécifiques.
   *
   * @param {string} functionName - Le nom de la fonction en cours de journalisation
   * @param {string} type - Le type de message de journalisation (par exemple, 'success', 'error', 'debug')
   * @param {string} message - Le message de journalisation
   * @throws {Error} - Si les paramètres d'entrée ne sont pas valides
   */
      try {
      // Valider les paramètres d'entrée
      if (typeof functionName !== 'string' || typeof type !== 'string' || typeof message !== 'string') {
          throw new Error('Paramètres d\'entrée invalides');
      }
      // Obtenir les Tags HMI 

      const logToVsCode = Tags("RuntimeSettings.logToVsCode").Read();
      const logToUnified = Tags("RuntimeSettings.logToUnified").Read();
      const logDebug = Tags("RuntimeSettings.logDebug").Read();
      
      // Obtenir la date et l'heure actuelles
      const date = new Date().toLocaleString();

      // Fonction d'aide pour enregistrer des messages
     const logMessage = (logger, logType, logFunctionName, logMessage) => {
        eval(logger)(`${date} - ${logType} - ${logFunctionName}() - ${logMessage}`);
      };
  
      // Enregistre dans la console VSCode si activé
      if (logToVsCode) {
          switch (type) {
          case 'success':
              logMessage(console.log, 'SUCCES', functionName, message);
              break;
          case 'error':
              logMessage(console.error, 'ERREUR', functionName, message);
              break;
          case 'warning':
              logMessage(console.warn, 'AVERTISSEMENT', functionName, message);
              break;
          case 'debug':
              if (logDebug) {
              logMessage(console.log, 'DEBUG', functionName, message);
              }
              break;
          default:
              break;
          }
      }
  
      // Enregistre dans Unified RTIL si activé
      if (logToUnified) {
          switch (type) {
          case 'success':
              logMessage('HMIRuntime.Trace', 'SUCCES', functionName, message);
              break;
          case 'error':
              logMessage('HMIRuntime.Trace', 'ERREUR', functionName, message);

              break;
          case 'warning':
              logMessage('HMIRuntime.Trace', 'AVERTISSEMENT', functionName, message);
              break;
          case 'debug':
              if (logDebug) {
              logMessage('HMIRuntime.Trace', 'DEBUG', functionName, message);
              }
              break;
          default:
              break;
          }
      }
      } catch (error) {
      // Enregistre l'erreur dans la fonction
      //console.error(`${date} - ERROR - ${logTrace.name}() - ${error}`);
  console.error(` - ERROR - ${logTrace.name}() - ${error}`);
      // Lève l'erreur à la fonction appelante si nécessaire
      throw error;
      }

}

//?-------------------------------------------------------------------------
export async function setNavigation() {
  /**
   * Suivi des modifications :
   *
   * Version   | Date      | Société            | Auteur                               | Modification(s)
   * 01.00.00  | 04/2023   | AgroMousquetaires  | thomas.heurtault@mousquetaires.com   | Version initiale
   *
   * Description de la fonction :
   * Cette fonction met à jour la navigation en utilisant le menu généré par configNavigation().
   *
   * @throws {Error} - Erreur qui peut être levée en cas de problème lors de l'exécution de la fonction
   */

  const menu = await configNavigation();
  const screenPath = "~/FV_@Header/FV_@Navigation/";// Sélection de la vue @Navigation dans l'environnement
  const prefixBP = `BP_Nav_`; 
  const maxBP = 6 ; // Nombre de boutons maximum dans la vue @Navigation"


  if (menu.length > maxBP) {
      logTrace(setNavigation.name, 'warning', "Le nombre de menus est supérieur au nombre de boutons disponibles.");
  }

  try {

    //TODO :  Écrire le code ici
      for (let i = 0; i <= maxBP; i++) {
          const thisBP = await waitForUiElement(`${screenPath}${prefixBP}${i}`, 5000); // Attendre 5 secondes max. 
          if (! thisBP){
            throw new Error(`l'objet ${screenPath}${prefixBP} est introuvable. Vérifier le le chemin dans le script`);
          }
          if (menu.length > i){
              let thisLabel   = menu[i].label;
              let thisLink    = menu[i].link;
              //let thisAccess  = menu[i].access; //! Ne fonctionne pas pour le moment
              thisBP.Text = thisLabel;
              thisBP.AlternateText = thisLink; // TODO : Améliorer le stockage du lien. defineProperty() ne marchee pas 
              //thisBP.Authorization = thisAccess; //! Ne fonctionne pas pour le moment
              thisBP.Visible = true;
          
              if(i>0){
                if ('dropdown' in menu[i]) {
                  let thisSubMenu = menu[i].dropdown;
                  thisBP.Graphic = `GraphicCollection.arrow_drop_down_white_48dp`;
                  thisBP.AlternateGraphic = `GraphicCollection.arrow_drop_down_black_48dp`;
                }else{
                  thisBP.Graphic = ``;
                  thisBP.AlternateGraphic = ``;
                }}
          
          }else{
          thisBP.Visible = false;
          }
      } 

    // Tracer l'exécution de la fonction
    const messageLog = `Mise à jour de la navigation réussie`;
    logTrace(setNavigation.name, 'success', messageLog);

  } catch (error) {
    // Tracer une erreur dans la fonction
    const messageLog = `${error}`;
    logTrace(setNavigation.name, 'error', messageLog);

    // Lève l'erreur à la fonction appelante si nécessaire
    throw error;
  }
}
//?-------------------------------------------------------------------------
export async function setSubNavigation(linkToFind) {
  /**
   * Suivi des modifications :
   *
   * Version   | Date      | Société            | Auteur                               | Modification(s)
   * 01.00.00  | 04/2023   | AgroMousquetaires  | thomas.heurtault@mousquetaires.com   | Version initiale
   *
  * Description de la fonction :
   * Cette fonction récupère la configuration de navigation et configure les boutons
   * de sous-navigation en fonction du lien passé en paramètre (linkToFind).
   * 
   * @param {string} linkToFind - Lien pour trouver l'élément de menu correspondant
   * @throws {Error} - Erreur qui peut être levée en cas de problème lors de l'exécution de la fonction
   */
   async function findMenuItem(menu, linkToFind, parentItem = null) {
    /**
     * Suivi des modifications :
     *
     * Version   | Date      | Société            | Auteur                               | Modification(s)
     * 01.00.00  | 04/2023   | AgroMousquetaires  | thomas.heurtault@mousquetaires.com   | Version initiale
     *
     * Description de la fonction :
     * Cette fonction parcourt récursivement la structure du menu pour trouver l'élément de menu correspondant
     * au lien passé en paramètre (linkToFind) et retourne cet élément, avec un élément parent s'il existe. 
     * Elle est utilisée principalement pour la configuration des boutons de sous-navigation et le bouton de retour
     * au menu parent.
     * 
     * @param {Array} menu - La structure du menu à parcourir pour trouver l'élément correspondant
     * @param {string} linkToFind - Lien pour trouver l'élément de menu correspondant
     * @param {Object|null} parentItem - L'élément de menu parent, si existant (par défaut : null)
     * @returns {Object|null} - Retourne l'élément de menu trouvé (avec l'élément parent s'il existe) ou null si aucun élément ne correspond au lien
     * @throws {Error} - Erreur qui peut être levée en cas de problème lors de l'exécution de la fonction
     */
     for (const menuItem of menu) {
      if (menuItem.link === linkToFind) {
        const foundItem = Object.assign({}, menuItem);
        if (parentItem) {
          foundItem.parent = parentItem;
        }
        return foundItem;
      }
      if (menuItem.dropdown) {
        const foundItem = await findMenuItem(menuItem.dropdown, linkToFind, menuItem);
        if (foundItem) {
          return foundItem;
        }
      }
    }
    return null;
  }
  
      const menu = await configNavigation();
      let thisItem = null;
      const screenName = "@SubNavigation";
      const prefixBP = `BP_SubNav_`;
      const maxBP = 9 ; // Nombre de boutons maximum dans la vue "templateSubNavigation"
      logTrace(setSubNavigation.name,'debug',`itemLink = ${linkToFind}, thisItem = ${thisItem},`);

  try {
          thisItem = await findMenuItem(menu, linkToFind);
          if (thisItem.length > maxBP) {
            logTrace(setNavigation.name, 'warning', "Le nombre de menus est supérieur au nombre de boutons disponibles.");
        }
          if (!thisItem) {
            logTrace(setSubNavigation.name, 'warning', `Aucun élément de menu trouvé pour le lien ${linkToFind}`);
          return;
          }

      if ('dropdown' in thisItem) {
          const thisDropDown = thisItem.dropdown;
          logTrace(setSubNavigation.name,'debug',`Il y a un sous-menu dans  ${linkToFind} `);//:  ${JSON.stringify(thisDropDown)}
          const thisPopup = UI.SysFct.OpenScreenInPopup(`POP_SubNavigation`,screenName,false,``,0, 60 ,true,undefined);

    
          for (let i = 0; i < maxBP; i++) {
              const thisBP = await waitForUiElement(`/POP_SubNavigation/${prefixBP}${i}`, 5000); // Attendre 5 secondes max.   
              if (thisDropDown.length > i){
                  let thisLabel   = thisDropDown[i].label;
                  let thisLink    = thisDropDown[i].link;
                  //let thisAccess  = thisDropDown[i].access; //! Ne fonctionne pas pour le moment
                  thisBP.Text = thisLabel;
                  thisBP.AlternateText = thisLink; // TODO : Améliorer le stockage du lien. defineProperty() ne marchee pas 
                  //thisBP.Authorization = thisAccess; //! Ne fonctionne pas pour le moment
                  thisBP.Visible = true;
              
                  // Vérifie s'il y à à nouveau un sous-menu
                  if ('dropdown' in thisDropDown[i]) {
                  let thisSubMenu =thisDropDown[i].dropdown;
                  thisBP.Graphic = `GraphicCollection.arrow_forward_black_48dp`;
                  thisBP.AlternateGraphic = `GraphicCollection.arrow_forward_white_48dp`;
                  }else{
                  thisBP.Graphic = ``;
                  thisBP.AlternateGraphic = ``;}

              }else{
              thisBP.Visible = false;
              }
            }

            const currentMenuBP = await waitForUiElement(`/POP_SubNavigation/BP_CurrentMenu`, 200); // Attendre 200ms max.
            currentMenuBP.Text = thisItem.label;
            currentMenuBP.AlternateText = thisItem.link;
            currentMenuBP.Visible = true;
            const backMenuBP = await waitForUiElement(`/POP_SubNavigation/BP_BackMenu`, 200); // Attendre 200ms max.
            if (thisItem.parent) { // Si un élément parent existe, configurez le bouton backMenuBP pour revenir à ce niveau
              backMenuBP.Text = thisItem.parent.label;
              backMenuBP.AlternateText = thisItem.parent.link;
              backMenuBP.Visible = true;
            } else { // Sinon, masquez le bouton backMenuBP
              backMenuBP.Visible = false;
            }
          


      } else {
          logTrace(setSubNavigation.name,'debug',`Pas de sous-menu dans ${thisItem}`);
      }

        // Tracer l'exécution de la fonction
        const messageLog = `Sous-Menu : ${JSON.stringify(thisItem)}`;
        logTrace(setSubNavigation.name, 'success', messageLog);

      }  catch (error) {
      // Tracer une erreur dans la fonction
      const messageLog = `${error}`;
      logTrace(setSubNavigation.name, 'error', messageLog);
  
      // Lève l'erreur à la fonction appelante si nécessaire
      throw error;
  }
}

//?-------------------------------------------------------------------------

export function waitForUiElement(elementPath, timeout = 10000){
/**
 * Suivi des modifications :
 *
 * Version   | Date      | Société            | Auteur                               | Modification(s)
 * 01.00.00  | 04/2023   | AgroMousquetaires  | thomas.heurtault@mousquetaires.com   | Version initiale
 *
 * Description de la fonction :
 * Cette fonction attend qu'un élément d'interface utilisateur (UI) soit disponible sur l'écran actif
 * en fonction du chemin de l'élément spécifié (elementPath). La fonction vérifie périodiquement
 * l'existence de l'élément jusqu'à ce qu'il soit trouvé ou que le délai d'attente (timeout) soit dépassé.
 * 
 * @param {string} elementPath - Le chemin de l'élément UI à rechercher sur l'écran actif
 * @param {number} [timeout=10000] - Le délai d'attente maximal en millisecondes (par défaut : 10000 ms)
 * @returns {Promise<Object>} - Retourne une promesse qui résout l'élément trouvé ou rejette une erreur si le délai est dépassé
 * @throws {Error} - Erreur qui peut être levée en cas de problème lors de l'exécution de la fonction
 */

  return new Promise((resolve, reject) => {
    const startTime = Date.now();
    const intervalId =  HMIRuntime.Timers.SetInterval(() => {
      const item = UI.ActiveScreen.FindItem(elementPath);

      if (item) {
        HMIRuntime.Timers.ClearInterval(intervalId);
        resolve(item);
      } else if (Date.now() - startTime > timeout) {
        HMIRuntime.Timers.ClearInterval(intervalId);
        reject(new Error(`L'élément '${elementPath}' n'a pas été trouvé dans le délai imparti (${timeout}ms)`));
      }
    }, 100); // Vérifie toutes les 100 millisecondes 
  });
}

//?-------------------------------------------------------------------------






//! NE PAS COPIER DANS WINCC UNIFIED
logToVsCode = true ;
logToUnified = false ;
logDebug = true ;
let result;

//result = _TemplateFunction("param1", 42);
//console.log("Résultat = ", result);
//configAdmin();
//result = configNavigation();
//console.log("Résultat = ", result);
//initOS();
//logTrace("maFonction", "success", "Message de test");
//result = getGlobalVar("logToVsCode");
//console.log("Résultat = ", result);
//setGlobalVar("logToVsCode", true);
//result = getGlobalVar("logToVsCode");
//console.log("Résultat = ", result);
//setNavigation();
//setSubNavigation('@THT_RD');


  //!

