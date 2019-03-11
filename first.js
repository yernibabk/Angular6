/*
* High Order Functions
*/

var products = [
    {"id":1,"name":"iPhone","price":124447.44,"category" : "mobile"},
    {"id":2,"name":"Onida","price":4444.44,"category" : "tv"},
    {"id":3,"name":"OnePlus 6","price":98444.44,"category" : "mobile"},
    {"id":4,"name":"HDMI connector","price":2444.00,"category" : "computer"},
      {"id":5,"name":"Samsung","price":68000.00,"category" : "tv"}
];

function forEach(data, action) {
    for(var i =0 ; i< data.length; i++) {
        action(data[i]);
    }
}

function map(data, mapperFn) {
    var result =[];
        forEach(data,function(elem){
            result.push(mapperFn(elem));
        });
    return result;
}

function filter(data, predicate) {
    var result =[];
        forEach(data,function(elem){
            if(predicate(elem)) {
                result.push(elem);
            }
        })
    return result;
}

var mobiles = filter(products, function(e) { return e.category === 'mobile'; });

var mapped = map(mobiles, function(e) { return e.name; });

forEach(mapped, console.log);