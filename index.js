// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    const hqBlock = 42;
    return Math.abs(someValue - hqBlock);
}

function distanceFromHqInFeet(someValue) {
    const feetPerBlock = 264;
    const distanceInBlocks = distanceFromHqInBlocks(someValue);
    return distanceInBlocks * feetPerBlock;
}

function distanceTravelledInFeet(start, destination) {
    const feetPerBlock = 264;
    const distanceInBlocks = Math.abs(start - destination);
    return distanceInBlocks * feetPerBlock;
}

function calculatesFarePrice(start, destination) {
    const distanceInFeet = distanceTravelledInFeet(start, destination);

    if (distanceInFeet <= 400) {
        return 0; // Free for the first 400 feet
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
        return (distanceInFeet - 400) * 0.02; // 2 cents per foot after the first 400 feet
    } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
        return 25; // Flat rate for distances over 2000 feet but within 2500 feet
    } else {
        return 'cannot travel that far'; // Reject rides over 2500 feet
    }
}

