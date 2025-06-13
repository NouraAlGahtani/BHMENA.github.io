$(document).ready(function() {
  $('.ransom-note').each(function () {
    var words = $(this).text().split(" ");
    var $this = $(this);
    $this.empty();

    $.each(words, function (i, word) {
      $this.append("<span class='words'>" + word + "</span> ");
    });

    $('.ransom-note .words').each(function () {
      var characters = $(this).text().split("");
      var $word = $(this);
      $word.empty();

      $.each(characters, function (i, char) {
        $word.append("<span>" + char + "</span>");
      });
    });
  });
});
