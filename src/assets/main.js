$(function() {
  $.ajax({
    url: 'https://www.codeschool.com/users/dalthor1974.json',
    dataType: 'jsonp',
    success: function(data) {
      for (var course of data.courses.completed) {
        mydiv = $('<div />', {class: 'course'});
        $('<h3>' + course.title + '</h3>').appendTo(mydiv);
        $('<img src="' + course.badge + '" />').appendTo(mydiv);
        $('<a href="' + course.url + '" target="_blank" class="btn btn-primary">See Course</a>').appendTo(mydiv);
        $('#badges').append(mydiv);
      }
    },
    error: function() {
      alert('AJAX did not work');
    }
  });
});
