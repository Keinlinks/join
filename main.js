const { app, BrowserWindow } = require("electron");
const electronReload = require("electron-reload");

const pathToWatch = `file://${__dirname}/dist`;

electronReload(__dirname, {
  electron: require(`${__dirname}/node_modules/electron`),
  hardResetMethod: "exit",
  forceHardReset: true,
  pathToWatch: [pathToWatch],
});
app.on("ready", () => {
  const mainWindow = new BrowserWindow({
    minWidth: 1500,
    minHeight: 1000,
    webPreferences: {
      nodeIntegration: true, // Habilita la integración con Node.js en la página cargada
    },
  });
  mainWindow.setMenu(null);
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
