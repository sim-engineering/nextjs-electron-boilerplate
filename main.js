const { app, BrowserWindow } = require("electron");
const { join } = require("path");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    fullscreen: true,
    autoHideMenuBar: true,
    menuBarVisible: false,
    resizable: false,
    closable: true,
    webPreferences: {
      nodeIntegration: true,
    },
    allowRunningInsecureContent: true,
  });

  // mainWindow.loadURL("https://test-meseum.netlify.app/");
  // mainWindow.loadURL("http://localhost:3000/");
  mainWindow.loadFile(join(__dirname, "./out/index.html"));

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}

console.log("Log: ", join(__dirname, "./out/index.html"));

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});
