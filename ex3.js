var fs = require('fs');

var content = "";

//NON-BLOCKING API
var stream = fs.createReadStream("first.js");

stream.on("data", function(chunk) {
    console.log(chunk.toString());
});

stream.on("end", function(){
    console.log("DONE!");
});



console.log("OUTSIDE: "+content.toString());