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
          const thisPopup = UI.SysFct.OpenScreenInPopup(`POP_SubNavigation`,screenName,false,``,0, 60 ,false,undefined);

    
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