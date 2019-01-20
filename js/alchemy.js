// Let's go!
// Alchemy 0.1 Alpha

var script = document.createElement('script');
script.src = 'http://ajax.aspnetcdn.com/ajax/jquery.ui/1.10.3/jquery-ui.min.js';
document.getElementsByTagName('head')[0].appendChild(script);

// Show message about reaction
// Element + Element = ...
function message(react) {
	$('#message').text(react);
}
