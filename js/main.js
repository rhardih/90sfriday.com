;(function() {
  function pluralize(singular, plural, count) {
    if (count != 1) {
      return plural;
    } else {
      return singular;
    }
  }

  $(function () {
    var $message = $("#message");
    var here_and_now = moment();
    var weekday = here_and_now.day()
    var days_until_friday = weekday == 6 ? 6 : 5 - weekday;

    var it_is_friday = weekday == 5;

    if (it_is_friday || true) {
      location.hash = "#¸¸♬·¯·♩¸¸♪·¯·♫¸¸  90sFriday  ¸¸♬·¯·♩¸¸♪·¯·♫¸¸";

      $(".spacer").hide();
      $("body").removeClass("fullheight").css("padding", "40px");
      $("html").removeClass("fullheight");
      $("#banner").css("margin-top", "0");
      $("#soundrop").attr(
        "src", "http://play.soundrop.fm/s/WNCP6erFQMFSEImS#"
      ).css("display", "block");
      $("#dance").css("display", "block");
    } else {
      var next_friday = here_and_now.add('days', days_until_friday).hour(0).minute(0).second(0);

      function updateTimer() {
        var time_till_next_friday = next_friday - moment();
        var duration = moment.duration(time_till_next_friday);
        var days = duration.days();
        var hours = duration.hours();
        var minutes = duration.minutes();
        var seconds = duration.seconds();
        var message = [
          "Starts in",
          days, pluralize("day", "days", days),
          hours, pluralize("hour", "hours", hours),
          minutes, pluralize("minute", "minutes", minutes),
          "and",
          seconds, pluralize("second", "seconds", seconds)
        ].join(" ");

        $message.html(message);
      }

      updateTimer();
      setInterval(updateTimer, 1000);
    }

    var dancing;

    function step() {
      var notes = document.location.hash.substr(1).split(/([\s]+[a-zA-Z0-9]+[\s]+)/)
      notes[2] = notes[2] + notes[0][0]
      notes[0] = notes[0].substr(1);
      notes[0] = notes[0] + notes[2][0];
      notes[2] = notes[2].substr(1);
      history.replaceState(null, null, document.location.origin + '#' + notes.join(''))
    }

    function dance() {
      if(dancing) {
        clearInterval(dancing);
        dancing = null;
      } else {
        dancing = setInterval(step, 300);
      }
    }

    $("#dance").on("click", function() {
      dance();
    });
  });
})();
