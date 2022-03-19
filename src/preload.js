const { ipcRenderer, contextBridge } = require('electron');

const API = {
  setMediaStream: (types) => {
    ipcRenderer.send('set_media_stream', types);
  },
  onReceiveId: (callback) => {
    ipcRenderer.on('send_device_id', (event, id) => callback(id));
  },
};

contextBridge.exposeInMainWorld('api', API);
