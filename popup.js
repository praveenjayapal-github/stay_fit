$(function () {

  $(".example").qController({
    qStart: 30,
    qMax: 60,
    qMin: 1,
    qStatus: "Frequency: "
  });

  var background = chrome.extension.getBackgroundPage();

  $('#start').click(function () {
    var frequency = $('.qslider').val();
    background.setFrequency(frequency);
  });

  $("#stop").click(function () {
    var frequency = 0;
    $('.qslider').val(frequency);
    background.setFrequency(frequency);
  });

  // Setting 1hour as default
  // background.setFrequency(60);
});

