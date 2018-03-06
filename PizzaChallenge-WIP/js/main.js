//Project Name:
//Client Name:
//Author:
//Dev @ RC in Boston

///-----------------------------------------------------------///
///---------------PSEUDO---CODE--------------------///
///---------------------------------------------------------///
// User can see pizza template and pizza topping options
// User can click topping buttons, and click buttons for left, right, and whole parts of the pizza
// User expects topppings to change, and to go on specific part of pizza when buttons are clicked
//
// There are several different pizza topping combinations
//
// Using a switch function can give a result for each of the different toppping comibinations
// Give each topping a class of hidden and toggle that when the button is clicked
// Have a method of removing toppings for when user changes mind about toppings
//
//
///--------------------------------------------------------------------------------///
///~~~~~~~~~~~~~~~~~ACTUAL---CODE~~~~~~~~~~~~~~~~~~///
///-------------------------------------------------------------------------------///

$(document).ready(

    //here we will put our event listener to wait for a change in class for toppings
        //cheese - whole means I will have to addclass of hiddent to all topppings
        $(".cheese").on("click",function(){
            $("img").addClass("hidden")
        });

    //here we will put a switch function to handle all of the topping cases

    //in the switch function we will toggle class of hidden to show toppings

    //
    // $("input").on("change", function(){
    //
    //   switch($(this).attr("class")){
    //     case "pepperoniWhole":
    //       $(".pizzaLeft,.pizzaRight").addClass("cheese")
    //       break;
    //     case "cheeseLeft":
    //       $(".pizzaRight").removeClass("cheese")
    //       $(".pizzaLeft").addClass("cheese")
    //       break;
    //     case "cheeseRight":
    //       $(".pizzaLeft").removeClass("cheese")
    //       $(".pizzaRight").addClass("cheese")
    //       break;
    //     case "pepWhole":
    //       $(".pep").removeClass("hidden")
    //       break;
    //     case "pepLeft":
    //       $(".pizzaRight .pep").addClass("hidden")
    //       $(".pizzaLeft .pep").removeClass("hidden")
    //       break;
    //     case "pepRight":
    //       $(".pizzaLeft .pep").addClass("hidden")
    //       $(".pizzaRight .pep").removeClass("hidden")
    //       break;
    //     case "mushWhole":
    //       $(".mush").removeClass("hidden")
    //       break;
    //     case "mushLeft":
    //       $(".pizzaRight .mush").addClass("hidden")
    //       $(".pizzaLeft .mush").removeClass("hidden")
    //       break;
    //     case "mushRight":
    //       $(".pizzaLeft .mush").addClass("hidden")
    //       $(".pizzaRight .mush").removeClass("hidden")
    //   }
    //
    // });
    //
    //
    //



);



























/*

------------------------------------FAILURES!!!!! :(  --------------------------------------------------
// $(document).ready(){
// //this function hides all initial toppings from view until the user chooses the toppings from the list
// function hideToppings(){
//     $("#pepperoniWhole,#pepperoniLeft,#pepperoniRight,#mushroomWhole,#mushroomLeft,#mushroomRight,#peppersWhole,#peppersLeft,#peppersRight,#sausageWhole,#sausageLeft,#sausageRight").toggleClass("hidden");
// };
// #pepperoniWhole,
// #pepperoniLeft
// #pepperoniRight
// #mushroomWhole
// #mushroomLeft
// #mushroomRight
// #peppersWhole
// #peppersLeft
// #peppersRight
// #sausageWhole
// #sausageLeft
// #sausageRight
//
// var toppings=["../pizza.png","../top-pepperoni-whole.png","../top-mushrooms-whole.png","../top-green-peppers-whole.png","../top-sausage-whole.png"];

//on click - these toppings get added or removed, at first "whole" option is shown,
    //unless one of the "left", "right" buttons are clicked.
    //"Whole" button replaces the toppings back to whole pizza
    //
    //
    // $(".pepperoni").on("click", function(){
    //     $("#pepperoniWhole").toggleClass("show");
    //     }
    // });
    // $(".mushrooms").on("click", function(){
    //     toppings =[3];
    //     }
    // });
    // $(".peppers").on("click", function(){
    //     toppings =[4];
    //     }
    //     $(".sausage").on("click", function(){
    //         toppings =[5];
    //         }
    // });



//on click - buttons add toppings to a specific section of the pizza
// #whole
// #left
// #right
};
/*
---------------------------------------------------------------------------------------------
Leon's explanation:
HTML
radio buttons
type="radio" for radio buttons
pizza broken down into two halves
used a form - opens and closes
uses field set (special tag that you can use inside of a form to group like content)
<fieldset>
    <legend>ingredients - whole/left/right</legend>
    <label for="">Extra Cheese</label>
        <input name="cheese" class="cheesewhole" type="radio">
        keep radio buttons together by giving them all the same name!!!
        if they have different names they will be treated as separate, individual buttons

        CSS
        google how to do a half circle in CSS
        class hiddent --> display none
        all toppings by default are hidden

    JS
    used switch statement!
    used an event called "change"

    $("input").on("change",function(){
        switch($(this).attr("class")){
            case "cheesewhole":
                $(".pizzaLeft,.pizzaRight").addClass("cheese")
            break;
            case "cheeseRight":
                $(".pizzaLeft").removeClass("cheese")
                $(".pizzaRight").addClass("cheese")
            case "mushRight":
                $(".pizzaLeft .mush").addClass("hidden")
                $(".pizzaRight .mush").removeClass("hidden")
            break;
    }
});
