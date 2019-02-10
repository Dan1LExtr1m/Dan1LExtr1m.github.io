var jsonCode = '{ "inits": ["Fire", "Water"], "classes": { "Fire": "fire", "Water": "water"} }'

var data = {
	'inits': JSON.parse(jsonCode).inits,
	'classes': JSON.parse(jsonCode).classes
};

function addElement(name, classes, place) { 
	var a = $('<div>', {class: 'element ' + classes, css: place }).appendTo('#board').text(name);
	a.draggable();
	return a;
}

for (var i = 0; i < data.inits.length; i++) {
	addElement(data.inits[i], data.classes[data.inits[i]], {left: '200px', top: '200px'});
}