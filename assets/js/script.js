// create a function that creates the js moment to display the current date and time

// create a function that sets the text entry as an object in local storage when the save item is clicked

// parse the object back to the list as a list item to make sure it stays on refresh

// create an if statement that compares the current time to the list and changes the color based on past, present, or future

//   var icon = $("#9am").button( "option", "icon" );
 function setTime(Interval){
    var today = moment();

    $(".dateAndTime").text(today.format("MMM Do, YYYY  h:mm a"));
}

setInterval(setTime(), (1000 * 60) * 1);

function checkTime(){
    var currTime = moment().format('H')

    var chronElements = $('.input')

    for (var i = 0; i < chronElements.length; i++){

        var elemID = chronElements[i].id;

        var changeID = document.getElementById(chronElements[i].id)

        $(chronElements[i].id).removeClass(".past .present .future");

        if (elemID < currTime){
            $(changeID).addClass('.past');
        } else if (elemID > currTime){
            $(changeID).addClass('.future');
        } else {
            $(changeID).addClass('.present');
        }
        

        
    }
}

checkTime();