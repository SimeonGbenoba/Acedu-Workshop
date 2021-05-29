//$(document).ready() {
  // Our code will go here.
  //$ stands for jquery
  //document stands for Document Object Model Dom
  //() stands for Function
  //The above function is anonymous cause it does dont have a name
//});
//$(document).ready(function() {

  //alert($("#css-items").text());
//});
$(document).ready(function() {
  $("#goal-button").click(function(){
    $("#goal-list").append("<li class='list-item'>" +$("#new-goal").val()+"</li>");
    $("#new-goal").val("");
});
});
