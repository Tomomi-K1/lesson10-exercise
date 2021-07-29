const createVehicle = function(type, numWheels, color){
    const vehicle = {
        type: type,
        numWheels: numWheels,
        color: color
    }
    return vehicle;
};

//create three different object by using factory function
const car = createVehicle("car", 4, "blue");
const bike = createVehicle("bike", 2, "red");
const skateboard = createVehicle("skateboard", 4, "black");

//create an array with above three objects
const myVehicles = [car, bike, skateboard];
//console.log(myVehicles);

//loop over the array of objects and loop over the properties and value 
for (let vehicle of myVehicles) {
    for(let key in vehicle)
     console.log(key, vehicle[key]);
    };

