const { app, BrowserWindow } = require('electron')
const path = require('path')
var windowManager = require('electron-window-manager');


// });
app.on('ready', function() {
    windowManager.init({
        'devMode': false,
        'defaultWindowTitle': 'BlockEduc',
    })
    var Load = windowManager.createNew('load', 'BlockEduc', 'file://' + __dirname + '/load.html', false, {
        'width': 300,
        'height': 350,
        'showDevTools': false,
        'DevTools': false,
        'menu': null,
        'transparent': true,
        'frame': false,
        'resizable': true,
        'webPreferences': {
            'nodeIntegration': true,
        },
    });
    Load.open();
});

app.on('window-all-closed', function() {
    if (process.platform !== 'darwin') app.quit()
})