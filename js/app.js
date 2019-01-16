'use strict';

var hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm'];

var headerTr = document.getElementById('tableHead');
var pikeTr = document.getElementById('pike');
var seaTacTr = document.getElementById('seatac');
var seaCenterTr = document.getElementById('seacenter');
var capHillTr = document.getElementById('caphill');
var alkiTr = document.getElementById('alki');
var footerTr = document.getElementById('tableFoot');

var domId = [pikeTr, seaTacTr, seaCenterTr, capHillTr, alkiTr];
var allStores = [];

//Function creates random number for customers
function getRandomCustomers(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max-min+1)) + min;
}

//Constructor which will make new store objects
function Store(location, minCust, maxCust, avgSale){
    this.location = location;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgSale = avgSale;
    this.hourlySales = [];
    this.totalSales = 0;
    
    for(var i=0; i<hours.length; i++){
        var numCookies = getRandomCustomers(this.minCust, this.maxCust) * this.avgSale;
        this.hourlySales.push(Math.round(numCookies));
        this.totalSales = this.totalSales + Math.round(numCookies);
    }
    allStores.push(this);
}

new Store('1st and Pike', 23, 65, 6.3);
new Store('SeaTac Airport', 3, 24, 1.2);
new Store('Seattle Center', 11, 38, 3.7);
new Store('Capitol Hill', 20, 38, 2.3);
new Store('Alki Beach', 2, 16, 4.6);

//Write function to create table header
function makeHeader(){
    var tdEl = document.createElement('td');
    tdEl.textContent = null;
    headerTr.appendChild(tdEl);

    for(var i=0; i<hours.length; i++){
        tdEl = document.createElement('td');
        tdEl.textContent = hours[i];
        tableHead.appendChild(tdEl);
    }
    tdEl = document.createElement('td');
    tdEl.textContent = 'Daily Location Total';
    headerTr.appendChild(tdEl);
}
makeHeader();

//Write function to create tabular data
function makeDataTable(){
    for(var i=0; i<allStores.length; i++){
        var currentStore = allStores[i];
        //Push data to table rows
        var tdEl = document.createElement('td');
        tdEl.textContent = currentStore.location;
        domId[i].appendChild(tdEl);
        
        //Populate trEl with data from allStores
        for(var j=0; j<hours.length; j++){ 
            tdEl = document.createElement('td');
            tdEl.textContent = currentStore.hourlySales[j];
            domId[i].appendChild(tdEl);
        }
        tdEl = document.createElement('td');
        tdEl.textContent = currentStore.totalSales;
        domId[i].appendChild(tdEl);
    }
}
makeDataTable();

//Write function to create footer
function makeFooter(){
    var dailyTotal = 0;
    var tdEl = document.createElement('td');
    tdEl.textContent = 'Totals';
    footerTr.appendChild(tdEl);

    for(var i=0; i<hours.length; i++){
        var hourlyTotal = 0;
        for(var j=0; j<allStores.length; j++){
            var currentStore = allStores[j];
            var currentSales = currentStore.hourlySales[i];
            hourlyTotal = hourlyTotal + currentSales;
        }
        tdEl = document.createElement('td');
        tdEl.textContent = hourlyTotal;
        footerTr.appendChild(tdEl);
        dailyTotal = dailyTotal + hourlyTotal;
    }
    tdEl = document.createElement('td');
    tdEl.textContent = dailyTotal;
    footerTr.appendChild(tdEl);
}
makeFooter();

/*
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
            seaCenterUl.appendChild(liEl);
        }
        salesArray.push(totalSales);
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
            capHillUl.appendChild(liEl);
        }
        salesArray.push(totalSales);
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
            alkiUl.appendChild(liEl);
        }
        salesArray.push(totalSales);
        var liEl = document.createElement('li');
        liEl.textContent = 'Total sales: ' + totalSales + ' cookies';
        alkiUl.appendChild(liEl);
    }
};
alki.numCustomers(); */