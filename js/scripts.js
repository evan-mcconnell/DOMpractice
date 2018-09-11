$(document).ready(function() {
  $('#letter form').submit(function(event) {
    var name = $("input#personInput").val().toUpperCase();
    var color = $("input#colorInput").val();
    var date = $("input#dateInput").val();
    var startTime = $("select#startTimeInput").val();
    var endTime = $("input#endTimeInput").val();


    $(".personname").text(name);
    $(".colorInput").text(color);
    $(".dateInput").text(date);
    $(".startTimeInput").text(startTime);
    $(".endTimeInput").text(endTime);

    $('.addressedletter').show();

    event.preventDefault();
  });

});
