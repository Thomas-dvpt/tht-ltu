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