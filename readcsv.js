/**
 * Takes a csv specified from url:"" and puts this into an array called lines
 * 
 */
$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "Dataset.csv",
        dataType: "text",
        success: function(data) {processData(data);}
     });
});

var lines = [];

function processData(allText) {
    var allTextLines = allText.split(/\r\n|\n/);
    var headers = allTextLines[0].split(',');
    //var lines = [];

    for (var i=1; i<allTextLines.length; i++) {
        var data = allTextLines[i].split(',');
        if (data.length == headers.length) {

            var tarr = [];
            for (var j=0; j<headers.length; j++) {
                //tarr.push(headers[j]+":"+data[j]);
                tarr.push(data[j]);
            }

            lines.push(tarr);
        }
    }

    //alert(lines);

    console.log(lines);

    //document.getElementById("line").innerHTML = lines[1].toString();
    //var big2D;



    for (var i=1; i<lines.length; i++)
    {
        if(lines[i][0] == "800")
        {
            array8.push(lines[i]);    
        }
        else if(lines[i][0] == "900")
        {
            array9.push(lines[i]);    
        }
        else if(lines[i][0] == "1000")
        {
            array10.push(lines[i]);    
        }
        else if(lines[i][0] == "1100")
        {
            array11.push(lines[i]);    
        }
        else if(lines[i][0] == "1200")
        {
            array12.push(lines[i]);    
        }
        else if(lines[i][0] == "1300")
        {
            array13.push(lines[i]);    
        }
        else if(lines[i][0] == "1400")
        {
            array14.push(lines[i]);    
        }
        else if(lines[i][0] == "1500")
        {
            array15.push(lines[i]);    
        }
        else if(lines[i][0] == "1600")
        {
            array16.push(lines[i]);    
        }
        else if(lines[i][0] == "1700")
        {
            array17.push(lines[i]);    
        }
        
    }
    return(lines);


}