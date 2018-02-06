// $(document).ready(function() {

// function gifphyCall() {
    	
//     	var queryURL = "http://api.giphy.com/v1/gifs/random?&api_key=BLZeUFUso54cVFZ9RU3N0aCuaP8WB3Jw&tag=kittens";
	    
// 	    $.ajax({
// 	        url: queryURL,
// 	        method: "GET"
// 	      }).then(function(response) {

// 	      	var results = response.data;
	      	

// 	      	var image = results.image_original_url;

// 	      	var title = results.title;


// 	      	//<img class="materialboxed" data-caption="Get me a Box Of Kittens! STAT!" width="250" src="images/kittens1.jpg">

	      	
// 	      	$("#results").append("<img class='materialboxed' data-caption='" + title + "' src='" + image + "'>");
	      	
// 	      	//	
// console.log(results);
// 	    });

//   	};
//   });  