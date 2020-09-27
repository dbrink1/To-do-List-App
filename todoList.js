
//Adds a list item after hitting the "enter" key
$("input[type='text']").on("keypress", function(event){
	let listItem = $(this).val();
	if (event.which === 13){
	$("#list").prepend('<li id="newListItem"><span id="trashIcon"><i class="fas fa-trash"></i></span>' + listItem +'</li>');
	$(this).val("");
}
});

//Function to check off li when clicked
//"ul" is selected because is it present as soon as page loads 
$("ul").on("click", "li", function(){
	if ($(this).css("color") === "rgb(102, 102, 102)"){
		$(this).css({"text-decoration": "line-through", "color": "rgb(110, 110, 110)"});
	}
	else {
		$(this).css({"text-decoration": "none",
		"color": "rgb(102, 102, 102)"});
	}
});

//Function to remove li when clicking on trash can logo
//"ul" is selected because it is present as soon as page loads
$("ul").on("click", "#trashIcon", function(event){
$(this).parent().fadeOut(500,function(){
	$(this).remove();
	});
event.stopPropagation();

});

//Slides the "add a new todo" text box up and down
$(".fa-plus").on("click", function(){
	if ($("input").css("display") == "none"){
		$("input").slideDown();
	}
	else{$("input").slideUp();}
});