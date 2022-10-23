// used querySelectorAll to select all buttons with the same class
var subButton = document.querySelectorAll(".subButton")

// sets the current time in the header
function setTime(){
    var today = moment();

    $(".dateAndTime").text(today.format("MMM Do, YYYY  h:mm a"));
    
    console.log("I'm alive")
}

// This function checks the time and changes the class that gets applied to the input boxes accordingly

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

// runs the set time and check time functions every minute to update the time and appearance
setInterval(
    function(){
        setTime()
        checkTime()
    },
    (1000 * 60) * 1
);

// submits the value of a given input box to local storage with a key based on the hour block
function submitTimes(){
    var inputValue = $(this).siblings(".input").val()
    var inputKey = $(this).siblings('h3').text()
    
    console.log(inputValue)
    console.log(inputKey)

    // var time = $(this).siblings('id')
    localStorage.setItem(inputKey, `${inputValue}`)

   
}
// grabs all of the input boxes
var inputBoxes = document.querySelectorAll('.input');

// This function loops through the boxes to set their text content by using the associated key name
function setText(){
    for(let i = 0; i<inputBoxes.length; i++){
        // creates a map to loop through the boxes based on their ID number that gets set to the key name
        // this had to be used because the 24 hour designation of the ID's on the inputs did not match the key names
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

        // starts a loop to generate keys at the number 9
        let inputContentKey = index_to_time[i + 9];

        // loops through boxes again setting the text content to the stored value
        inputBoxes[i].value = localStorage.getItem(inputContentKey);
    }
}

checkTime()

setTime()

window.addEventListener('load', setText)

// needed a loop to target all of the buttons on the page and not the first
for(let i = 0; i<subButton.length; i++){
    subButton[i].addEventListener('click', submitTimes)
}