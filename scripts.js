$(document).ready(function(){
  $("form#beepForm").submit(function(event) {
  event.preventDefault();
  var userInput = $("input#sentence").val();
  //var ones = ["1", "10", "11", "12","13", "14", "15", "16", "17", "18", "19", "21"]
  for (var i = 1; i <= 121; i ++) {
    alert(i);
    if ( i % 3 == 0)
      alert("beep!");
  }
    //else if (i === 0) {
      //alert("boop!");

});
});
