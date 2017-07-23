//*************************
// Problem 1:
// Barrels O' RUM
// - Find the cost of a small barrel:
//   - We know 1 small barrel costs 60 right off the bat
var barrels = function(small, large, total){
  var smallBarrel = 60;
  var largeBarrel = (total - (small * smallBarrel)) / large;

return largeBarrel;
};
// - Find the cost of the large barrel:
//   - First find the cost of all large barrels
//     - To do that, grab the total cost (825)
//     - Subtract the small barrels from the total
//       - calculate the small barrels total price (2 * 60 = 120)
//     - The remainder amount is the total cost of large barrels
//     - Divide total cost of large barrels by number of barrels



//*************************
// Problem 2:
// Sailing the Seas

var shipFuelCost = function(fuelPrice, milesPerGallon){
  //your code here
  // - Find the distance of the earth circumference in miles
    var earthMiles = 24901;
  // - Calculate the # of gallons used to travel around the earth
    var gallonsUsed = earthMiles / milesPerGallon
  //   - circumference / MPG (miles per gallon)
  // - Calculate the cost:
    var cost = gallonsUsed * fuelPrice
  //   - total gallons used * cost of fuel
    return cost
};

//*************************
// Problem 3:
// GROG

var calcFruitJuice = function(a, b, c, d){
  // (# gallons Costco juice, % pure fruit juice Costco, # gallons Kirkland juice, % pure fruit juice Kirkland)
  //your code here
  // - Find the total amount of pure fruit juice (gal)
  //   - Total of Costco pure fruit juice:
  var costcoJuice = (b / 100) * a;
  //     - percentage pure fruit juice * number of gallons
  //   - Total of Kirkland pure fruit juice:
  var kirklandJuice = (d / 100) * c;
  //     - percentage pure fruit juice * number of gallons
  //   - Add Costco pure fruit juice total + Kirkland pure fruit juice total
  var juiceTotal = a + c;
  // - Find the total amount of juice (gal):
  //   - Total of Costco juice + Total of Kirkland Juice
  var percentageAdd = costcoJuice + kirklandJuice
  // - Calculate (total pure fruit juice) / (total juice)
  var finalJuicing = percentageAdd / juiceTotal;

  return finalJuicing
};

//DO NOT EDIT BELOW THIS LINE//
module.exports = {
  barrels: barrels,
  shipFuelCost: shipFuelCost,
  calcFruitJuice: calcFruitJuice
};
