const { ipcRenderer } = require('electron');

const webview = document.getElementById('web-view');
const btnClose = document.getElementById('btn-close');
const btnMinimize = document.getElementById('btn-minimize');
const btnMaximize = document.getElementById('btn-maximize');
const btnClearNow = document.getElementById('btn-clear-now');
const loadingBar = document.getElementById('loading-bar');
const toastContainer = document.getElementById('toast-container');

// Window Controls
btnClose.addEventListener('click', () => {
  ipcRenderer.send('window-close');
});

btnMinimize.addEventListener('click', () => {
  ipcRenderer.send('window-minimize');
});

btnMaximize.addEventListener('click', () => {
  ipcRenderer.send('window-maximize');
});

// Toast Notification Helper
function showToast(message, type = 'success') {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <div class="toast-icon">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
        <polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
    </div>
    <span>${message}</span>
  `;
  toastContainer.appendChild(toast);

  requestAnimationFrame(() => {
    toast.classList.add('show');
  });

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 400);
  }, 3000);
}

// Clear site storage & reload uncensored.chat
async function clearStorageAndRefresh() {
  const currentUrl = webview.getURL() || 'https://uncensored.chat/';

  try {
    showToast('Clearing site data for <b>uncensored.chat</b>...');
    
    const res = await ipcRenderer.invoke('clear-site-data', currentUrl);

    if (res.success) {
      showToast('Site data cleared! Reloading page...');
      webview.reload();
    } else {
      showToast(`Error clearing storage: ${res.error}`, 'error');
    }
  } catch (err) {
    console.error('Clear storage error:', err);
  }
}

// Red "Clear Site Data" button
btnClearNow.addEventListener('click', () => {
  clearStorageAndRefresh();
});

// Loading Bar Handlers
webview.addEventListener('did-start-loading', () => {
  loadingBar.style.width = '35%';
});

webview.addEventListener('did-stop-loading', () => {
  loadingBar.style.width = '100%';
  setTimeout(() => {
    loadingBar.style.width = '0%';
  }, 300);
});
