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
      const screenName = "@SubNavigation";
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
          const thisPopup = UI.SysFct.OpenScreenInPopup(`POP_SubNavigation`,screenName,false,``,0, 60 ,true,undefined);

    
          for (let i = 0; i < maxBP; i++) {
              const thisBP = await waitUiElement(`/POP_SubNavigation/${prefixBP}${i}`, 5000); // Attendre 5 secondes max.   
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
                  thisBP.Graphic = HMIRuntime.Resources.Graphics(`GraphicCollection.arrow_drop_down_white_48dp`);
                  thisBP.AlternateGraphic = HMIRuntime.Resources.Graphics(`GraphicCollection.arrow_drop_down_black_48dp`);
                  }else{
                  thisBP.Graphic = undefined;
                  thisBP.AlternateGraphic = undefined;}
              
              }else{
              thisBP.Visible = false;
              }
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