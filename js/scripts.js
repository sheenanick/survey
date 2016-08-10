$(document).ready(function() {
  $("#survey form").submit(function(event) {
    var nameInput = $("input#name").val();
    var genderInput = $("input:radio[name=gender]:checked").val();
    var birthdayInput = $("#birthday").val();
    var colorInput = $("#color").val();
    var foodInput = $("input#food").val();
    var musicInput = $("#music").val();

    $(".name").text(nameInput);
    $(".gender").text(genderInput);
    $(".birthday").text(birthdayInput);
    $(".color").text(colorInput);
    $(".food").text(foodInput);
    $(".music").text(musicInput);

    $("#results").show();
    event.preventDefault();
  });

  $("#reset").click(function(event) {
    $("#results").hide();
  });

});
