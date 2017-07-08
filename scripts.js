// DRUGI KOD (próba: nazwy krajów + stolice)

// var url = 'https://restcountries.eu/rest/v1/name/';
// var countriesList = $('#countries');
// var countriesCapitals = $('.capitals');

// function searchCountries() {
// 	var countryName = $('#country-name').val();
// 	if(!countryName.length) countryName = 'Poland';
// 	$.ajax({
// 		url: url + countryName,
// 		method: 'GET',
// 		success: showCountriesList
// 	});
// };

// $('#search').click(searchCountries);

// function showCountriesList(resp) {
	//countriesList.empty();
// 	resp.forEach(function(item) {
// 		var container1 = $('.container1');
// 		$('<ul>').text(item.name).appendTo(countriesList)appendTo(container1);
// 		$('<li>').text(item.capital).appendTo(countriesCapitals);
// 	});
// };


// var link = new XMLHttpRequest();
// link.open('GET', url);
// link.addEventListener('load', function() {
// 	var response = JSON.parse(xhr.response);

// });


// PIERWSZY KOD (tylko nazwy krajów)

var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = $('#countries');

function searchCountries() {
	var countryName = $('#country-name').val();
	if(!countryName.length) countryName = 'Poland';
	$.ajax({
		url: url + countryName,
		method: 'GET',
		success: showCountriesList
	});
};

$('#search').click(searchCountries);

function showCountriesList(resp) {
	// countriesList.empty();
	resp.forEach(function(item) {
		$('<li>').text(item.name).appendTo(countriesList);
	});
}

var link = new XMLHttpRequest();
link.open('GET', url);
link.addEventListener('load', function() {
	var response = JSON.parse(xhr.response);

});

// TABELE

// var url = 'https://restcountries.eu/rest/v1/name/';
// var countriesList = $('#countries');
// var countriesCapital = $('#capital');

// function searchCountries() {
// 	var countryName = $('#country-name').val();
// 	if(!countryName.length) countryName = 'Poland';
// 	$.ajax({
// 		url: url + countryName,
// 		method: 'GET',
// 		success: showCountriesList
// 	});
// };

// $('#search').click(searchCountries);

// function showCountriesList(resp) {
	//countriesList.empty();
// 	resp.forEach(function(item) {
// 		$('<td>').text(item.name).append().appendTo(countriesList);
// 	});
// 	resp.forEach(function(item) {
// 		$('<td>').text(item.capital).appendTo(countriesCapital);
// 	});
// };