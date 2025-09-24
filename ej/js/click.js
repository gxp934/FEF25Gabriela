"use strict";
let redClickBox = document.getElementById("redClick"); // Get the HTML element with the ID "redClick"

let showButton = document.getElementById("show");
let hideButton = document.getElementById("hide");
let toggleButton = document.getElementById("toggle");
let showHideBox = document.getElementById("showHideBox");

let showHideState = false;

//Changing styles with JS and Adding Classes
redClickBox.classList.add("clickBox"); // Add the CSS class "clickBox" to the redClickBox element
redClickBox.addEventListener("click", function() {
    //alert("You clicked the red box!");
    document.querySelector("body").style.backgroundColor = "blue";
}); // https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener

redClickBox.addEventListener("mouseover", function() {
    // redClickBox.style.backgroundColor = "green";
    redClickBox.style.backgroundColor = "rgba(0, 128, 0, 1.0)"; // green with alpha

});

redClickBox.addEventListener("mouseout", function() {
    redClickBox.style.backgroundColor = "red";
});

//show hide effect

showButton.addEventListener("click", function() {
    //showHideBox.style.display = "block";
   // runStyleChange();
   showHideBox.classList.remove("hide");
});
hideButton.addEventListener("click", function() {
    //showHideBox.style.display = "none";
    showHideBox.classList.add("hide");
});

toggleButton.addEventListener("click", function() {
    if (showHideState == true) {
        showHideBox.classList.remove("hide"); // remove the CSS class "hide" to the showHideBox element
        showHideState = false;
    } else {
        showHideBox.classList.add("hide"); // Add the CSS class "hide" to the showHideBox element
        showHideState = true;
    }
}); //toggle method