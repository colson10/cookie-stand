'use strict';

var locationHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

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
    for (var i = 0; i < locationHours.length; i++) {
      this.hourlySalesProjections.push(this.aveCookiesPerHour());
    }
  },
  render: function() {
    var ulEl = document.getElementById('pike');

    for (var i = 0; i < this.hourlySalesProjections.length; i++) {
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

    var ulEl = document.getElementById('pike');
    var liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + total + ' cookies sold per day.';
    ulEl.appendChild(liEl);
  },
};

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

var alki = {
  minCust: 2,
  maxCust: 16,
  aveCust: 4.6,
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
    var ulEl = document.getElementById('alki');

    for (var i = 0; i < this.hourlySalesProjections.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = locationHours[i] + ': ' + this.hourlySalesProjections[i];
      ulEl.appendChild(liEl);
    }
  },
  renderTotalDailySales: function() {
    var ulEl = document.getElementById('alki');
    var total = 0;

    for (var i = 0; i < this.hourlySalesProjections.length; i++) {
      total += this.hourlySalesProjections[i];
    }

    var liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + total + ' cookies sold per day.';
    ulEl.appendChild(liEl);
  }
};

firstAndPike.populateHourlySales();
firstAndPike.render();
firstAndPike.renderTotalDailySales();
seatac.populateHourlySales();
seatac.render();
seatac.renderTotalDailySales();
seattleCenter.populateHourlySales();
seattleCenter.render();
seattleCenter.renderTotalDailySales();
capitol.populateHourlySales();
capitol.render();
capitol.renderTotalDailySales();
alki.populateHourlySales();
alki.render();
alki.renderTotalDailySales();