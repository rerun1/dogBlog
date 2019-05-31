$(document).ready (function(){
  $("button#darkButton").click (function(){
    $("body").removeClass("lightBackground");
    $("button#lightButton").toggle();
    $("button#darkButton").toggle();
    $("body").addClass("darkBackground");
    // remember no period before class name when adding it as part of the addClass function
  });
  $("button#lightButton").click (function(){
    $("body").removeClass("darkBackground");
    $("button#darkButton").toggle();
    $("button#lightButton").toggle();
    $("body").addClass("lightBackground");
  });
});
