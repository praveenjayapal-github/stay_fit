
(function ($) {
   $.fn.qController = function (options) {
      var setting = $.extend({
         qStart: 50,     //quantity where from start to increase or decrease 
         qMax: 100,     //quantity maximum limit to increase
         qMin: 1,        // quantity to minimum limit to decrease
         qSlider: true,  //also show input range slider for increasing or decreasing along with plus and minus buttons
         qStatus: "Quantity: ", //text that will show along with the quantity status
      }, options);

      return this.each(function () {
         var target,
            slider,
            Quantity,
            qControler,
            qMinus,
            qPlus,
            qStat,
            qStop,
            qStartButton;

         qStop = document.getElementById("stop");
         qStartButton = document.getElementById("start");
         target = $(this);
         /* Creating UI elements for quantity controller */
         slider = document.createElement("input");
         qControler = document.createElement("div");

         qStat = document.createElement("em");
         /* Applying settings to the slider and quantity controller */
         Quantity = setting.qStart;

         /* Setting frequency from storage */
         chrome.storage.sync.get('frequency', function (app) {
            // $('#frequency').val(app.frequency);
            // setFrequency(frequency);
            $(qStat).html(app.frequency);
            // alert(app.frequency);
         });

         $(slider).attr({
            'type': 'range',
            'value': Quantity,
            'min': setting.qMin,
            'max': setting.qMax,
         }).addClass("qslider");

         /* Adding classes to minus, plus buttons and controller for later customization */
         $(qMinus).addClass("minus").html("-");
         $(qPlus).addClass("plus").html("+");
         $(qControler).addClass("quantity");
         $(qStat).addClass("q-status");
         
         $(qStat).html(Quantity);

         $(qControler).html(setting.qStatus).append(qMinus).append(qStat).append(qPlus).append("mins").appendTo(this);

         if (setting.qSlider == true) {
            $(slider).insertAfter(qControler);
            //use insertBefore to add slider at the top of controller
         }

         $(qStop).click(function(){
            $(qStat).html(0);
         });

         $(qStartButton).click(function(){
            $(qStat).html(Quantity);
         });

         $(qPlus).click(function () {
            if (Quantity == setting.qMax) {
               alert("The Quantity Reached at Maximum Limit");
               return;
            }
            Quantity += 1;
            $(qStat).html(Quantity);
            $(slider).attr('value', Quantity);

         });
         $(qMinus).click(function () {
            if (Quantity == setting.qMin) {
               alert("The Quantity Reached at Minimum Limit");
               return;
            }
            Quantity -= 1;
            $(qStat).html(Quantity);

         });

         $(slider).on('input', function () {
            var $value = $(this).val().valueOf();
            $(qStat).html($value);
            Quantity = $value * 1;
         });

      });
   };

})(jQuery);
