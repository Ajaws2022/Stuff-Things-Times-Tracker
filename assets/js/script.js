// create a function that creates the js moment to display the current date and time


// create a function that sets the text entry as an object in local storage when the save item is clicked

// parse the object back to the list as a list item to make sure it stays on refresh

// create an if statement that compares the current time to the list and changes the color based on past, present, or future

//   var icon = $("#9am").button( "option", "icon" );
var mainBlock = document.querySelector('.mainBlock')
// var block = document.createElement("div")
// var timeBlock = document.createElement("h1")
// var entryArea = document.createElement("input")

// used querySelectorAll to select all buttons with the same class
var subButton = document.querySelectorAll(".subButton")

 function setTime(){
    var today = moment();

    $(".dateAndTime").text(today.format("MMM Do, YYYY  h:mm a"));
    
    console.log("I'm alive")
}
// function(){setTime()}

function checkTime(){
    var currTime = parseInt(moment().format('H'))

    var chronElements = $('.input')

    for (var i = 0; i < chronElements.length; i++){

        var intID = parseInt(chronElements[i].id)

        var changeID = document.getElementById(chronElements[i].id)

        $(chronElements[i].id).removeClass(".past .present .future");
        console.log(`index: ${i}, elem: ${intID}, currTime: ${currTime}`);
        if (intID < currTime){
            $(changeID).addClass('past');
        } else if (intID > currTime){
            $(changeID).addClass('future');
        } else {
            $(changeID).addClass('present');
        }   
    }
}

setInterval(
    function(){
        setTime()
        checkTime()
    },
    (1000 * 60) * 1
);


function submitTimes(){
    var inputValue = $(this).siblings(".input").val();
    var inputKey = $(this).siblings('h3').text()
    
    console.log(inputValue)
    console.log(inputKey)

    var time = $(this).siblings('id')
    localStorage.setItem('inputKey', 'inputValue');

    // console.log(localStorage.getItem('hours'))
    // for(let i = 0; i < items; i++){
    //    items.append('entryArea.textcontent')
    //    localStorage.setItem('hours', 'items')
    //    var subTimes = localStorage.getItem('hours')
    //    console.log(subTimes)
    // }
    }


checkTime()
setTime()

// subButton.addEventListener('click', submitTimes)
// needed a loop to target all of the buttons on the page and not the first
for(let i = 0; i<subButton.length; i++){
    subButton[i].addEventListener('click', submitTimes)
}