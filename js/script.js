const button = document.querySelector("button");
const repairList = document.querySelector(".need-repair");
//console.log(button, repairList);

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

//add new property " needRepair" bike and skateboard
bike.needsRepair = true;
skateboard.needsRepair = true;
console.log(bike, skateboard);

//create click event to button element
button.addEventListener("click", function () {
  repairList.innerHTML = ""; //text would be cleared each time button is clicked
  const vehicleRepairList = myVehicles.filter(function(vehicle){
      return vehicle.needsRepair === true;
  })

  for (let vehicle of vehicleRepairList) {
    let li = document.createElement("li");
    li.innerHTML = `My <span class = "vehicle"> ${vehicle.type} </span> needs some ❤️`;
    repairList.append(li);
  }
});
