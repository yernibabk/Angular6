var fs = require('fs');

var content = "";

//NON-BLOCKING API
var stream = fs.createReadStream("fist.js");

stream.on("data", function(chunk) {
    console.log(chunk.toString());
});

stream.on("end", function(){
    console.log("DONE!");
});

stream.on("error", function(e){
    console.log("PROBLEM!", e);
});

console.log("OUTSIDE: "+content.toString());