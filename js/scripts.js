function myFunction (){
    alert("Each turn the player gets a chance to roll the dice. If the player gets 1 on any of the dice he earns nothing and another player gets his turn. On getting 2-6 on the dice, player's sum is being added to his round score, until he decides to stash his current score. If the player stashed his score, the other player get points wins the game.If a player gets 6 on any dice twice in a row, the player loses all the points from his current and overall scores. ");
}
$("input:text").ready(function () {
    $("#BEGIN").click(() => {
        var firstName = $("input:text#contenderOne").val();
        $("#1p").text("CONTENDER 1: " + firstName);

        var secondName =$("input:text#contenderTwo").val();
        $("#2p").text("CONTENDER 2: " + secondName);

    });
});


var round1Total = 0
var round2Total = 0
var totalScore1 = 0
var totalScore2 = 0
var hold1 = 0
var hold2 = 0


$(document).ready(function () {
  $("#roll1").click(() => {
    var random1 = Math.floor((Math.random() * 6) + 1);
    $("#outputOne").text("DICE ROLL: " + random1);

    if (random1 === 1) {
      round1Total = 0;
      $("#roundOne").text("ROUND TOTAL: " + round1Total);
    } else {
      round1Total = random1 + round1Total;
      $("#roundOne").text("ROUND TOTAL: " + round1Total);
    }
  });
});


$(document).ready(function () {
  $("#roll2").click(() => {
    var random2 = Math.floor((Math.random() * 6) + 1);
    $("#outputTwo").text("DICE ROLL: " + random2);

    if (random2 === 1) {
      round2Total = 0;
      $("#roundTwo").text("ROUND TOTAL: " + round2Total);
    } else {
      round2Total = random2 + round2Total;
      $("#roundTwo").text("ROUND TOTAL: " + round2Total);
    }
  });
});

