# Note Taking Electron Application

A simple desktop note-taking application built with Electron.js that allows users to create, save, and manage notes with persistent storage.

## Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/ayushvaish2511/electron-note-app.git
cd electron-note-app
```

2. Install dependencies:
```bash
npm install
```

## Running the Application

To start the application in development mode:

```bash
npm start
```

## Features

- Create and edit notes
- Auto-save functionality
- Persistent storage
- List view of all saved notes
- Clean and intuitive user interface

## Troubleshooting

If you encounter any issues while installing dependencies:

1. Delete the `node_modules` folder and `package-lock.json` file
2. Run `npm install` again

If the app fails to start:
1. Make sure all dependencies are installed correctly
2. Check if the required ports are available
3. Run `npm start` with verbose logging:
```bash
npm start -- --verbose
```