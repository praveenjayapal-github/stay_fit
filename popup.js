$(function () {

  var notifOptions = {
    type: "basic",
    iconUrl: "48.png",
    title: "Stay Healthy",
    message: "Thanks for setup Stay_Fit app! ***Get-Set-Go***"
};

  $(".example").qController({
    qStart: 45,
    qMax: 90,
    qMin: 1,
    qStatus: "Timer : "
  });

  var background = chrome.extension.getBackgroundPage();

  $('#start').click(function () {
    var frequency = $('.qslider').val();
    background.setFrequency(frequency);
    alertMessage(notifOptions);
  });

  $("#stop").click(function () {
    var frequency = 0;
    $('.qslider').val(frequency);
    background.setFrequency(frequency);
  });


  // Setting 1hour as default
  // background.setFrequency(60);
});

function alertMessage(notifOptions){
  chrome.notifications.create('', notifOptions);
}
