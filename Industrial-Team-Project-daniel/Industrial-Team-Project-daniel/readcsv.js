/**
 * Takes a csv specified from url:"" and puts this into an array called lines
 * 
 */
// $(document).ready(function() {
//     $.ajax({
//         type: "GET",
//         url: "Dataset.csv",
//         dataType: "text",

//         success: function(data) {
//             var processedData = processData(data);
//             var filtered = filterByTime(processedData, 800);
//             console.log(filtered);
//         }
//      });
// });

/**
 * 
 * @param {*} time 
 */

var filtered;
//var latLngArray;
 function ajaxRequest(timeFromSlider){

    var timeToFilter = timeFromSlider.concat("00") ;

    $.ajax({
        type: "GET",
        url: "Dataset.csv",
                dataType: "text",
        
                success: function(data) {
                    var processedData = processData(data);
                      filtered = filterByTime(processedData, timeToFilter);
                      //lnglatArray = generateLatlngArray(filtered);

                    console.log(filtered);

                }


             });
}


var lines = [];

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

                //"latLng": {"Lat": data[1], "Long": data[2], "Alt": data[4] }


                "FloorIndex": data[5],
                "Category": data[6],
                "Name": data[7],
                "Footfall": data[8],
                "ConversionRate": data[9]
            });
        }
    return lines;
}


/*
function generateLatlngArray(filtered) {
    var allTextLines = filtered.split(/\r\n|\n/);
    var headers = allTextLines[0].split(',');
    var latlngArray = new Array();

    for (var i=1; i<allTextLines.length; i++) {
        var data = allTextLines[i].split(',');
            lines.push({
                "Time": data[0],
                "Id": data[1],

                 "Lat": data[2],
                 "Long": data[3],
                 "Alt": data[4],

                //"latLng": {"Lat": data[1], "Long": data[2], "Alt": data[4] }


                "FloorIndex": data[5],
                "Name": data[6],
                "Footfall": data[7],
                "Conversion": data[8],
                "Colour": ""
            });
        }
    return latlngArray;
}
*/


function filterByTime(processedData, time) {
    var things = $.grep(processedData, function (shop) {
        return (shop.Time == time);
    });
    return things;
}