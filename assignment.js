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

// woodCalculator
function woodCalculator(chair,table,bed){
    var chairCount = 5 * 1;
    var tableCount = 5 * 3;
    var bedCount = 5 * 5;
    var totalWood = chairCount + tableCount + bedCount;
    return totalWood;
}
var woodResult = woodCalculator(1 , 3, 5);
console.log(woodResult);