export function waitUiElement(elementPath, timeout = 10000) {
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