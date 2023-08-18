const { app, BrowserWindow } = require("electron");

app.on("ready", () => {
  const mainWindow = new BrowserWindow({
    minWidth: 1500,
    minHeight: 1000,
    webPreferences: {
      nodeIntegration: true, // Habilita la integración con Node.js en la página cargada
    },
  });
  // Carga el archivo index.html de tu proyecto Angular
  mainWindow.loadFile(`dist/index.html`);
});
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
app.whenReady().then(() => {
  // Aquí puedes crear la ventana principal y realizar otras configuraciones
});

try {
  require("electron-reloader")(module);
} catch (_) {}
