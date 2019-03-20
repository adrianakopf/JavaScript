// -------DISPLAY ALL DATA ON THE WEBPAGE-------
// from data.js
var tableData = data;

//setting up a function to call after filter
UFOs(tableData);

// reference for the table body html
function UFOs(data){
var tbody = d3.select("tbody");
tbody.html("");

// Console.log the UFO data from data.js
// console.log(data);

// Loop through data file and append to html 
data.forEach(function(UFO_Report) {
  // console.log(UFO_Report);
   var row = tbody.append("tr");
 
 Object.entries(UFO_Report).forEach(function([key, value]) {
    
	// console.log(key, value);  
	var cell = tbody.append("td");
      cell.text(value);
 }); 
});
}

// -------FILTER DATA AND DISPLAY ON THE WEBPAGE-------

// --------- Filter By Date: ---------
// On click button, execute
var submit = d3.select("#date-bt"); 
submit.on("click", function() {
          // Prevent the page from refreshing automatically
            d3.event.preventDefault();

          // Select the input element on html page id:datetimevar 
            var inputElement = d3.select("#datetimevar");

          // Get the value property of the input element
            var inputValue = inputElement.property("value");
            // console.log(inputValue);
            // console.log(tableData);

            // Filter table with exact date match
            var filteredDate = tableData.filter(tableData => tableData.datetime === inputValue);
            // console.log(filteredDate);
            var dates = filteredDate.map(tableData  => tableData.datetime);

UFOs(filteredDate);
});
 
// --------- Filter By City: ---------
var submit = d3.select("#city-bt");
submit.on("click", function() {
            // Prevent the page from refreshing automatically
            d3.event.preventDefault();

            // get the city info
            var inputCityElement = d3.select("#cityvar");
            var inputCityValue = inputCityElement.property("value");
            //  console.log(inputCityValue);
            //  console.log(tableData);
          
            var filteredCity = tableData.filter(tableData => tableData.city === inputCityValue);
            // console.log(filteredCity);  

            var cities = filteredCity.map(tableData  => tableData.city);

UFOs(filteredCity);
});

// --------- Filter By State: ---------
var submit = d3.select("#state-bt");
submit.on("click", function() {
          // Prevent the page from refreshing automatically
          d3.event.preventDefault();

          // get the city info
          var inputStElement = d3.select("#statevar");
          var inputStValue = inputStElement.property("value");
            //  console.log(inputStValue);
            //  console.log(tableData);
        
          var filteredState = tableData.filter(tableData => tableData.state === inputStValue);
          // console.log(filteredState);  

          var states = filteredState.map(tableData  => tableData.state);

UFOs(filteredState);
});
 
// --------- Filter By Country: ---------
var submit = d3.select("#country-bt");
submit.on("click", function() {
        // Prevent the page from refreshing automatically
          d3.event.preventDefault();

          // get the country info
          var inputCtryElement = d3.select("#countryvar");
          var inputCtryValue = inputCtryElement.property("value");
            //  console.log(inputCtryValue);
            //  console.log(tableData);
          
          var filteredCtry = tableData.filter(tableData => tableData.country === inputCtryValue);
            // console.log(filteredCtry);  

          var country = filteredCtry.map(tableData  => tableData.country);
UFOs(filteredCtry);
});
 
// --------- Filter By Shape: ---------
var submit = d3.select("#shape-bt");

submit.on("click", function() {

            // Prevent the page from refreshing automatically
            d3.event.preventDefault();

          // get the city info
          var inputShElement = d3.select("#shapevar");
          var inputShValue = inputShElement.property("value");
            //  console.log(inputShValue);
            //  console.log(tableData);
          
          var filteredShape = tableData.filter(tableData => tableData.shape === inputShValue);
            // console.log(filteredShape);  

            var cities = filteredShape.map(tableData  => tableData.shape);

UFOs(filteredShape);
});

