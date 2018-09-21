$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "Dataset.csv",
        dataType: "text",

        success: function(data) {
            var processedData = processData(data);
            var filtered = filterByTime(processedData, 0800);
            console.log(filtered);
        }
     });
});

function processData(allText) {
    var allTextLines = allText.split(/\r\n|\n/);
    var headers = allTextLines[0].split(',');
    var lines = new Array();

    for (var i=1; i<allTextLines.length; i++) {
        var data = allTextLines[i].split(',');
            lines.push({
                "Time": data[0],
                "Id": data[1],
                "Lat": data[2],
                "Long": data[3],
                "Alt": data[4],
                "FloorIndex": data[5],
                "Name": data[6],
                "Footfall": data[7],
                "Conversion": data[8],
                "Colour": ""
            });
        }
    return lines;
}

function filterByTime(processedData, time) {
    var things = $.grep(processedData, function (shop) {
        return (shop.Time == time);
    });
    return things;
}