$('h3').addClass('question');
$('p').addClass('answer');

$('.answer').hide();

$('h3.question').on('click', function(){
	var $answer = $(this).next('.answer');
	if ($answer.is(':hidden')) {
		$answer.slideDown();
		$(this).addClass('close');
	
	} else {
		$answer.slideUp();
		$(this).removeClass('close');

	} //end if else

}); //end on function
