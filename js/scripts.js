$(document).ready(function() {
  $("button#light").click(function() {
    alert("Hi");
    $("body").addClass("light-background");
    $("body").removeClass("dark-background");
  });

  $("button#Dark").click(function() {
    $("body").removeClass("light-background");
    $("body").addClass("dark-background");
  });
});
