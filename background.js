'use strict';

// Logout context menu item
const CLEAR_LOCAL_STORAGE = "CLEAR_LOCAL_STORAGE";

function getword(info,tab) {
  if (info.menuItemId !== CLEAR_LOCAL_STORAGE) {
    return;
  }  
  chrome.tabs.query({active:true}, function(tabs) {
    chrome.tabs.executeScript(tabs[0].id, {code: 'localStorage.clear();'});
    chrome.tabs.executeScript(tabs[0].id, {code: 'window.location.reload()'});
});
}

chrome.contextMenus.create({
  "title": "Clear local storage",
  "id": CLEAR_LOCAL_STORAGE, 
  "contexts": ["all"], 
  "type": "normal"
});

chrome.contextMenus.onClicked.addListener(getword)
