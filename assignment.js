//feetToMile
function feetToMile(feet){
    var mile = feet / 5280;
    return mile;
}
var sisterMile = feetToMile(36960);
console.log(sisterMile);
var brotherMile = feetToMile(47520);
console.log(brotherMile);
var uncleMile = feetToMile(79200);
console.log(uncleMile);
