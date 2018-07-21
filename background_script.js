var waterNotification = 'water-notification';

var WAT_INTERVAL = 120;

browser.alarms.create('', { periodInMinutes: WAT_INTERVAL });

browser.alarms.onAlarm.addListener(function(alarm) {
  browser.notifications.create(waterNotification, {
    type: 'basic',
    iconUrl: browser.extension.getURL('icons/icon.png'),
    title: 'Drink Water',
    message: 'Time to drink some Water!!!'
  });
});

browser.browserAction.onClicked.addListener(() => {
  var clearing = browser.notifications.clear(waterNotification);
  clearing.then(() => {
    console.log('cleared');
  });
});
