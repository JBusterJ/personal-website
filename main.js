var original = new Date(2009, 3, 20);
var current = new Date();
var a = Math.abs(original.getTime() - current.getTime()) / 1000 / 60 / 60 / 24 / 365

document.getElementById("age").innerHTML = a.toFixed("1");