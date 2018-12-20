const { app, BrowserWindow, ipcMain, Menu, dialog } = require('electron')
const remote = require("electron").remote;
const axios = require('axios');
const fetch = require('node-fetch');
const path = require('path')
const url = require('url')
const automate = require('./automate-form');
const {webUrl, demoUrl, UserDetailUrl} = require('./config');
const webId = require('./data');

process.env.NODE_ENV = 'production';


let win;


function createWindow () {
  win = new BrowserWindow({fullscreen: true, show:false});

  const template = [
    {
      label: 'Home',
      submenu: [
        {label: 'Go to home',
      click () {
        win.loadFile('index.html')
       }}
      ]
    },{
    role: 'window',
    submenu: [
      {role: 'minimize'},
      {role: 'close'}
    ]
  }]

    const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu)

  win.loadFile('index.html')

  // win.webContents.openDevTools()

  win.on('closed', () => {
    
    win = null
  })
  
}

ipcMain.on('url-value', (event, value) => {
  
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'get-id.html'),
    protocol: 'file:',
    slashes: true
  }));
  ipcMain.on('id-value', (event, id) => {
    fetchData(id, value);
  });
});

async function fetchData(id, value) {
  try {
    var data = await fetch(`${UserDetailUrl}/${id}`)
    .then(res => res.json()).then(json => {
         return json;
       }).catch(error => {
         console.log("error");
        //  dialog.showErrorBox("Error", "Invalid user ID");
     });
     renderSite(value, data[0].details);

  } catch(exception) {
    dialog.showErrorBox("Error", "Invalid user ID");
  }
}

function renderSite(value, data) {

  win.loadURL(value);
 
  win.webContents.on('did-finish-load', ()=>{

  let code = automate(data, webId)

   win.webContents.executeJavaScript(code);  
 });
  // win.webContents.on('did-start-loading',windowLoading);
  // win.webContents.on('did-stop-loading',WindowsReady);

  // function WindowsReady() {
  //     let code = automate(data, webId)
  //     win.webContents.executeJavaScript(code);  
  // }
  // function windowLoading() {
  //   win.loadFile('loader.html')
  // }
}

app.on('ready', createWindow)


app.on('window-all-closed', () => {
  
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  
  if (win === null) {
    createWindow()
  }
})
