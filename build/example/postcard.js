(function() {
  var selectState;

  selectState = function(state) {
    $('li.state').removeClass('selected');
    $("li." + state).addClass('selected');
    $('.img').removeClass('selected');
    return $(".img." + state).addClass('selected');
  };

  $(function() {
    var images, state, states;
    states = ['pa', 'md', 'ca', 'ny'];
    images = (function() {
      var _i, _len, _results;
      _results = [];
      for (_i = 0, _len = states.length; _i < _len; _i++) {
        state = states[_i];
        _results.push("/images/" + state + ".jpg");
      }
      return _results;
    })();
    $.getJSON('http://www.geoplugin.net/json.gp?jsoncallback=?', function(data) {
      state = data.geoplugin_regionCode.toLowerCase();
      if (states.indexOf(state) !== -1) {
        return selectState(state);
      } else {
        return selectState('pa');
      }
    });
    $('.img a').mouseover(function(e) {
      $('#flip').css('opacity', 0);
      return $('#note').css('opacity', 1);
    });
    $('.img a').click(function(e) {
      return e.preventDefault();
    });
    return $('li.state a').click(function(e) {
      e.preventDefault();
      return selectState($(e.target).text().toLowerCase());
    });
  });

}).call(this);
