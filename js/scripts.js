$(document).ready(function(){
  $("form#survey").submit(function(event){
    event.preventDefault();
    $("#results").empty();
    $("#results").show();
    $("#yourFortune").show();
    $("#pizza").hide();
    $("#tania").show();


    var userResponses = [];
    $("input:checkbox[name=survey]:checked").each(function(){
      var surveyResults = parseInt($(this).val());
      userResponses.push(surveyResults);
    });
    console.log(userResponses);
    var goodCounter = 0;
    var badCounter = 0;
    for (var i = 0; i < userResponses.length; i++) {
      if (userResponses[i] === 1) {
        badCounter++;
      }else if (userResponses[i] === 2) {
        goodCounter++;
      }

    }
    var finalCounter = goodCounter - badCounter;
    if (finalCounter === -3) {
      $("#results").text("You are cursed to die alone and unsatisfied, a shame unto your family =(")
    }
    else if (finalCounter === -2) {
      $("#results").text("You will be struck by a car or bus or maybe lightning, but you will probably live.")
    }
    else if (finalCounter === -1) {
      $("#results").text("you will develop diabetes or Lycanthropy.")
    }
    else if (finalCounter === 0) {
      $("#results").text("Everything seems ok I guess.")
    }
    else if (finalCounter === 1) {
      $("#results").text("You will find money or delicious food on the ground")
    }
    else if (finalCounter === 2) {
      $("#results").text("You are cursed... with a blessed day")
    }
    else if (finalCounter === 3) {
      $("#results").text("You will literally live forever and actually enjoy it almost all the time.")
    }
    console.log(finalCounter);
  });
});
