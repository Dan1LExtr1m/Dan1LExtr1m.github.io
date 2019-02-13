const userCode = JSON.parse('{ "inits": ["Fire", "Water", "Power"], "classes": { "Fire": "fire", "Water": "water", "Power": "fire"} }');

const inits = userCode.inits,
	classes = userCode.classes;

$('#board').selectable();

const center = {
	left: $('#board').width() / 2,
	top: $('#board').height() / 2
}

function addElement(elements, place) {
	let x = place.left, 
		y = place.right,
		l = elements.length,
		r = 20;

	let a = 2 * Math.PI / l,
		start_angle = Math.random() * 2 * Math.PI;

	for (let i = 0; i < elements.length; i++) {
		let element = $('<div>', {class: 'element ui-draggable ' + classes[elements[i]]});

		element.text(elements[i]);
		element.draggable();
		element.appendTo('#board');
		element.bind('mousedown', function() {
			element.topZIndex();
		});

		element.css({
			left: place.left,
			top: place.top
		});

 		element.animate({
 			opacity: 1,
 			left: "+=" + Math.floor((l - 1) * r * Math.sin(start_angle + i * a)),
  			top: "+=" + Math.floor((l - 1) * r * Math.cos(start_angle + i * a))
 		}, 600);
	}
}

addElement(inits, center);