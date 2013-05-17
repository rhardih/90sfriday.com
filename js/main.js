;(function() {
  location.hash = "#¸¸♬·¯·♩¸¸♪·¯·♫¸¸  90sFriday  ¸¸♬·¯·♩¸¸♪·¯·♫¸¸";

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

    if (it_is_friday) {
      message.html("Yeah baby!");
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
  });
})();
