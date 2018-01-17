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
  return this;
};

Store.prototype.render = function() {
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = this.name;
  tdEl.setAttribute('class', 'name');
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
    thEl.setAttribute('class', 'header-row');
    trEl.appendChild(thEl);
  }
  storeTable.appendChild(trEl);
}

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
firstAndPike.populateHourlySales().render();
seaTac.populateHourlySales().render();
seattleCenter.populateHourlySales().render();
capitolHill.populateHourlySales().render();
alki.populateHourlySales().render();
rowOfTotals();