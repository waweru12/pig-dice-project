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