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