function myFunction (){
    alert("Each turn the player gets a chance to roll the dice. If the player gets 1 on any of the dice he earns nothing and another player gets his turn. On getting 2-6 on the dice, player's sum is being added to his round score, until he decides to stash his current score. If the player stashed his score, the other player get points wins the game.If a player gets 6 on any dice twice in a row, the player loses all the points from his current and overall scores. ");
}

//user interface
function player(){
  this.name=name;
}

function myFunc() {
    location.reload();
}
$("input:text").ready(function () {
    $("#BEGIN").click(() => {
        var firstName = $("input:text#contenderOne").val();
        $("#1p").text("CONTENDER 1: " + firstName);

        var secondName =$("input:text#contenderTwo").val();
        $("#2p").text("CONTENDER 2: " + secondName);

    });
});

var bit1all = 0
var bit2all= 0
var Score1 = 0
var Score2 = 0
var outhold = 0
var inhold = 0




$(document).ready(function () {
  $("#roll1").click(() => {
    var random1 = Math.floor((Math.random() * 6) + 1);
    $("#span1").text("DICE ROLL: " + random1);

    if (random1 === 1) {
      bit1all = 0;
      $("#bitOne").text(" TOTAL: " + bit1all);
    } else {
      bit1all = random1 + bit1all;
      $("#bitOne").text(" TOTAL: " + bit1all);
    }
  });
});


$(document).ready(function () {
    $("#1hold").click(() => {
      outhold = bit1all + Score1 + outhold;
      bit1all = 0;
      $("#bitOne").text("Total score: " + outhold);
    });
  });

  
$(document).ready(function () {
  $("#roll2").click(() => {
    var random2 = Math.floor((Math.random() * 6) + 1);
    $("#span2").text("DICE ROLL: " + random2);

    if (random2 === 1) {
      bit2all = 0;
      $("#bitTwo").text(" TOTAL: " + bit2all);
    } else {
      bit2all = random2 + bit2all;
      $("#bitTwo").text(" TOTAL: " + bit2all);
    }
  });
});

$(document).ready(function () {
    $("#2hold").click(() => {
      inhold = bit2all + Score2 + inhold;
      bit2all = 0;
      $("#bitTwo").text("Total score: " + inhold);
    });
  });
  
  var turnPlayer = function(){
    if (playerOne.status == "enabled") {
      playerOne.status = "disabled";
      playerTwo.status = "enabled";
      $(".one-turn").hide();
      $(".two-turn").show();
    } else if (playerTwo.status == "enabled") {
      playerOne.status = "enabled";
      playerTwo.status = "disabled";
      $(".two-turn").hide();
      $(".one-turn").show();
    }
  }

  (document).ready(function () {
    $("#holdTwo").click(() => {
      inhold = bit2all + Score2 + inhold;
      round2Total = 0;
      $("#Score2").text("Total score: " + inhold);
      $("#roll1").hide();
      $("#1hold").hide();
      $("#roll2").show();
      $("#2hold").show();
      if (Score1 === 100)  {
        alert("WON!")
      }
    });
  });
  
    
