$(document).ready(function() {

    $('select').material_select();
    
    $('.materialboxed').materialbox();

    //$('.carousel.carousel-slider').carousel({fullWidth: true});

    $("#submit").on("click", function() {
    	event.preventDefault();

    //onclick get random function to run, giphy, nytimes or omdb

    var functionArray = [giphy, omdb, nytimes];
    
    var randomSelect = Math.floor(Math.random() * 3);
    console.log(randomSelect);

    var functionCall = functionArray[randomSelect]().then(function(result) {
    });
    
    		$("#nameInput").val("");
		    $("#monthInput").val("Month");
		    $("#dayInput").val("Day");
    //based on random return, call function (giphy, nytimes or omdb) with if statement, else last should be giphy if no results are returned from omdb or nytimes

    console.log(functionCall);
    	
    
  	});

	var giphy = function() {

	  	var queryURL = "http://api.giphy.com/v1/gifs/random?&api_key=BLZeUFUso54cVFZ9RU3N0aCuaP8WB3Jw&tag=kittens";
		    
		    return $.ajax({
		        url: queryURL,
		        method: "GET"
		    }).then(function(response) {

		      	var results = response.data;
		      	

		      	var image = results.image_original_url;

		      	var title = results.title;


		      	//<img class="materialboxed" data-caption="Get me a Box Of Kittens! STAT!" width="250" src="images/kittens1.jpg">

		      	
		      	$("#results").append("<img class='materialboxed' data-caption='" + title + "' src='" + image + "'>");
		      	
		      	//clear form fields

				});

		};

	var omdb = function() {


	};

var nytimes = function() {


};

//end the document ready function
});  