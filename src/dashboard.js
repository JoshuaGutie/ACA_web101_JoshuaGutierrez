//multiple functions can go in below tag
//$(selector).action()

$(function() {
  let $list = $("ul");
  let $addItem = $("#add-item");
  /* "on" attaches an event handler function for one or more events to the selected elements.
  .on( events [, selector ] [, data ], handler )
  */
  $addItem.on("submit", function(e) {
    e.preventDefault();
    let text = $("input[type='text']").val(); //what does .val() do?
    $list.append(`<li>${text}</li>`); // why use template literals. (``)
    $("input[type='text']").val("");
  });
  $list.on("click", "li", function() {
    let $this = $(this);
    $this.remove();
  });
  //New
});

function getLocation() {
  if (navigator.geolocation) {
    console.log("getLocation");
    navigator.geolocation.getCurrentPosition(displayPosition);
  } else {
    $location.innerHTML = "Location Not Available";
  }
}

function displayPosition(position) {
  console.log(position);
  let $location = $("#location");
  console.log($location);
  $location.text(
    "Longitude:" +
      position.coords.longitude +
      "Latitude:" +
      position.coords.longitude
  );
}
