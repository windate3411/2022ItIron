chrome.alarms.create({ periodInMinutes: 45 });

chrome.alarms.onAlarm.addListener(() => {
  chrome.notifications.create({
    type: "basic",
    iconUrl: "./32x32.png",
    message: "Drink some water, my friend",
    title: "Water Time!",
  });
});
