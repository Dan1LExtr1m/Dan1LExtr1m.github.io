// Let's go!
// Alchemy 0.1 Alpha

$.getScript('http://example.com/script.js', function(){
  alert('script loaded');
});

// Show message about reaction
// Element + Element = ...
function message(react) {
	$('#message').text(react);
}
