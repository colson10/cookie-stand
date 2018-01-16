'use strict';

var locationHours = ['Location', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'Total'];
var storeTable = document.getElementById('stores');

function reducer(a, b) {
  return a + b;
}

function Store(name, minCust, maxCust, aveCust) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.aveCust = aveCust;
  this.hourlySalesProjections = [];
}

Store.prototype.populateHourlySales = function() {
  for (var i = 0; i < locationHours.length - 2; i++) {
    this.hourlySalesProjections.push(Math.round((Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust)) * this.aveCust));
  }
};

Store.prototype.render = function() {
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = this.name;
  tdEl.setAttribute('id', 'name');
  trEl.appendChild(tdEl);
  var total = 0;
  for (var i = 0; i < this.hourlySalesProjections.length; i++) {
    tdEl = document.createElement('td');
    tdEl.textContent = this.hourlySalesProjections[i];
    trEl.appendChild(tdEl);
    total += this.hourlySalesProjections[i];
  }
  tdEl = document.createElement('td');
  tdEl.textContent = total;
  trEl.appendChild(tdEl);
  storeTable.appendChild(trEl);
};

function makeHeaderRow() {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  for (var i = 0; i < locationHours.length; i++) {
    thEl = document.createElement('th');
    thEl.textContent = locationHours[i];
    trEl.appendChild(thEl);
  }
  storeTable.appendChild(trEl);
}
// last row totaling all locations for each hour and total
function rowOfTotals() {
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = 'Location Totals';
  tdEl.setAttribute('id', 'total');
  trEl.appendChild(tdEl);
  for (var i = 0; i < firstAndPike.hourlySalesProjections.length; i++) {
    var total = firstAndPike.hourlySalesProjections[i] + seaTac.hourlySalesProjections[i] + seattleCenter.hourlySalesProjections[i] + capitolHill.hourlySalesProjections[i] + alki.hourlySalesProjections[i];
    tdEl = document.createElement('td');
    tdEl.textContent = total;
    trEl.appendChild(tdEl);
  }
  var totalAll = firstAndPike.hourlySalesProjections.reduce(reducer) + seaTac.hourlySalesProjections.reduce(reducer) + seattleCenter.hourlySalesProjections.reduce(reducer) + capitolHill.hourlySalesProjections.reduce(reducer) + alki.hourlySalesProjections.reduce(reducer);
  tdEl = document.createElement('td');
  tdEl.textContent = totalAll;
  trEl.appendChild(tdEl);
  storeTable.appendChild(trEl);
}

