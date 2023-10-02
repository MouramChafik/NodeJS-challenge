const user = require('./information');
var cowsay = require("cowsay");

console.log(cowsay.say({
    text : `${user.Name} ${user.Age} ${user.Campus}` ,
    e : "oO",
    T : "U "
}));
