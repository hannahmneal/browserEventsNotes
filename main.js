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

