// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
// TODO: Add code to display the current date in the header of the page.
$("#currentDay").text(dayjs().format("dddd MMMM, D"));
var currentHour = dayjs().hour();
// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?

// Here I'm using a for loop and a currentHour var then we can assign a class to each section based on where they fall in the i.
$(function () {
    for (let i = 9; i < 18; i++) {
        if (currentHour > i) {
            $("#hour-" + i).children("textarea").addClass("past")
        }
        if (currentHour === i) {
            $("#hour-" + i).children("textarea").addClass("present")
        }
        if (currentHour < i) {
            $("#hour-" + i).children("textarea").addClass("future")
        }
        // this retrieves the local storage data for each hour(i) and adds the text to the textarea selector child - this allows persisting.
        var text = localStorage.getItem("hour-" + i)
        $("#hour-" + i).children("textarea").val(text)
    }
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    
    // selects all saveBtn's and on click runs the saveButton function allowing localStorage to be implemented.
    $(".saveBtn").on("click", saveButton)
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?

    // when pressing the save button 1 attr and 1 val are sent to localStorage, the hour and the text saved - this is referenced in persisting events.
    function saveButton() {
        var id = $(this).parent().attr("id")
        var text = $(this).siblings("textarea").val()
        localStorage.setItem(id, text)
    }
});