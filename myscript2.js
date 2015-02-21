$('h3').addClass('question');
$('p').addClass('answer');

$('.answer').hide();

$('h3.question').on('click', function(){
	var $answer = $(this).next('.answer');
	if ($answer.is(':hidden')) {
		$answer.slideDown();
	} else {$answer.slideUp();

	} //end if else

}); //end on function
