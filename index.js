// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers){
    return drivers.slice(0,2);
}

const returnLastTwoDrivers = drivers => drivers.slice(-2, drivers.length);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(a){
    return function fareQuintupler(a){
        return a*5
    }
}

function fareDoubler(a){
    return a*2
};


function fareTripler(a){
    return a*3
};

function selectDifferentDrivers(drivers, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(drivers)
};