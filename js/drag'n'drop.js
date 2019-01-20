var script = document.createElement('script');
script.src = 'http://ajax.aspnetcdn.com/ajax/jquery.ui/1.10.3/jquery-ui.min.js';
document.getElementsByTagName('head')[0].appendChild(script);

$(function() {
	$(".draggable").draggable();
			
	$('.droppable').droppable({
        drop: function() {
         	var reagents = [];

        	for (var i = 0; i < $('.droppable').length; i++) {
        		reagents.push($('.droppable').eq(i).html());
        	}

        	sortReagents = reagents.join(" + ") + " = " + " ... ";
            message(sortReagents);
        }
    });
});
