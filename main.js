const { app, BrowserWindow, ipcMain, session } = require('electron');
const path = require('path');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 850,
    minWidth: 800,
    minHeight: 600,
    title: 'GPT Pro',
    icon: path.join(__dirname, 'assets', 'logo.png'),
    frame: false,
    backgroundColor: '#000000',
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      webviewTag: true
    }
  });

  mainWindow.loadFile('index.html');
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});

// Window Control IPC Handlers
ipcMain.on('window-minimize', () => {
  if (mainWindow) mainWindow.minimize();
});

ipcMain.on('window-maximize', () => {
  if (mainWindow) {
    if (mainWindow.isMaximized()) {
      mainWindow.unmaximize();
    } else {
      mainWindow.maximize();
    }
  }
});

ipcMain.on('window-close', () => {
  if (mainWindow) mainWindow.close();
});

// IPC Handler to clear site storage for origin
ipcMain.handle('clear-site-data', async (event, targetUrl) => {
  try {
    const urlObj = new URL(targetUrl || 'https://uncensored.chat/');
    const origin = urlObj.origin;

    const defaultSession = session.defaultSession;
    
    // Clear all storage types matching Chrome DevTools "Clear site data"
    await defaultSession.clearStorageData({
      origin: origin,
      storages: [
        'appcache',
        'cookies',
        'filesystem',
        'indexdb',
        'localstorage',
        'shadercache',
        'websql',
        'serviceworkers',
        'cachestorage'
      ]
    });

    await defaultSession.clearCache();

    return { success: true, origin };
  } catch (err) {
    console.error('Failed to clear storage:', err);
    return { success: false, error: err.message };
  }
});
