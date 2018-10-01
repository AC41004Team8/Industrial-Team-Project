/**
 * Takes a csv specified from url:"" and puts this into an array called lines
 * 
 */


/**
 * 
 * @param {*} time 
 */

var filtered;
var processedData = [];

function ajaxRequest() {

    $.ajax({
        type: "GET",
        async: false,
        url: "Dataset.csv",
        dataType: "text",

        success: function (data) {
            processedData = processData(data);

        }


    });
}


var lines = [];

function processData(allText) {
    var allTextLines = allText.split(/\r\n|\n/);
    var headers = allTextLines[0].split(',');
    var lines = new Array();

    for (var i = 1; i < allTextLines.length; i++) {
        var data = allTextLines[i].split(',');
        lines.push({
            "Time": data[0],
            "Id": data[1],

            "Lat": data[2],
            "Long": data[3],
            "Alt": data[4],


            "FloorIndex": data[5],
            "Category": data[6],
            "Name": data[7],
            "Footfall": data[8],
            "ConversionRate": data[9]
        });
    }
    return lines;
}


function filterByTime(time) {
    var things = $.grep(processedData, function (shop) {
        return (shop.Time == time);
    });
    return things;
}
