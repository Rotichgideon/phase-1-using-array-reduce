

// Code your solution here
const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

const totalBatteries = batteryBatches.reduce(function (countBatt, currentBatt) {

    return countBatt += currentBatt;
});

console.log(totalBatteries)