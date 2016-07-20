const electron = require('electron');
const exec = require('child_process').exec;
// Module to control application life.
const {app} = electron;
// Module to create native browser window.
const {BrowserWindow} = electron;

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win;

function createWindow() {
  
  // Create a subprocess to initialize the Jupyter Lab.
  exec('jupyter lab --no-browser', function callback(error, stdout, stderr){
    console.log(stdout)

  });

  // Instantiate a window object after a 5 second delay, to allow for the Jupyter server to start up.
  setTimeout(function() { 
    win = new BrowserWindow({width: 800, height: 600});
    win.loadURL(`file://${__dirname}/index.html`);
    win.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null;
    });
  }, 5000);

}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow();
  }
});