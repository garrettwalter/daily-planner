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
                var timeDiv = $("<div>" + hourOfDay[i] + "</div>");
                timeDiv.attr("class","row");
                timeDiv.addClass("hourBorder");
                hourBlock.append(timeDiv);
                console.log(hourOfDay[i]);
            }
            
        }
    
    // FUNCTION CALLS
        renderHour();
    // EVENT LISTENERS

})