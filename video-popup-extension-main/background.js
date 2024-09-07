// Sets up page

//background.js
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'textHighlighted') {
    chrome.windows.getAll({populate: true}, (windows) => {
      let popupExists = windows.some(window => window.type === 'popup' && window.tabs.some(tab => tab.url.includes('popup.html')));
      if (!popupExists) {
        chrome.windows.create({
          url: chrome.runtime.getURL('popup.html'),
          type: 'popup',
          width: 320,
          height: 240
        });
      }
    });
  }
});
