$(document).ready(function() {

    $('select').material_select();
    
    $('.carousel').carousel();

    $('.carousel.carousel-slider').carousel({fullWidth: true});

    $("#submit").on("click", function() {
    	var queryURL = "https://api.giphy.com/v1/gifs/search?q='box+of+kittens'&api_key=BLZeUFUso54cVFZ9RU3N0aCuaP8WB3Jw&limit=5";

	    $.ajax({
	        url: queryURL,
	        method: "GET"
	      }).then(function(response) {

	      	var results = response.data;
	      	console.log(results);

	      	for (var i = 0; i < results.length; i++) {
	      		var image = results[i].images.downsized.url;
	      		var title = results[i].title;

	      		}
	      		$("#resultsTable").append("<div class='carousel'><a class='carousel-item' href='#one!'><img src='" + image[i] "'><" + title[i] + "</a></div>")

	    });

  	});
  });  