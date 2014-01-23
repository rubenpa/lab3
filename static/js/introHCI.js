'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
	});
	projectClick();
	$('#submitBtn').click(updateProject);
}

function projectClick() {	
	$('.project').click(function(e) {
		$(this).children().children('p, img').toggleClass('hidden');
	});
}

function updateProject (e) {
	var projectID = $('#project').val();
	$(projectID).animate({
		width: $('#width').val()
	});

	var newText = $('#description').val();
	$(projectID).children().children('p').text(newText);
}