var colourmap = ["red","","yellow","green"] //colours in order of boxes

function setbox(element,i){
    //get ith embedded checkbox and select it
	element.find("> tbody > tr:nth-child(1) > td > div:nth-child("
		          .concat(i+1,
		          	      ") > input")).each(function() {
  			var button = $(this);
  			button.prop("checked", true);
  		});
    element.find("> tbody > tr > td:nth-child(2) > div").each(function() {
    	var text = $(this);
    	text.removeClass(this.className);
    	text.addClass(colourmap[i]);
    })

}
function nextbox(element){
  //Take in table element from page
  //cycle through select boxes.
  boxes = element.find("input");
  set = 0;
  boxes.each(function () {
  	var box = $(this);
  	if (box.is(':checked') && set == 0) {
  		var i = box.parent().index()
  		if (i == 0) { 
  			i = 1;
  		} else if (i == 1) {
  			i = 3;
  		} else if (i == 2) {
  			i = 0;
  		} else {
  			i = 2;
  		}
  		setbox(element,i);
  		set = 1;
  		return i;
  	}
});
}

 $("#full > form > table > tbody > tr > td > table > tbody > tr > td:nth-child(2)").each(function () {
 	var text = $(this);
 	text.click(function() { nextbox(text.closest("table")) });
 });