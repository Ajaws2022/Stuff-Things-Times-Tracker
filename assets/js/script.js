// create a function that creates the js moment to display the current date and time

// create a function that sets the text entry as an object in local storage when the save item is clicked

// parse the object back to the list as a list item to make sure it stays on refresh

// create an if statement that compares the current time to the list and changes the color based on past, present, or future

//   var icon = $("#9am").button( "option", "icon" );
 function setTime(){
    var today = moment();

    $(".dateAndTime").text(today.format("MMM Do, YYYY  h:mm a"));
}

setInterval(setTime(), (1000 * 60) * 1);
