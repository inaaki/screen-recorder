const { ipcRenderer, contextBridge } = require('electron');

const API = {
  getSources: (types) =>
    ipcRenderer.invoke('get_sources', types),
};

contextBridge.exposeInMainWorld('api', API);
