$(function() {
  $.ajax({
    url: 'https://www.codeschool.com/users/dalthor1974.json',
    dataType: 'jsonp',
    success: function(response) {
      var courses = response.courses.complete;
      var el = $('#badges');
      for (var i = 0; i < courses.length; i++) {
        var div = $('<div class="course"></div>');
        el.append(div);
        div.append('<h3>' + courses[i].name + '</h3>');
        div.append('<img src="' + courses[i].badge + '" />');
        div.append('<a href="' + courses[i].url + '" target="_blank" class="btn btn-primary">See Course</a>');
      }
    }
  });
});
