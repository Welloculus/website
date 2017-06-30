/*-----------------------------------------------------------------------
#package    Helix Framework
#template	PS Acrostia
#author     PCMShaper http://www.pcmshaper.com
#copyright  (C) 2013 - 2016 PCMShaper.com
#contact    support@pcmshaper.com
#license    http://www.gnu.org/copyleft/gpl.html GNU/GPL
------------------------------------------------------------------------*/

jQuery(function($){
	$(window).on('scroll', function(){
		if( $(window).scrollTop() > 10 ){
			$('#sp-header-wrapper').addClass('top-fixed');
		} 
		else {
			$('#sp-header-wrapper').removeClass('top-fixed');
		}
	});
});