$(function(){
	$('nav ul li a').each(function(){
		if(document.location.pathname == $(this).attr('href')){
			$(this).parent().addClass('active');
		}
	});
});
