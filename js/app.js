'use strict';

var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
var hours = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: '];

var pikeUl = document.getElementById('pike');
var seaTacUl = document.getElementById('seatac');
var seaCenterUl = document.getElementById('seacenter');
var capHillUl = document.getElementById('caphill');
var alkiUl = document.getElementById('alki');

function getRandomCustomers(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max-min+1)) + min;
}

var pike = {
    name: '1st and Pike',
    minHourlyCust: 23,
    maxHourlyCust: 65,
    avgCustSale: 6.3,
    
    numCustomers: function(){
        var totalSales = 0;
        var salesArray = [];
        for(var i=0; i<hours.length; i++){
            //Generate random # customers between min and max
            var numCookies = getRandomCustomers(this.minHourlyCust, this.maxHourlyCust) * this.avgCustSale;
            salesArray.push(Math.round(numCookies));
        
            //Create element to hold data
            var liEl = document.createElement('li');

            //Assign data to element
            liEl.textContent = hours[i] + salesArray[i] + ' cookies';
            totalSales = totalSales + Math.round(numCookies);
            console.log('assigned value liEl', liEl);

            //Put element into the DOM
            pikeUl.appendChild(liEl);
        }
        salesArray.push(totalSales);
        var liEl = document.createElement('li');
        liEl.textContent = 'Total sales: ' + totalSales + ' cookies';
        pikeUl.appendChild(liEl);
    }
};
pike.numCustomers();

var seaTac = {
    name: 'SeaTac Airport',
    minHourlyCust: 3,
    maxHourlyCust: 24,
    avgCustSale: 1.2, 

    numCustomers: function(){
        var totalSales = 0;
        var salesArray = [];
        for(var i=0; i<hours.length; i++){
            //Generate random # customers between min and max
            var numCookies = getRandomCustomers(this.minHourlyCust, this.maxHourlyCust) * this.avgCustSale;
            salesArray.push(Math.round(numCookies));

            //Create element to hold data
            var liEl = document.createElement('li');

            //Assign data to element
            liEl.textContent = hours[i] + salesArray[i] + ' cookies';
            totalSales = totalSales + Math.round(numCookies);
            console.log('assigned value liEl', liEl);

            //Put element into the DOM
            seaTacUl.appendChild(liEl);
        }
        salesArray.push(totalSales);
        var liEl = document.createElement('li');
        liEl.textContent = 'Total sales: ' + totalSales + ' cookies';
        seaTacUl.appendChild(liEl);
    }
};
seaTac.numCustomers();

var seattleCenter = {
    name: 'Seattle Center',
    minHourlyCust: 11,
    maxHourlyCust: 38,
    avgCustSale: 3.7,

    numCustomers: function(){
        var totalSales = 0;
        for(var i=0; i<hours.length; i++){
            //Generate random # customers between min and max
            var numCookies = getRandomCustomers(this.minHourlyCust, this.maxHourlyCust) * this.avgCustSale;

            //Create element to hold data
            var liEl = document.createElement('li');

            //Assign data to element
            liEl.textContent = hours[i] + ': ' + Math.round(numCookies) + ' cookies';
            totalSales = totalSales + Math.round(numCookies);
            console.log('assigned value liEl', liEl);

            //Put element into the DOM
            seaCenterUl.appendChild(liEl);
        }
        var liEl = document.createElement('li');
        liEl.textContent = 'Total sales: ' + totalSales + ' cookies';
        seaCenterUl.appendChild(liEl);
    }
};
seattleCenter.numCustomers();

var capitolHill = {
    name: 'Capitol Hill',
    minHourlyCust: 20,
    maxHourlyCust: 38,
    avgCustSale: 2.3,

    numCustomers: function(){
        var totalSales = 0;
        for(var i=0; i<hours.length; i++){
            //Generate random # customers between min and max
            var numCookies = getRandomCustomers(this.minHourlyCust, this.maxHourlyCust) * this.avgCustSale;

            //Create element to hold data
            var liEl = document.createElement('li');

            //Assign data to element
            liEl.textContent = hours[i] + ': ' + Math.round(numCookies) + ' cookies';
            totalSales = totalSales + Math.round(numCookies);
            console.log('assigned value liEl', liEl);

            //Put element into the DOM
            capHillUl.appendChild(liEl);
        }
        var liEl = document.createElement('li');
        liEl.textContent = 'Total sales: ' + totalSales + ' cookies';
        capHillUl.appendChild(liEl);
    }
};
capitolHill.numCustomers();

var alki = {
    name: 'Alki Beach',
    minHourlyCust: 2,
    maxHourlyCust: 16,
    avgCustSale: 4.6,

    numCustomers: function(){
        var totalSales = 0;
        for(var i=0; i<hours.length; i++){
            //Generate random # customers between min and max
            var numCookies = getRandomCustomers(this.minHourlyCust, this.maxHourlyCust) * this.avgCustSale;

            //Create element to hold data
            var liEl = document.createElement('li');

            //Assign data to element
            liEl.textContent = hours[i] + ': ' + Math.round(numCookies) + ' cookies';
            totalSales = totalSales + Math.round(numCookies);
            console.log('assigned value liEl', liEl);

            //Put element into the DOM
            alkiUl.appendChild(liEl);
        }
        var liEl = document.createElement('li');
        liEl.textContent = 'Total sales: ' + totalSales + ' cookies';
        alkiUl.appendChild(liEl);
    }
};
alki.numCustomers();