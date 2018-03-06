//Project Name:
//Client Name:
//Author: Lilly Percival
//Dev @ RC in Boston

///-----------------------------------------------------------///
///---------------PSEUDO---CODE--------------------///
///---------------------------------------------------------///
// list of acceptable country codes (switch statement?)--> if not, throw an error
// concatenate two word city names with "+" in the middle so api recognizes city code
// on submit, the api should run and pull only the temp data, then append to the h1 in html
//
//
//
//
//
//
//
///--------------------------------------------------------------------------------///
///~~~~~~~~~~~~~~~~~ACTUAL---CODE~~~~~~~~~~~~~~~~~~///
///-------------------------------------------------------------------------------///

/*
- Sign up for openweathermap.org and generate an API key.
- User either $.ajax or $.get to pull weather current data .
  for Washington DC (hint: http://api.openweathermap.org/data/2.5/weather?q=...).
- Print the temperature in console.
- Bonus 1: add a form prompting user for the city and state.
- Bonus 2: convert answer from kelvin to fahrenheit.


http://api.openweathermap.org/data/2.5/weather?q=&appid=16e0d3a236b6b892f49529adac4b23e8
*/



$(document).ready(){

    $("#submit").on("click", function(){
        var city = $("#city").val();

        if(city !=""){
            $.ajax({
                url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=imperial' + '&APPID=16e0d3a236b6b892f49529adac4b23e8',
                type: "GET",
                dataType: "jsonp",
                success: function(data){
                        console.log(data);
                }
            })
        }else{
            $("#error").append("Please enter a city name. Value cannot be empty.");
        }
    })



};










// $(document).ready(){
//
// 'use strict';
// (function(getWeather) {
//   var weatherUrl = "http://samples.openweathermap.org/data/2.5/weather?q="+city+","+country+"&appid=16e0d3a236b6b892f49529adac4b23e8";
//   var apiKey = "16e0d3a236b6b892f49529adac4b23e8";
//   var city = $("#city").val("")
//   var city = $("#country").val("")
//
// $("#submit").on("submit", function(){
//     $.ajax("weatherUrl", function(temp){
//         main.temp.forEach(function(e,i){
//             $("h1").append("The Weather in "+city+" is"+main.temp+"&degF");
//         });
//     });
// });
//
//
//   // $("ol").append()
// }) ();
// };
