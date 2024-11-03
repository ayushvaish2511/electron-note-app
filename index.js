const { app, BrowserWindow, ipcMain } = require('electron');
const fs = require('fs');
const path = require('path');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    // width: 800,
    // height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'src', 'renderer.js'),
      contextIsolation: false,
      nodeIntegration: true,
    },
  });
  mainWindow.maximize();
  mainWindow.loadFile(path.join(__dirname, 'src', 'index.html'));
}

app.on('ready', createWindow);

ipcMain.handle('save-note', (event, note) => {
  const notes = loadNotes();
  notes.push(note);
  saveNotes(notes);
});

ipcMain.handle('load-notes', () => {
  return loadNotes();
});

function loadNotes() {
  const filePath = path.join(app.getPath('userData'), 'notes.json');
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  } catch (error) {
    return [];
  }
}

function saveNotes(notes) {
  const filePath = path.join(app.getPath('userData'), 'notes.json');
  fs.writeFileSync(filePath, JSON.stringify(notes));
}
