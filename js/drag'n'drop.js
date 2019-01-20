$.getScript('http://example.com/script.js', function(){
  alert('script loaded');
});

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