var firstAndPike = new Store('1st and Pike', 23, 65, 6.3);
var seaTac = new Store('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new Store('Seattle Center', 11, 38, 3.7);
var capitolHill = new Store('Capitol Hill', 20, 38, 2.3);
var alki = new Store('Alki', 2, 16, 4.6);

makeHeaderRow();
firstAndPike.populateHourlySales();
firstAndPike.render();
seaTac.populateHourlySales();
seaTac.render();
seattleCenter.populateHourlySales();
seattleCenter.render();
capitolHill.populateHourlySales();
capitolHill.render();
alki.populateHourlySales();
alki.render();
rowOfTotals();





// Monday's code below here:

// var firstAndPike = {
//   minCust: 23,
//   maxCust: 65,
//   aveCust: 6.3,
//   hourlySalesProjections: [],
//   // randomNum: function() {
//   //   return Math.round(Math.random() * (this.maxCust - this.minCust) + this.minCust);
//   // },
//   aveCookiesPerHour: function() {
//     return Math.round((Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust)) * this.aveCust);
//   },
//   populateHourlySales: function() {
//     var hourlySalesProjections = [];
//     for (var i = 0; i < locationHours.length; i++) {
//       hourlySalesProjections.push(this.aveCookiesPerHour());
//     }
//     return hourlySalesProjections;
//   },
//   render: function() {
//     var ulEl = document.getElementById('pike');
//     var hourlyplaceholder = this.populateHourlySales();
//     console.log(hourlyplaceholder);
//     for (var i = 0; i < hourlyplaceholder.length; i++) {
//       var liEl = document.createElement('li');
//       liEl.textContent = locationHours[i] + ': ' + hourlyplaceholder[i];

//       ulEl.appendChild(liEl);
//     }
//   },
//   renderTotalDailySales: function() {
//     var total = 0;
//     var hourlyplaceholder = this.populateHourlySales();
//     for (var i = 0; i < hourlyplaceholder.length; i++) {
//       total += hourlyplaceholder[i];
//     }

//     var ulEl = document.getElementById('pike');
//     var liEl = document.createElement('li');
//     liEl.textContent = 'Total: ' + total + ' cookies sold per day.';
//     ulEl.appendChild(liEl);
//   },
// };

// // var seatac = {
// //   minCust: 3,
// //   maxCust: 24,
// //   aveCust: 1.2,
// //   hourlySalesProjections: [],
// //   randomNum: function () {
// //     return Math.round(Math.random() * (this.maxCust - this.minCust) + this.minCust);
// //   },
// //   aveCookiesPerHour: function() {
// //     return Math.round(this.randomNum() * this.aveCust);
// //   },
// //   populateHourlySales: function() {
// //     for (var i = 0; i < locationHours.length; i++) {
// //       this.hourlySalesProjections.push(this.aveCookiesPerHour());
// //     }
// //   },
// //   render: function() {
// //     var ulEl = document.getElementById('seatac');

// //     for (var i = 0; i < this.hourlySalesProjections.length; i++) {
// //       var liEl = document.createElement('li');
// //       liEl.textContent = locationHours[i] + ': ' + this.hourlySalesProjections[i];
// //       ulEl.appendChild(liEl);
// //     }
// //   },
// //   renderTotalDailySales: function() {
// //     var total = 0;

// //     for (var i = 0; i < this.hourlySalesProjections.length; i++) {
// //       total += this.hourlySalesProjections[i];
// //     }

// //     var ulEl = document.getElementById('seatac');
// //     var liEl = document.createElement('li');
// //     liEl.textContent = 'Total: ' + total + ' cookies sold per day.';
// //     ulEl.appendChild(liEl);
// //   }
// // };

// // var seattleCenter = {
// //   minCust: 11,
// //   maxCust: 38,
// //   aveCust: 3.7,
// //   hourlySalesProjections: [],
// //   randomNum: function() {
// //     return Math.round(Math.random() * (this.maxCust - this.minCust) + this.minCust);
// //   },
// //   aveCookiesPerHour: function() {
// //     return Math.round(this.randomNum() * this.aveCust);
// //   },
// //   populateHourlySales: function() {
// //     for (var i = 0; i < locationHours.length; i++) {
// //       this.hourlySalesProjections.push(this.aveCookiesPerHour());
// //     }
// //   },
// //   render: function() {
// //     var ulEl = document.getElementById('seattle-center');

// //     for (var i = 0; i < this.hourlySalesProjections.length; i++) {
// //       var liEl = document.createElement('li');
// //       liEl.textContent = locationHours[i] + ': ' + this.hourlySalesProjections[i];
// //       ulEl.appendChild(liEl);
// //     }
// //   },
// //   renderTotalDailySales: function() {
// //     var ulEl = document.getElementById('seattle-center');
// //     var total = 0;

// //     for (var i = 0; i < this.hourlySalesProjections.length; i++) {
// //       total += this.hourlySalesProjections[i];
// //     }

// //     var liEl = document.createElement('li');
// //     liEl.textContent = 'Total: ' + total + ' cookies sold per day.';
// //     ulEl.appendChild(liEl);
// //   }
// // };

// // var capitol = {
// //   minCust: 20,
// //   maxCust: 38,
// //   aveCust: 2.3,
// //   hourlySalesProjections: [],
// //   randomNum: function() {
// //     return Math.round(Math.random() * (this.maxCust - this.minCust) + this.minCust);
// //   },
// //   aveCookiesPerHour: function() {
// //     return Math.round(this.randomNum() * this.aveCust);
// //   },
// //   populateHourlySales: function() {
// //     for (var i = 0; i < locationHours.length; i++) {
// //       this.hourlySalesProjections.push(this.aveCookiesPerHour());
// //     }
// //   },
// //   render: function() {
// //     var ulEl = document.getElementById('capitol');

// //     for (var i = 0; i < this.hourlySalesProjections.length; i++) {
// //       var liEl = document.createElement('li');
// //       liEl.textContent = locationHours[i] + ': ' + this.hourlySalesProjections[i];
// //       ulEl.appendChild(liEl);
// //     }
// //   },
// //   renderTotalDailySales: function() {
// //     var ulEl = document.getElementById('capitol');
// //     var total = 0;

// //     for (var i = 0; i < this.hourlySalesProjections.length; i++) {
// //       total += this.hourlySalesProjections[i];
// //     }

// //     var liEl = document.createElement('li');
// //     liEl.textContent = 'Total: ' + total + ' cookies sold per day.';
// //     ulEl.appendChild(liEl);
// //   }
// // };

// // var alki = {
// //   minCust: 2,
// //   maxCust: 16,
// //   aveCust: 4.6,
// //   hourlySalesProjections: [],
// //   randomNum: function() {
// //     return Math.round(Math.random() * (this.maxCust - this.minCust) + this.minCust);
// //   },
// //   aveCookiesPerHour: function() {
// //     return Math.round(this.randomNum() * this.aveCust);
// //   },
// //   populateHourlySales: function() {
// //     for (var i = 0; i < locationHours.length; i++) {
// //       this.hourlySalesProjections.push(this.aveCookiesPerHour());
// //     }
// //   },
// //   render: function() {
// //     var ulEl = document.getElementById('alki');

// //     for (var i = 0; i < this.hourlySalesProjections.length; i++) {
// //       var liEl = document.createElement('li');
// //       liEl.textContent = locationHours[i] + ': ' + this.hourlySalesProjections[i];
// //       ulEl.appendChild(liEl);
// //     }
// //   },
// //   renderTotalDailySales: function() {
// //     var ulEl = document.getElementById('alki');
// //     var total = 0;

// //     for (var i = 0; i < this.hourlySalesProjections.length; i++) {
// //       total += this.hourlySalesProjections[i];
// //     }

// //     var liEl = document.createElement('li');
// //     liEl.textContent = 'Total: ' + total + ' cookies sold per day.';
// //     ulEl.appendChild(liEl);
// //   }
// // };

// // // firstAndPike.populateHourlySales();
// firstAndPike.render();
// firstAndPike.renderTotalDailySales();
// // seatac.populateHourlySales();
// // seatac.render();
// // seatac.renderTotalDailySales();
// // seattleCenter.populateHourlySales();
// // seattleCenter.render();
// // seattleCenter.renderTotalDailySales();
// // capitol.populateHourlySales();
// // capitol.render();
// // capitol.renderTotalDailySales();
// // alki.populateHourlySales();
// // alki.render();
// // alki.renderTotalDailySales();