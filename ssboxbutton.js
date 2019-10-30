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
  console.log("ding");
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

function rubricpage(tdpath){
  //Run nextbox on rubric texts found at given path
 $(tdpath).each(function () {
  var text = $(this);
  text.click(function() { nextbox(text.closest("table")) });
 });
}


 var loc = window.location.pathname.split("/");
 ploc = loc[loc.length - 1];
 if (ploc ==  "right_teacher_test_ability_student.jsp"){
  //If on test rubric page, add functionality to boxes
  tdpath = "#full > form > table > tbody > tr > td > table > tbody > tr > td:nth-child(2)";
  rubricpage(tdpath);
 } else if (ploc == "right_teacher_student_ability.jsp") {
  //If on student rubric page, add functionality to boxes
  tdpath = "#full > form > table:nth-child(35) > tbody > tr > td > table > tbody > tr > td:nth-child(2)";
  rubricpage(tdpath);
 } else if (ploc == "right_teacher_test_show_result_multi_update.jsp"){
  //If on 'handle knowledge requirements' page, add submit functionality to boxes
  //to stop it being removed when Google Translate changes the hierarchy.
  var studentform = document.querySelector("#full > table:nth-child(11) > tbody > tr > form");
  $("#full > center > input:nth-child(1)").each(function(){
    var sbutton = $(this);
    sbutton.click(function() {studentform.submit();})
  })


  
 }
