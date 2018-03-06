//Project Name:
//Client Name:
//Author: Lilly Percival
//Dev @ RC in Boston

///-----------------------------------------------------------///
///---------------PSEUDO---CODE--------------------///
///---------------------------------------------------------///
// Directions from Leon:
//MORNING CHALLENGE: create a app that returns dice rolls -
    //...user should be able to select the number of dice and how many sides each dice has
    //Leon chose to give the users complete control, so he used inputs
//
// User can see dice roll buttons, and the result display
// User can click buttons
// User expects a random dice number (that matches dice min/max values) to be displayed
    //...when a button is clicked
//
// I will need buttons or inputs for the user to enter a valid dice side number and how
    //...many number of dice they'd like to play with
//
//
//
///--------------------------------------------------------------------------------///
///~~~~~~~~~~~~~~~~~ACTUAL---CODE~~~~~~~~~~~~~~~~~~///
///-------------------------------------------------------------------------------///

//declares dieNum as a variable, nothing is assigned yet
var dieNum;

//function for generating random number-->
    //parameters are min and max (two buckets for the numbers generated)
    //function will return a number rounded down to the nearest whole number
    //process is: take max value, and subtract min value, then add 1.
    //take that value then multiply it by the randomly generated numbers
    //then take that new number and add the min value
    //this final number is then rounded down by the Math.floor method and returned by the funciton
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//function for pulling piece of string and assigning it to the parameter "num"
    //so this function is pulling the html value from the dice buttons - i.e. "D4", "D100"
    //once the value fromt he html is pulled, the substring method pulls out the only piece of the html
    //...that qualifies as a string, in this case its the "D" so the only value that is left over is the
    //...number portion of the html (i.e. "4" or "100" etc.)
    //this number segment is then.......?????
    //?????
    //the final number is then put into the "die" class value of the html
function rollDie(num) {
  num = num.substring(1, num.length);
  $(".die").html(getRandomInt(1, num));
}

//this is an event listener that waits for one of the buttons to be clicked
    //once a button is clicked, the variable dieNum is assigned the
        //...click event and put into the html
    //then the rollDie function above is activated and it uses the "dieNum" variable as its argument
    //this will plug the randomly generated number into the html
$(".roll").on("click", function() {
  dieNum = $(this).html();
  rollDie(dieNum);
});

/*
LEON"S CODE

function getRolls(dice,sides){
    for(var count=0; count<dice; count++){
    var num= Math.ceil(Math.random()*sides)
    $("ol").append("<li>"+num+"</li>")
}
}

$("form").on("submit", function(){
    e.preventDefault();
    $("li").remove();
    var numOfDice = $("#numOfDice").val();
    var numOfSides = $("#numOfSides").val();
    getRolls(numOfDice,numOfSides);
})
