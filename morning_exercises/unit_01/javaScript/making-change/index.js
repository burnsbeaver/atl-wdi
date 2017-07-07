// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.
"use strict";
/// DO NOT EDIT ABOVE THIS LINE ///
var makeChange = function(price, payment) {
  // Your Code Here
  var remainderOfQuarters = 0;
  var remainderOfDimes = 0;
  var remainderOFNickels = 0;
  var remainderOfPennies = 0;
  var difference = (payment - price)
  var changeReturned = [remainderOfQuarters, remainderOfDimes, remainderOFNickels, remainderOfPennies];
  if (price > payment) {
    return "You own more money, scum"
  }
  function sortChange() {
    for (differnece; difference < .25; difference = difference - .25) {
      difference++
  }
}

makeChange(5, 7);

/// DO NOT EDIT BELOW THIS LINE ///
module.exports = {
  makeChange: makeChange
};
