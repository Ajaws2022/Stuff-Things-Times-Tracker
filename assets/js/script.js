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
    var inputValue = $(this).siblings(".input").val()
    var inputKey = $(this).siblings('h3').text()
    
    console.log(inputValue)
    console.log(inputKey)

    // var time = $(this).siblings('id')
    localStorage.setItem(inputKey, `${inputValue}`)

   

    }
var inputBoxes = document.querySelectorAll('.input');

function setText(){
    for(let i = 0; i<inputBoxes.length; i++){
        // loops through all of the input elements setting the text content to an empty string
        // inputBoxes[i].textContent = ("");
        // creates a dynamic key for whichever element it gets associated with
        var index_to_time = {
            9: "9am",
            10: "10am",
            11: "11am",
            12: "12pm",
            13: "1pm",
            14: "2pm",
            15: "3pm",
            16: "4pm"
        }
        let inputContentKey = index_to_time[i + 9];

        // Uses the key name generated above to pull and parse an item from storage
        // let inputContent = JSON.parse(localStorage.getItem(inputContentKey));

    
        // loops through boxes again setting the text content to the stored value
        inputBoxes[i].value = localStorage.getItem(inputContentKey);

        // console.log(inputBoxes[3].textContent)
    }

    
}

checkTime()
setTime()
// setText()
window.addEventListener('load', setText)

// subButton.addEventListener('click', submitTimes)

// needed a loop to target all of the buttons on the page and not the first
for(let i = 0; i<subButton.length; i++){
    subButton[i].addEventListener('click', submitTimes)
}