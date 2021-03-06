$(document).ready(function(){

    // DOM VARS
        var dayBlock = $("#day");
        var hourBlock = $("#hour");
        var timeBlock = $("#currentDay");
    // JS VARS
        var hourOfDay = ["9 AM","10 AM","11 AM","12 PM","1 PM","2 PM","3 PM","4 PM","5 PM"]
    // FUNCTION DEFINITIONS
        // Puts the current Month, Day and Time of day into the Jumbotron
        function renderTime (){
            var time = moment().format('MMMM Do YYYY, h:mm:ss a');
            timeBlock.html($("<p>" + time + "</p>"));
        }
        // Checks the current hour of the day and adds classes accordingly
        function checkHour (){
           console.log(moment().format('H'));
           var currentHour = moment().format('H');
           if (currentHour == 9){
            $("#userText0").addClass("present");
            $("#userText1").addClass("future");
            $("#userText2").addClass("future");
            $("#userText3").addClass("future");
            $("#userText4").addClass("future");
            $("#userText5").addClass("future");
            $("#userText6").addClass("future");
            $("#userText7").addClass("future");
            $("#userText8").addClass("future");
           } else if (currentHour == 10)  {
            $("#userText0").addClass("past");
            $("#userText1").addClass("present");
            $("#userText2").addClass("future");
            $("#userText3").addClass("future");
            $("#userText4").addClass("future");
            $("#userText5").addClass("future");
            $("#userText6").addClass("future");
            $("#userText7").addClass("future");
            $("#userText8").addClass("future");
           } else if (currentHour == 11)  {
            $("#userText0").addClass("past");
            $("#userText1").addClass("past");
            $("#userText2").addClass("present");
            $("#userText3").addClass("future");
            $("#userText4").addClass("future");
            $("#userText5").addClass("future");
            $("#userText6").addClass("future");
            $("#userText7").addClass("future");
            $("#userText8").addClass("future");
           } else if (currentHour === 12)  {
            $("#userText0").addClass("past");
            $("#userText1").addClass("past");
            $("#userText2").addClass("past");
            $("#userText3").addClass("present");
            $("#userText4").addClass("future");
            $("#userText5").addClass("future");
            $("#userText6").addClass("future");
            $("#userText7").addClass("future");
            $("#userText8").addClass("future");
           } else if (currentHour == 13)  {
            $("#userText0").addClass("past");
            $("#userText1").addClass("past");
            $("#userText2").addClass("past");
            $("#userText3").addClass("past");
            $("#userText4").addClass("present");
            $("#userText5").addClass("future");
            $("#userText6").addClass("future");
            $("#userText7").addClass("future");
            $("#userText8").addClass("future");
           } else if (currentHour == 14)  {
            $("#userText0").addClass("past");
            $("#userText1").addClass("past");
            $("#userText2").addClass("past");
            $("#userText3").addClass("past");
            $("#userText4").addClass("past");
            $("#userText5").addClass("present");
            $("#userText6").addClass("future");
            $("#userText7").addClass("future");
            $("#userText8").addClass("future");
           } else if (currentHour == 15)  {
            $("#userText0").addClass("past");
            $("#userText1").addClass("past");
            $("#userText2").addClass("past");
            $("#userText3").addClass("past");
            $("#userText4").addClass("past");
            $("#userText5").addClass("past");
            $("#userText6").addClass("present");
            $("#userText7").addClass("future");
            $("#userText8").addClass("future");
           } else if (currentHour == 16)  {
            $("#userText0").addClass("past");
            $("#userText1").addClass("past");
            $("#userText2").addClass("past");
            $("#userText3").addClass("past");
            $("#userText4").addClass("past");
            $("#userText5").addClass("past");
            $("#userText6").addClass("past");
            $("#userText7").addClass("present");
            $("#userText8").addClass("future");
           } else if (currentHour == 17)  {
            $("#userText0").addClass("past");
            $("#userText1").addClass("past");
            $("#userText2").addClass("past");
            $("#userText3").addClass("past");
            $("#userText4").addClass("past");
            $("#userText5").addClass("past");
            $("#userText6").addClass("past");
            $("#userText7").addClass("past");
            $("#userText8").addClass("present");
           } else {
            $("#userText0").addClass("past");
            $("#userText1").addClass("past");
            $("#userText2").addClass("past");
            $("#userText3").addClass("past");
            $("#userText4").addClass("past");
            $("#userText5").addClass("past");
            $("#userText6").addClass("past");
            $("#userText7").addClass("past");
            $("#userText8").addClass("past");
           }
        }
        // Creates the content of the page
        function renderHour (){
            for (i=0;i<hourOfDay.length;i++){
                // Creates new row for each time the for loop runs
                var hourRow = $("<div>");
                hourRow.addClass("row");
                hourRow.addClass("hour");
                hourBlock.append(hourRow);
                // Puts an hour 9-5 in each of the rows, giving it a time
                var timeDiv = $("<div>" + hourOfDay[i] + "</div>");
                timeDiv.addClass("col-sm-1");
                timeDiv.addClass("time-block");
                hourRow.append(timeDiv);
                // Div for the text box
                var textDiv = $("<div>");
                textDiv.addClass("col-sm-10");
                hourRow.append(textDiv);
                // Makes the box into an input that the user can type into
                var userText = $("<input>");
                var lockedText = localStorage.getItem("userAddedText"+[i]);
                userText.val(lockedText);
                userText.attr("id","userText"+[i]);
                userText.addClass("hour");
                userText.addClass("userText");
                textDiv.append(userText);
                // Div for the lock btn
                var btnDiv = $("<div>");
                textDiv.addClass("col-sm-1");
                hourRow.append(btnDiv);
                // The btn itself
                var saveBtn = $("<button>");
                saveBtn.attr("id","saveBtn"+[i]);
                saveBtn.addClass("saveBtn");
                btnDiv.append(saveBtn);
                // Adds lock img to the button
                var lockImg = $("<image>");
                lockImg.prepend('<img id="lockImg" src="https://img.pngio.com/security-lock-icon-transparent-png-svg-vector-lock-icon-png-512_512.png" />');
                saveBtn.append(lockImg);
            }
        }

    // FUNCTION CALLS
        // Updates the time in the jumbotron by the second 
        renderTime();
        setInterval(function(){
            renderTime();
         },1000);
        // renders the content
        renderHour();
        //  checks for time of day
        checkHour();
    // EVENT LISTENERS
        //  When any of the buttons below are clicked 
        //  the users inputted text for that hour is saved to local storage 
        $("#saveBtn0").on("click", function(){
            var text9 = $("#userText0").val();
            console.log(text9);
            localStorage.setItem("userAddedText0", text9);
        })
        $("#saveBtn1").on("click", function(){
            var text10 = $("#userText1").val();
            console.log(text10);
            localStorage.setItem("userAddedText1", text10);
        })
        $("#saveBtn2").on("click", function(){
            var text11 = $("#userText2").val();
            console.log(text11);
            localStorage.setItem("userAddedText2", text11);
        })
        $("#saveBtn3").on("click", function(){
            var text12 = $("#userText3").val();
            console.log(text12);
            localStorage.setItem("userAddedText3", text12);
        })
        $("#saveBtn4").on("click", function(){
            var text1 = $("#userText4").val();
            console.log(text1);
            localStorage.setItem("userAddedText4", text1);
        })
        $("#saveBtn5").on("click", function(){
            var text2 = $("#userText5").val();
            console.log(text2);
            localStorage.setItem("userAddedText5", text2);
        })
        $("#saveBtn6").on("click", function(){
            var text3 = $("#userText6").val();
            console.log(text3);
            localStorage.setItem("userAddedText6", text3);
        })
        $("#saveBtn7").on("click", function(){
            var text4 = $("#userText7").val();
            console.log(text4);
            localStorage.setItem("userAddedText7", text4);
        })
        $("#saveBtn8").on("click", function(){
            var text5 = $("#userText8").val();
            console.log(text5);
            localStorage.setItem("userAddedText8", text5);
        })
}) 