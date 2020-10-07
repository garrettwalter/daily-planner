$(document).ready(function(){

    // DOM VARS
        var dayBlock = $("#day");
        var hourBlock = $("#hour");
        var timeBlock = $("#currentDay");
    // JS VARS
        var hourOfDay = ["9 AM","10 AM","11 AM","12 PM","1 PM","2 PM","3 PM","4 PM","5 PM"]
    // FUNCTION DEFINITIONS
        function renderTime (){
            var time = moment().format('MMMM Do YYYY, h:mm:ss a');
            timeBlock.html($("<p>" + time + "</p>"));
        }

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

                var textDiv = $("<div>");
                textDiv.addClass("col-sm-10");
                hourRow.append(textDiv);

                var userText = $("<input>");
                var lockedText = localStorage.getItem("userAddedText"+[i]);
                userText.val(lockedText);
                userText.attr("id","userText"+[i]);
                userText.addClass("hour");
                userText.addClass("userText");
                textDiv.append(userText);

                var btnDiv = $("<div>");
                textDiv.addClass("col-sm-1");
                hourRow.append(btnDiv);

                var saveBtn = $("<button>");
                saveBtn.attr("id","saveBtn"+[i]);
                saveBtn.addClass("saveBtn");
                btnDiv.append(saveBtn);

                var lockImg = $("<image>");
                lockImg.prepend('<img id="lockImg" src="https://img.pngio.com/security-lock-icon-transparent-png-svg-vector-lock-icon-png-512_512.png" />');
                saveBtn.append(lockImg);

            }

        }

    // FUNCTION CALLS
        renderTime();
        setInterval(function(){
            renderTime();
         },1000);

        renderHour();
    // EVENT LISTENERS
       
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