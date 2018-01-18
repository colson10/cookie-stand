'use strict';

var locationHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var storeTable = document.getElementById('stores');
var storeForm = document.getElementById('store-form');
function reducer(a, b) {
  return a + b;
}
var allLocations = [];


function Store(name, minCust, maxCust, aveCust) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.aveCust = aveCust;
  this.hourlySalesProjections = [];
  allLocations.push(this);
}

Store.prototype.populateHourlySales = function() {
  if (this.hourlySalesProjections.length === 0) {
    for (var i = 0; i < locationHours.length; i++) {
      this.hourlySalesProjections.push(Math.round((Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust)) * this.aveCust));
    }
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
  for (var i = 0; i < locationHours.length; i++) {
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
  thEl.textContent = 'Location';
  thEl.setAttribute('class', 'header-row');
  trEl.appendChild(thEl);
  for (var i = 0; i < locationHours.length; i++) {
    thEl = document.createElement('th');
    thEl.textContent = locationHours[i];
    thEl.setAttribute('class', 'header-row');
    trEl.appendChild(thEl);
  }
  thEl = document.createElement('th');
  thEl.textContent = 'Total';
  thEl.setAttribute('class', 'header-row');
  trEl.appendChild(thEl);
  storeTable.appendChild(trEl);
}

function rowOfTotals() {
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = 'Totals';
  tdEl.setAttribute('id', 'total');
  trEl.appendChild(tdEl);
  for (var i = 0; i < locationHours.length; i++) {
    var total = 0;
    for (var x = 0; x < allLocations.length; x++) {
      total += allLocations[x].hourlySalesProjections[i];
    }
    tdEl = document.createElement('td');
    tdEl.textContent = total;
    tdEl.setAttribute('class', 'hourly-totals');
    trEl.appendChild(tdEl);
  }
  var totalAll = 0;
  for (var j = 0; j < allLocations.length; j++) {
    totalAll += allLocations[j].hourlySalesProjections.reduce(reducer);
  }
  tdEl = document.createElement('td');
  tdEl.textContent = totalAll;
  tdEl.setAttribute('class', 'hourly-totals');
  trEl.appendChild(tdEl);
  storeTable.appendChild(trEl);
}

function renderAllStores() {
  for (var i in allLocations) {
    allLocations[i].populateHourlySales().render();
  }
}

function addNewStore(event) {
  event.preventDefault();

  var newName = event.target.storeName.value;
  console.log(newName);
  console.log(typeof newName);
  var newMinCust = event.target.minCustPer.valueAsNumber;
  console.log(newMinCust);
  console.log(typeof newMinCust);
  var newMaxCust = event.target.maxCustPer.valueAsNumber;
  console.log(newMaxCust);
  console.log(typeof newMaxCust);
  var newAveCust = event.target.aveCookiePer.valueAsNumber;
  console.log(newAveCust);
  console.log(typeof newAveCust);

  new Store(newName, newMinCust, newMaxCust, newAveCust);

  storeTable.innerHTML = '';
  makeHeaderRow();
  renderAllStores();
  rowOfTotals();
}

new Store('1st and Pike', 23, 65, 6.3);
new Store('SeaTac Airport', 3, 24, 1.2);
new Store('Seattle Center', 11, 38, 3.7);
new Store('Capitol Hill', 20, 38, 2.3);
new Store('Alki', 2, 16, 4.6);

storeForm.addEventListener('submit', addNewStore);

makeHeaderRow();
renderAllStores();
rowOfTotals();