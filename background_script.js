// chrome.runtime.onInstalled.addListener(function() {
//     alert("test");
// });

var timmer = "";
// convertMilliseconds(3);
var interval = "";
var notifOptions = {
    type: "basic",
    iconUrl: "48.png",
    title: "Stay Healthy",
    message: "Thanks for updating Stay_Fit app! ***Get-Set-Go***"
};

// chrome.storage.sync.get('frequency', function (app) {
//     $('#frequency').val(app.frequency);
//     setFrequency(frequency);
//   });

// var interval = setInterval(notify, timmer);

function notify() {
    var ran = Math.floor((Math.random() * 18) + 1);
    var image = "Desk_Exercise/".concat(ran.toString().concat(".gif"));
    var notifOptionsImage = {
        type: "image",
        iconUrl: "48.png",
        title: "Stay Healthy",
        message: "It's time to drink some water, relax and do some desk exercise!",
        imageUrl: image,
        requireInteraction : true
      };

    chrome.notifications.create('', notifOptionsImage);
}

function convertMilliseconds(min) {
    //return min * 60 * 1000;
    return min*1000;
}

function setFrequency(frequency) {
    chrome.storage.sync.set({ 'frequency': frequency }, function () {
        if (frequency != 0 & frequency !="") {
            clearInterval(interval);
            timmer = convertMilliseconds(frequency);
            // alert(timmer);
            interval = setInterval(notify, timmer);
        } else {
            clearInterval(interval);
        }
    });
}