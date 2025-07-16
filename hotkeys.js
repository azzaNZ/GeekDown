document.addEventListener("DOMContentLoaded", function() {
  // Register event listeners for shortcuts
  if (window.electronAPI) {
    window.electronAPI.onNew(() => {
      if (typeof createNewDocument === 'function') {
        createNewDocument();
      }
    });

    window.electronAPI.onOpen(() => {
      if (typeof openFile === 'function') {
        openFile();
      }
    });

    window.electronAPI.onSave(() => {
      if (typeof saveToLocalStorage === 'function') {
        saveToLocalStorage();
      }
    });

    window.electronAPI.onSaveAs(() => {
      if (typeof saveAsMarkdownFile === 'function') {
        saveAsMarkdownFile("document.md");
      }
    });

    window.electronAPI.onClose(() => {
      if (typeof confirmAndCloseApplication === 'function') {
        confirmAndCloseApplication();
      }
    });
  }
});
