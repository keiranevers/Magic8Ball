$(document).ready(function() 
{
    $('select').material_select();
    $('.materialboxed').materialbox();
    //$('.carousel.carousel-slider').carousel({fullWidth: true});
    $(".progress").hide();
    $("#submit").on("click", function() 
    {
    	event.preventDefault();
    	$("#submit").hide();
    //onclick get random function to run, giphy, nytimes or omdb
	    var functionArray = [giphy, omdb, nytimes];
	    var randomSelect = 2; //Math.floor(Math.random() * 3);
	    console.log(randomSelect);
	//based on random return, call function (giphy, nytimes or omdb) with if statement, else last should be giphy if no results are returned from omdb or nytimes
	    var functionCall = functionArray[randomSelect]().then(function(result) 
	    {
	    	//console.log(functionCall);
	    
	    		$("#nameInput").val("");
			    $("#monthInput").val("Month");
			    $("#dayInput").val("Day");
	  	})
	});

		var giphy = function() 
		{
		  	var queryURL = "http://api.giphy.com/v1/gifs/random?&api_key=BLZeUFUso54cVFZ9RU3N0aCuaP8WB3Jw&tag=kittens";
			    return $.ajax({
			        url: queryURL,
			        method: "GET"
			    }).then(function(response) 
			    {
			      	var results = response.data;
			      	var image = results.image_original_url;
			      	var title = results.title;
		      	//<img class="materialboxed" data-caption="Get me a Box Of Kittens! STAT!" width="250" src="images/kittens1.jpg">
		      	$("#resultText").append("<h2>Let us melt your heart with kittens</h2>");
		      	$("#results").append("<img class='materialboxed' data-caption='" + title + "' src='" + image + "'>");
		      	//clear form fields
				});
		};
		var omdb = function() 
		{
			var APIKey = "289c8015";
					//title for the movieYear we want to call, we will only use the first letter to try to generate matching results
					var title = $("#nameInput").val().substring(0, 1);  
					//year movies came out that you randomly want to generate one by one
					var movieYear = $("#yearInput").val();
					//make a queryURL variable instead of using literal string name in the AJAX method ...construct URL                                                                                  
					var queryURL = "https://www.omdbapi.com/?t=" + title + "&y=" + movieYear + "&plot=short&apikey=" + APIKey; 
					//Code to perform GET request to OMDB API, and then to log the response to the console
					return $.ajax({
						url: queryURL,
						method: "GET"
					}).then(function(response){
						console.log(response);
						console.log(response.Runtime);
						console.log(response.Poster);
					
						//methods run on jQuery selectors return te selector they were run on
						var titleId = response.Title;
						
						var yearId = "2015";
						var posterImage = $("<img>").attr("src", response.Poster);
						var actors = response.Actors;

						console.log(response.Title);
						console.log(response.Month);
						console.log(response.Day);
						//append the desired parameters to the results section of HTML
						$("#resultText").append("<h2>" + response.Title + "</h2><br><h3>Staring: " + response.Actors + "</h3><br><p>" + response.Plot + "</p>");
						$("#results").append("<img class='materialboxed' src=" + response.Poster + "'>");
						
					});
		};

		var nytimes = function() 
		{	
			var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=2cd9f063d7884d46800cd9477c11cdb2";
	
			//Declare variables to receive month & day entered by user
			var queryTermMo = "";

			var queryTermDay = "";

			console.log(queryURL);

			return $.ajax(
			{
				url: queryURL,
				method: "GET"

			}).done(function(NYTData)
				{

					
					console.log("URL: " + queryURL);

					console.log(NYTData.response);

					//Declare a variable to hold the first article returned by the GET request
					var article = NYTData.response.docs[0].web_url;
					console.log(article);

					queryTermMo = $("#month").val().trim();
					queryTermDay = $("#day").val().trim();

					//var newURL = queryURL + "&begin_date=1987" + queryTermMo + queryTermDay + "&end_date=1987" + queryTermMo + queryTermDay;
					$("#resultText").append("<h4><a href=" + article + "'<img src='images/nytimesImage.jpg'></a></h4>");
					
      				$("#results").append("<a href='" + NYTData.response.docs[0].web_url + "'>" + NYTData.response.docs[0].web_url + "</a>");


				}).fail(function(err)
					{
						throw err;
					})
			};


//end the document ready function
});

