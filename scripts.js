$(document).ready(function(){
  $("form#beepForm").submit(function(event) {
    event.preventDefault();
    var userInput = $("input#sentence").val();
    //var number = array.toString()
    if (userInput === 0) {
         alert("yes!");
       } else (userInput !=5)
         alert("No way, Jose.");

  });
});
