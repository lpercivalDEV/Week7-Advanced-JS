//Project Name:
//Client Name:
//Author: Lilly Percival
//Dev @ RC in Boston

///-----------------------------------------------------------///
///---------------PSEUDO---CODE--------------------///
///---------------------------------------------------------///
//
//
//
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

'use strict';
(function() {
    $.get("https://data.cityofnewyork.us/api/views/jb7j-dtam/rows.json?accessType=DOWNLOAD", function(response){
        response.data.forEach(function(e,i){
            $("ol").append("<li>"+response.data [2] [9]+"  "+"  "+response.data [2] [10]+"  "+response.data [2] [11]+"</li>")
        });
})
  // Alternate data source: https://data.cityofnewyork.us/api/views/jb7j-dtam/rows.json?accessType=DOWNLOAD
})();









/*

- Refactor the codealong to work with user interaction. In the index.html file
there is a "Get Consumer Finance Data" button. When the user clicks the button,
pull data from the provided link above (http://data.consumerfinance.gov/api/views.json).
Handle the link success and error responses accordingly, displaying results in
console.log() if successful.

- Separate your logic so that you can use your functions for another user button
click of "Get Custom Data". Interact with an API of your choice and handle both
success and error scenarios.

//add a click event listener to make it work with buttons instead of on page load (its current state)

'use strict';
(function() {
    $.ajax({
        url: "http://data.consumerfinance.gov/api/views.json",
        success: function(response){
        $("ol").append("<li>"+response[0].name. [2] [9]+"</li>")
        }
        error: function(){
            $("ol").append("<li>Error, could not pull data</li>")
        }
        });
})
  // Alternate data source: https://data.cityofnewyork.us/api/views/jb7j-dtam/rows.json?accessType=DOWNLOAD
})();

*/
