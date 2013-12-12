$(document).ready(function(){

		//create bubble popups for each element with class "button"
		$('.button').CreateBubblePopup();
	
		//set customized mouseover event for each button
		$('.button').mouseover(function(){
	
			//show the bubble popup with new options
			$(this).ShowBubblePopup({
										innerHtml: '<b>1-2-3, and you are online!<b><br> Simply sign up, log in, and your<br>fully customizable, easy-to-use<br> website is all ready to go!',
										innerHtmlStyle: {
															color: ($(this).attr('id')!='all-azure' ? '#FFFFFF' : '#333333'), 
															'text-align':'center'
														},										
										themeName: 	'all-azure',
										themePath: 	'images/bubblepop'								 
								  });
		});

});