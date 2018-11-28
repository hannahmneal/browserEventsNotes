let header = document.querySelector("#page-header");

let handleClickEvent = () => console.log("Page header was clicked");
// handleClickEvent is the functione we want to execute when the button is clicked


header.addEventListener("click", handleClickEvent);
//we don't have to call the function - the event listener will call the function 


// Swtich out handleClickEvent for an anonymous function:       *Remember: an anonymous function is one without a name

// header.addEventListener("click", function(){
//     console.log("Page header was clicked");
// };

//If you do it this way, it will still work (~27:00 on audio)


let articleEl = document.getElementsByClassName("article-section");
console.log(articleEl);

//Each item with this class name has been collectively gathered, but
//to attach a user event to each individual item:

function handleSectionClick () {
    console.log("Section was clicked");
}

for (let i= 0; i < articleEl.length; i++) {
    articleEl.item(i).addEventListener("click", handleSectionClick)
}
//line 31 also works if you use: articleEl[i].addEventListener, rather than articleEl.item(i).addEventListener
//It is recommended that you use the square bracket notation,[i], when using arrays, however.


// If you want to know which section was clicked, use "event" (e.g., "mouseEvent"):
//"target" is a property that refers to the element on which the event happened:
//Example:
// function handleSectionClick (event) {
//     console.log("Section was clicked", click, event.target.innerHTML);

//      ***************                 After break         *************************


let guineaPig = document.getElementById("guinea-pig")

document.getElementById("add-color").addEventListener("click", function() {
    guineaPig.classList.toggle("blue")
})

//document.getElementById("add-color") is the reference, .addEventListener....  is the instruction.

document.getElementById("make-large").addEventListener("click", function() {
    guineaPig.classList.toggle("large")
})

// Notice toggleClass in the following two examples:

function toggleClass (newClass) {
    guineaPig.classList.toggle(newClass)
    console.log("guineaPig.classList", guineaPig.classList)
}

document.getElementById("add-border").addEventListener("click", function() {
    toggleClass("bordered")
})

document.getElementById("add-rounding").addEventListener("click", function() {
    toggleClass("rounded")
})


// EventListeners can be anywhere on a page but targets are specific to an element

document.querySelector("body").addEventListener("click", function() {
    //console.log(event.target, event.currentTarget);
    console.log("Event target innerHTML: ", event.target.innerHTML);

    let evntHTML = event.target.innerHTML;
    if(evntHTML === "Add color") {
        toggleClass("blue");
    } else if (evntHTML === "Hulkify") {
        toggleClass("large");
    } else if (evntHTML === "Capture it") {
        toggleClass("bordered");
    } else if (evntHTML === "Rounded") {
        toggleClass("rounded");
    }
})

//Since all these have Ids, it would be better to use the ids. Here is how:

//let eventID = event.target.id;
// if(eventId === "maker-large") {
//     toggleClass("blue");    
//     } else if (eventId === "make-large") {
//         toggleClass("large");
//     } else if (eventId === "add-border") {
//         toggleClass("bordered");
//     } else if (eventId === "add-color") {
//         toggleClass("blue");
//     } else if (eventId === "add-rounding") {
//         toggleClass("rounded");
//     }
//})