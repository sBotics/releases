const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
var windowManager = require("electron-window-manager");

var Load = null;

app.on("ready", function() {
    windowManager.init({
        devMode: false,
        defaultWindowTitle: "BlockEduc",
    });
    Load = windowManager.createNew(
        "load",
        "BlockEduc",
        "file://" + __dirname + "/routes/load.html",
        false, {
            width: 300, //300 
            height: 350, //350
            showDevTools: false,
            DevTools: false,
            menu: null,
            transparent: true,
            frame: false,
            resizable: false,
            webPreferences: {
                nodeIntegration: true,
                contextIsolation: false,
                enableRemoteModule: true,
            },
        }
    );
    Load.open();
});

app.on("window-all-closed", function() {
    if (process.platform !== "darwin") app.quit();
});

ipcMain.on('app_version', (event) => {
    event.sender.send('app_version', { version: app.getVersion() });
});