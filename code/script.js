$(document).ready(function(){
    console.log("Hello World");

    // DOM VARS

        var dayBlock = $("#day");
        var hourBlock = $("#hour");
        var timeBlock = $("#timeBlock");
        var textBlock = $("#textBlock");
        var lockBlock = $("#lockBlock");
    // JS VARS

        var hourOfDay = ["9","10","11","12","1","2","3","4","5"]
    // FUNCTION DEFINITIONS
        function renderHour (){
            for (i=0;i<hourOfDay.length;i++){
                
                var hourRow = $("<div>");
                hourRow.addClass("row");
                hourRow.addClass("hour");
                hourBlock.append(hourRow);

                var timeDiv = $("<div>" + hourOfDay[i] + "</div>");
                timeDiv.addClass("col-sm-1");
                timeDiv.addClass("time-block");
                hourRow.append(timeDiv);
                console.log(hourOfDay[i]);

                var textDiv = $("<div>");
                textDiv.addClass("col-sm-10");
                hourRow.append(textDiv);

                var userText = $("<input>");
                userText.addClass("hour");
                userText.addClass("userText");
                textDiv.append(userText);

                var btnDiv = $("<div>");
                textDiv.addClass("col-sm-1");
                hourRow.append(btnDiv);

                var saveBtn = $("<button>");
                saveBtn.addClass("saveBtn");
                btnDiv.append(saveBtn);

                var lockImg = $("<image>");
                lockImg.prepend('<img id="lockImg" src="https://img.pngio.com/security-lock-icon-transparent-png-svg-vector-lock-icon-png-512_512.png" />');
                saveBtn.append(lockImg);

            }

        }

    // FUNCTION CALLS
        renderHour();
    // EVENT LISTENERS

}) 