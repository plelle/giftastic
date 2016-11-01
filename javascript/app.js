var topics = ["soccer", "football", "volleyball", "golf", "basketball"];

function displayGifs(){
	var topic = $(this).attr('data-name');
	var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + topic + "&limit=10&api_key=dc6zaTOxFJmzC";

	$.ajax({url: queryURL, method: 'GET'})

	.done(function(response){

		var results = response.data;

		for (var i = 0; i < results.length; i++) {

		var gifDiv = $('<div class="topic">');

		var p = $('<p>').text("Rating: " + results.rating);

		var gifImg = $('<img>');
		gifImg.attr('src', results[i].images.fixed_height.url);

		gifDiv.append(p);
		gifDiv.append(gifImg);

		$('#gifPlaceholder').prepend(gifDiv);
		}
	})
}

function renderButtons(){
	$("#buttons").empty();
		for (var i = 0; i < topics.length; i++) {
		var a = $('<button>')
		a.addClass('topic');
		a.attr('data-name', topics[i]);
		a.text(topics[i]);
		$("#buttons").append(a);
		};
}


$("#addSportsGif").on('click', function(){
	
	var topic = $("#sportsText").val().trim();

	(topics).push(topic);

	renderButtons();

	return false;
})

$(document).on('click', '.topic', displayGifs);

renderButtons();
