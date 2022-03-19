const { ipcRenderer, contextBridge } = require('electron');
const { writeFile } = require('fs');

const API = {
  setMediaStream: (types) => {
    ipcRenderer.send('set_media_stream', types);
  },
  onReceiveId: (callback) => {
    ipcRenderer.on('send_device_id', (event, source) => callback(source));
  },
  getSavePath: (options) => ipcRenderer.invoke('get_saving_path', options),
  saveFile: async (path, blob) => {
    const buffer = Buffer.from(await blob.arrayBuffer());
    writeFile(path, buffer);
  },
};

contextBridge.exposeInMainWorld('api', API);
