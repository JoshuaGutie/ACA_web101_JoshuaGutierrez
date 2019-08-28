$(document).ready(function() {
  var data = {
    MinsOfSleep: 0,
    totalCurrent: 0,
    sleepPace: 10
  };

  setInterval(speed, 1000);

  function speed() {
    data.sleepPace += data.totalCurrent;
    data.MinsOfSleep += data.totalCurrent; //minsOfSleep not increasing (idea being that as you upgrade the Z's will be selected faster, similar to the autoclick on cookie clicker)
    /*$("#image-text").fadeIn(1200, function() {
        $("#image-text").fadeout(1200);
        */
    //How do I make the "image-text" ID inside the image fade in and fade out?
    updateReport();
  }
  function updateReport() {
    $(totalCurrent).text(Math.floor(data.totalCurrent));
    $("#sleepPace").text(data.sleepPace); // why use((data.sleepPace / 70.4).toFixed(3));
  } //why does my Sleep pace increase with each click?

  $("#image").click(function() {
    data.sleepPace++;
    data.totalCurrent++;
    updateReport();
  });

  $(".button").click(function() {
    var addVal = $(this).data("cost");
    if ($(this).data("cost") < data.totalCurrent) {
      data.totalCurrent -= parseFloat(
        $(this)
          .data("cost")
          .toPrecision(2)
      );
      data.sleepPace += parseFloat($(this).data("val")); //What do parseInt and parseFloat do?
      $(this)
        .children("span")
        .html(
          parseInt(
            $(this)
              .children("span")
              .html() * 1.15
          )
        );
      $(this).data("cost", parseInt($(this).data("cost") * 1.15));
    }
    updateReport();
  });
});
