const { ipcRenderer } = require('electron');

const noteList = document.getElementById('note-list');
const noteText = document.getElementById('note-text');
const saveNoteButton = document.getElementById('save-note');

let notes = [];
let currentNoteIndex = null;

async function loadNotes() {
  notes = await ipcRenderer.invoke('load-notes');
  renderNoteList();
}

function renderNoteList() {
  noteList.innerHTML = '';
  notes.forEach((note, index) => {
    const listItem = document.createElement('li');
    listItem.innerText = `Note ${index + 1}`;
    listItem.onclick = () => displayNoteInTextArea(index);
    noteList.appendChild(listItem);
  });
}

function displayNoteInTextArea(index) {
  currentNoteIndex = index;
  noteText.value = notes[index];
}

async function saveNote() {
  const noteContent = noteText.value;
  if (currentNoteIndex === null) {
    notes.push(noteContent);
  } else {
    notes[currentNoteIndex] = noteContent;
  }
  await ipcRenderer.invoke('save-note', noteContent);
  loadNotes();
  resetTextArea();
}

function resetTextArea() {
  noteText.value = '';
  currentNoteIndex = null;
}

saveNoteButton.onclick = saveNote;

loadNotes();
