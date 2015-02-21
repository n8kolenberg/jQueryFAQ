$('h3').addClass('question');
$('p').addClass('answer');

$('.answer').hide();

$('h3.question').on('click', function(){
	var $answer = $(this).next('.answer');
	if ($answer.is(':hidden')) {
		$answer.fadeIn(300);
	} else {$answer.fadeOut(300);

	} //end if else

}); //end on function
