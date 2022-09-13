let isToggled = false;

chrome.action.onClicked.addListener(async (tab) => {
  try {
    if (!isToggled) {
      await chrome.scripting.insertCSS({
        target: {
          tabId: tab.id,
        },
        css: `body { filter: blur(10px); }`,
      });
      isToggled = true;
    } else {
      await chrome.scripting.removeCSS({
        target: {
          tabId: tab.id,
        },
        css: `body { filter: blur(10px); }`,
      });
      isToggled = false;
    }
  } catch (err) {
    console.error(`failed to insert CSS: ${err}`);
  }
});

chrome.tabs.onActivated.addListener(async function (activeInfo) {
  await chrome.scripting.removeCSS({
    target: {
      tabId: activeInfo.tabId,
    },
    css: `body { filter: blur(10px); }`,
  });
  isToggled = false;
});
