(function($) {
  'use strict';

  $.fn.twitterSlider = function(options) {
    var $root = $('<ul></ul>'), index=0, $target = this.first(), settings;

    settings = $.extend({
      'delay': 5000
    }, options);

    function slideFn() {
      var $next, $list = $root.children('li');

      $list.eq(index).removeClass('active');

      //Next or first
      index = ( $list.eq(index+1).length === 0 ? 0 : index + 1 );

      $list.eq(index).addClass('active');
    }

    function onComplete(json) {
      if (json && json.results) {
        $.each(json.results, function(i, tweet) {
          var html = [
            '<li>',
            '<img src="'+tweet.profile_image_url+'" />',
            '<span class="name">'+tweet.from_user_name+'</span>',
            '<span class="tweet">'+tweet.text+'</span>',
            '</li>'
          ];
          $root.append( html.join('') );
        });
      }

      //Append the root
      $target.append($root);

      //Kickoff an interval
      slideFn();
      setInterval(slideFn, settings.delay);
    }

    $.getJSON('http://search.twitter.com/search.json?q=%2390sfriday&callback=?', onComplete);

    return this;
  };
})(jQuery);
