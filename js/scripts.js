// // Back-end //

// function Tickets(age, time, movie) {
//   this.age = age,
//   this.time = time,
//   this.movie = movie
// }

// Insert Prototype here //


$(document).ready(function() {
  $("form#movies").submit(function(event) {
      event.preventDefault();
    var price = $("input:radio[name=m]:checked").val();
   
    if (price === 4) {
      $("#lowest").show();
      $("#low").hide();
      $("#regLow").hide();
      $("#regHigh").hide();
    } else if (price === 5) {
        $("#lowest").hide();
        $("#low").show();
        $("#regLow").hide();
        $("#regHigh").hide();
    } else if (price === 11) {
        $("#lowest").hide();
        $("#low").hide();
        $("#regLow").show();
        $("#regHigh").hide();
    } else 
          $("#lowest").hide();
          $("#low").hide();
          $("#regLow").hide();
          $("#regHigh").show();
  });
});