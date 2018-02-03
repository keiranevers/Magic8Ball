$(document).ready(function() {

    $('select').material_select();
    
    $('.carousel').carousel();

    //$('.carousel.carousel-slider').carousel({fullWidth: true});

    $("#submit").on("click", function(event) {
    	event.preventDefault();
    	console.log("test");
    	var queryURL = "https://api.giphy.com/v1/gifs/search?q='box+of+kittens'&api_key=BLZeUFUso54cVFZ9RU3N0aCuaP8WB3Jw&limit=5";
	    $.ajax({
	        url: queryURL,
	        method: "GET"
	      }).then(function(response) {

	      	var results = response.data
	      	console.log(results);	      	
	      	
	      	var resultDiv = $("<div>").addClass("carousel");
	      	$("#resultTable").append(resultDiv);

	      	for (var i = 0; i < results.length; i++) {
	      		var image = results[i].images.fixed_height.url;
	      		var rating = results[i].rating;
	      		console.log(image[i]);
	      		console.log(rating[i]);

	      		resultDiv.append($("<a class='carousel-item' href='#one!'><img src='" + image[i] + "'><" + rating[i] + "</a>"));
	      		
	      		
	      		}
	      	//	

	    });

  	});
  });  