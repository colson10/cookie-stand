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
  hourlySalesProjections: [],
  randomNum: function() {
    return Math.round(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  },
  aveCookiesPerHour: function() {
    return Math.round(this.randomNum() * this.aveCust);
  },
  populateHourlySales: function() {
    // I want to return an array with aveCookiesPerHour for each index in the array locationHours (15)
    // for loop running through the length of locationHours, push each value to an empty array.
    // return the array
    for (var i = 0; i < locationHours.length; i++) {
      this.hourlySalesProjections.push(this.aveCookiesPerHour());
    }
  },
  render: function() {
    // access ul from index.html
    var ulEl = document.getElementById('pike');

    for (var i = 0; i < this.hourlySalesProjections.length; i++) {
      // create list item elements
      var liEl = document.createElement('li');
      // give items content
      liEl.textContent = locationHours[i] + ': ' + this.hourlySalesProjections[i];
      // append list items to ul element
      ulEl.appendChild(liEl);
    }
  },
  renderTotalDailySales: function() {
    var total = 0;
    for (var i = 0; i < this.hourlySalesProjections.length; i++) {
      total += this.hourlySalesProjections[i];
    }
    var ulEl = document.getElementById('pike');
    var liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + total + ' cookies sold per day.';
    ulEl.appendChild(liEl);
  },
};
firstAndPike.populateHourlySales();
firstAndPike.render();
firstAndPike.renderTotalDailySales();

// Create object literal for each location
// Create properties for min, max, average
// I also need a method for determining a random number of customers per hour
// Calculate and store the projected number of cookies purchased for each hour by multiplying the random number for that location times the average number of cookies per customer
// Store the results for each location in a separate array... perhaps as a property of the object representing that location
// Display the values of each array as unordered lists in the browser
// Calculate and display the sum of these hourly totals

var seatac = {
  minCust: 3,
  maxCust: 24,
  aveCust: 1.2,
  hourlySalesProjections: [],
  randomNum: function () {
    return Math.round(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  },
  aveCookiesPerHour: function() {
    return Math.round(this.randomNum() * this.aveCust);
  },
  populateHourlySales: function() {
    for (var i = 0; i < locationHours.length; i++) {
      this.hourlySalesProjections.push(this.aveCookiesPerHour());
    }
  },
  render: function() {
    var ulEl = document.getElementById('seatac');
    
    for (var i = 0; i < this.hourlySalesProjections.length; i++) {
      //create list item elements
      //give items content
      //append to ul element
      var liEl = document.createElement('li');
      liEl.textContent = locationHours[i] + ': ' + this.hourlySalesProjections[i];
      ulEl.appendChild(liEl);
    }
  },
  renderTotalDailySales: function() {
    var total = 0;
    for (var i = 0; i < this.hourlySalesProjections.length; i++) {
      total += this.hourlySalesProjections[i];
    }
    var ulEl = document.getElementById('seatac');
    var liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + total + ' cookies sold per day.';
    ulEl.appendChild(liEl);
  }
};

seatac.populateHourlySales();
seatac.render();
seatac.renderTotalDailySales();

var seattleCenter = {
  minCust: 11,
  maxCust: 38,
  aveCust: 3.7,
  hourlySalesProjections: [],
  randomNum: function() {
    return Math.round(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  },
  aveCookiesPerHour: function() {
    return Math.round(this.randomNum() * this.aveCust);
  },
  populateHourlySales: function() {
    for (var i = 0; i < locationHours.length; i++) {
      this.hourlySalesProjections.push(this.aveCookiesPerHour());
    }
  },
  render: function() {
    var ulEl = document.getElementById('seattle-center');

    for (var i = 0; i < this.hourlySalesProjections.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = locationHours[i] + ': ' + this.hourlySalesProjections[i];
      ulEl.appendChild(liEl);
    }
  },
  renderTotalDailySales: function() {
    var ulEl = document.getElementById('seattle-center');
    var total = 0;

    for (var i = 0; i < this.hourlySalesProjections.length; i++) {
      total += this.hourlySalesProjections[i];
    }

    var liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + total + ' cookies sold per day.';
    ulEl.appendChild(liEl);
  }
};

seattleCenter.populateHourlySales();
seattleCenter.render();
seattleCenter.renderTotalDailySales();


var capitol = {
  minCust: 20,
  maxCust: 38,
  aveCust: 2.3,
  hourlySalesProjections: [],
  randomNum: function() {
    return Math.round(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  },
  aveCookiesPerHour: function() {
    return Math.round(this.randomNum() * this.aveCust);
  },
  populateHourlySales: function() {
    for (var i = 0; i < locationHours.length; i++) {
      this.hourlySalesProjections.push(this.aveCookiesPerHour());
    }
  },
  render: function() {
    var ulEl = document.getElementById('capitol');

    for (var i = 0; i < this.hourlySalesProjections.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = locationHours[i] + ': ' + this.hourlySalesProjections[i];
      ulEl.appendChild(liEl);
    }
  },
  renderTotalDailySales: function() {
    var ulEl = document.getElementById('capitol');
    var total = 0;

    for (var i = 0; i < this.hourlySalesProjections.length; i++) {
      total += this.hourlySalesProjections[i];
    }
    var liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + total + ' cookies sold per day.';
    ulEl.appendChild(liEl);
  }
};

capitol.populateHourlySales();
capitol.render();
capitol.renderTotalDailySales();
