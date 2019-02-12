const userCode = JSON.parse('{ "inits": ["Fire", "Water", "Power"], "classes": { "Fire": "fire", "Water": "water", "Power": "fire"} }');

const inits = userCode.inits,
	classes = userCode.classes;

function addElement(elements, place) {
	for (let i = 0; i < elements.length; i++) {
		let element = $('<div>', {class: 'element ui-draggable ' + classes[elements[i]]});

		element.text(elements[i]);
		element.draggable();
		element.appendTo('#board');
		element.css(place);
		element.bind('mousedown', function() {
			element.topZIndex();
		});
	}
}

addElement(inits, {position: 'absolute', left: '500px', top: '500px'});