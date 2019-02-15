const userCode = JSON.parse('{ "inits": ["Fire", "Water", "Power"], "reactions": { "Fire+Water": ["Earth", "Air"], "Air+Earth": ["Fire", "Water"]}, "classes": { "Fire": "fire", "Water": "water", "Power": "fire", "Earth": "earth", "Air": "air"} }');

const inits = userCode.inits,
	classes = userCode.classes,
reactions = userCode.reactions;

$('#board').selectable({
	stop: onSelectStop
});

const center = {
	left: $('#board').width() / 2,
	top: $('#board').height() / 2
}

function addElement(elements, place) {
	let l = elements.length,
		r = 20;

	let a = 2 * Math.PI / l,
		start_angle = Math.random() * 2 * Math.PI;

	for (let i = 0; i < elements.length; i++) {
		let element = $('<div>', {class: 'element ui-draggable ' + classes[elements[i]]});

		element.text(elements[i]);
		element.draggable();
		element.droppable({
			drop: onDrop
		});
		element.appendTo('#board');
		element.bind('mousedown', function() {
			element.topZIndex();
		});
		element.data('elementName', elements[i]);

		element.css({
			left: place.left,
			top: place.top
		});

 		element.animate({
 			opacity: 1,
 			left: '+=' + Math.floor((l - 1) * r * Math.sin(start_angle + i * a)),
  			top: '+=' + Math.floor((l - 1) * r * Math.cos(start_angle + i * a))
 		}, 600);
	}
}

function deleteElement(elements) {
	elements.droppable('destroy');
	elements.fadeOut(
		1000, function() {
			elements.remove();
		}
	);
}

function onDrop(event, ui) {
	let result = react([ui.helper.data("elementName"), $(this).data("elementName")]);

	if (result !== undefined) {
		addElement(result, $(this).offset());
		deleteElement(ui.helper);
		deleteElement($(this));
	}
}

function onSelectStop() {
	let reagents = [];
	
	let x = 0,
		y = 0,
		l = 0;

	$('.ui-selected', this).each(function() {
		reagents.push($(this).data('elementName'));
		x += $(this).offset().left;
		y += $(this).offset().top;
		l++;
	})

	let result = react(reagents);

	if (result !== undefined) {
		x = Math.floor(x / l);
		y = Math.floor(y / l);

		let place = {'left': x, 'top': y};

		$('.ui-selected', this).animate(
			place, 400, function() {
				deleteElement($(this));
			}
		);
		addElement(result, place);
	}
}

function react(reagents, place) {
	let r = reagents.sort().join('+'),
		result = reactions[r];

	return result;
}

addElement(inits, center);
