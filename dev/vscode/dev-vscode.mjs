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
//! NE PAS MODIFIER LES VALEURS ICI. VOIR LES SCRIPTS config*.js
// Variables de configuration pour activer/désactiver les logs
export let logToVsCode ; // Activer les logs dans la console VSCode
export let logToUnified ; // Activer les logs dans Unified RTIL
export let logDebug ; // Activer les logs de débogage

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
        const menu = [
            { label: 'Accueil', link: '@Home', access: 'HMI Monitor' },
            {
             label: 'THT_RD', link: '@THT_RD', access: 'HMI Administrator', dropdown: [
                      { label: 'Divers', link: '_Divers', access: 'HMI Administrator' },
                      { label: 'Archivage', link: 'Test_Archivage', access: 'HMI Administrator' },
                      { label: 'OS', link: 'admin_OS', access: 'HMI Administrator' },],},
            { label: 'label', link: 'link', access: '' },
        ];

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
//?-------------------------------------------------------------------------
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
    const prefixBP = `BP_Nav_`;
    const maxBP = 6 ; // Nombre de boutons maximum dans la vue @Navigation"

    if (menu.length > maxBP) {
        logTrace(setNavigation.name, 'warning', "Le nombre de menus est supérieur au nombre de boutons disponibles.");
    }

    try {
 
      //TODO :  Écrire le code ici
        for (let i = 0; i <= maxBP; i++) {
            const thisBP = Screen.FindItem(`${prefixBP}${i}`);
            if (menu.length > i){
                let thisLabel   = menu[i].label;
                let thisLink    = menu[i].link;
                //let thisAccess  = menu[i].access; //! Ne fonctionne pas pour le moment
                thisBP.Text = thisLabel;
                thisBP.AlternateText = thisLink; // TODO : Améliorer le stockage du lien. defineProperty() ne marchee pas 
                //thisBP.Authorization = thisAccess; //! Ne fonctionne pas pour le moment
                thisBP.Visible = true;
            
                if ('dropdown' in menu[i]) {
                let thisSubMenu = menu[i].dropdown;
                thisBP.Graphic = HMIRuntime.Resources.Graphics(`arrow_drop_down_white_48dp`);
                thisBP.AlternateGraphic = HMIRuntime.Resources.Graphics(`arrow_drop_down_black_48dp`);
                }else{
                thisBP.Graphic = undefined;
                thisBP.AlternateGraphic = undefined;}
            
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
    
        const menu = await configNavigation();
        let thisItem = null;
        const prefixBP = `BP_SubNav_`;
        const maxBP = 8 ; // Nombre de boutons maximum dans la vue "templateSubNavigation"
        logTrace(setSubNavigation.name,'debug',`itemLink = ${linkToFind}, thisItem = ${thisItem},`);

    try {
        for (const menuItem of menu) {
            if (menuItem.link === linkToFind) {
              thisItem = menuItem;
              logTrace(setSubNavigation.name,'debug',`thisItem = ${linkToFind}, thisItem =  ${JSON.stringify(thisItem)},`);
              break;
            }}
            if (!thisItem) {
              logTrace(setSubNavigation.name, 'warning', `Aucun élément de menu trouvé pour le lien ${linkToFind}`);
            return;
            }

        if ('dropdown' in thisItem) {
            const thisDropDown = thisItem.dropdown;
            logTrace(setSubNavigation.name,'debug',`Il y a un sous-menu dans  ${linkToFind} :  ${JSON.stringify(thisDropDown)}`);
            const screenToOpen = `templateSubNavigation`
            await UI.SysFct.OpenScreenInPopup(`SubNavigation`,screenToOpen,false,``,200, 200 ,false,undefined);
            const myScreen = HMIRuntime.UI.FindItem(`/SubNavigation`);
            for (let i = 0; i < maxBP; i++) {
                
                const thisBP =  myScreen.FindItem(`${prefixBP}${i}`);
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
                    thisBP.Graphic = HMIRuntime.Resources.Graphics(`arrow_drop_down_white_48dp`);
                    thisBP.AlternateGraphic = HMIRuntime.Resources.Graphics(`arrow_drop_down_black_48dp`);
                    }else{
                    thisBP.Graphic = undefined;
                    thisBP.AlternateGraphic = undefined;}
                
                }else{
                thisBP.Visible = false;
                }}
             
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

