$(document).ready(function() {

    //Append a random number from 19-120 to the #numberToMatch <div>
    function randomIntFromInterval(19, 120) {
        return Math.floor(Math.random() * (101 + 1) + 19);
    }

    // $("#numberToMatch").append(randomIntFromInterval);

    document.getElementById("numberToMatch").innerHTML = randomIntFromInterval;

    //assigning random hidden value of each crystal.
    var randHiddenValueOfImage = [3, 4, 5, 7];
    var rand = function() {
        return Math.floor(Math.random() * 4);
    };
    var randomImage = function() {
        ////
        ////
        /////
    };
    $(".btn").each(function() {
        $(this).css('background', randomColor());
    });

});