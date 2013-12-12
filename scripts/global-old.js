$(document).ready(function(){
	$(".button").hover(function() {
		$(this).attr("src","images/build-on.png");
			}, function() {
		$(this).attr("src","images/build-off.png");
	});
});
