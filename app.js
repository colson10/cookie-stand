'use strict';

var locationHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

// Create object literal for each location
// Create properties for min, max, average
// I also need a method for determining a random number of customers per hour
// Calculate and store the projected number of cookies purchased for each hour by multiplying the random number for that location times the average number of cookies per customer
// Store the results for each location in a separate array... perhaps as a property of the object representing that location
// Display the values of each array as unordered lists in the browser
// Calculate and display the sum of these hourly totals

var firstAndPike = {
  minCust: 23,
  maxCust: 65,
  aveCust: 6.3,
  randomNum: function() {
    return Math.round(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  },
  aveCookiesPerHour: function() {
    return Math.round(this.randomNum() * this.aveCust);
  },
  hourlySalesProjections: function() {
    // I want to return an array with aveCookiesPerHour for each index in the array locationHours (15)
    // for loop running through the length of locationHours, push each value to an empty array.
    // return the array
    var myArray = [];
    for (var i = 0; i < locationHours.length; i++) {
      myArray.push(this.aveCookiesPerHour());
    }
    return myArray;
  },
  totalDailySalesProjection: function() {
    var total = 0;
    for (var i = 0; i < locationHours.length; i++) {
      total += this.aveCookiesPerHour();
    }
    return total;
  }
};