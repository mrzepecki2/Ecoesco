$(document).ready(function(){
	$(window).resize(function(){
		$('.dokument').height($('.dokument').width()/(210/297));
		});
	//FacnyBox
	$(".fancybox").fancybox({
    	openEffect	: 'elastic',
    	closeEffect	: 'elastic',

    	helpers : {
    		title : {
    			type : 'inside'
    		}
    	}
    });
	$("#mini-slider").skywheel({
		effect:1,
		width:"400px",
		height:"250px"
		});
	
});
		

$(window).load(function() {
	$('.dokument').height($('.dokument').width()/(210/297));
	
	
	$(".menu_rozw").hover
	(
		function()
		{	
			$(this).children("ul").slideToggle(600);
		},
		function()
		{
			$(this).children("ul").slideToggle(600);
		}
	);
	
	/*$('.menu_rozw').mouseover(function(){
		$(this).children('ul').stop().slideDown('300');
	}).mouseleave(function(){
		$(this).children('ul').stop().slideUp('300');
	});*/

	$('.slider2').slick({
	  dots: false,
	  infinite: true,
	  autoplay: false,
	  speed: 300,
	  slidesToShow: 1,
	  centerMode: true,
	  variableWidth: true
	});
	
	$('.karuzela').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 1,
		arrows: false,
		speed: 1000,
		adaptiveHeight: true,
		responsive: [
			{
			breakpoint: 1024,
			settings: 
				{
					slidesToShow: 4,
					infinite: true,
					
				}
			},
			{
			  breakpoint: 600,
			  settings: 
				{
					infinite: true,
					slidesToShow: 3
				}
			},
			{
				breakpoint: 480,
				settings: 
				{
					infinite: true,
					slidesToShow: 2
				}
			},
			{
				breakpoint: 400,
				settings: 
				{
					infinite: true,
					slidesToShow: 1
				}
			}
		 ]
	});
	$('.slider_2').slick({
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		centerMode: true,
	variableWidth: true
	});
	
	
	
	$('.navbar-toggle').click(function(){
		$(".main-menu").slideToggle(600);
		$(".main-menu").toggleClass("otwarte");
	});
	
	
	

	
});
$(document).ready(function(){
  $('.bxslider').bxSlider();
 
});
$(document).ready(function(){
  $('.bxslider_2').bxSlider();
	minSlider: 3;
});

 jQuery(document).ready(function ($) {
          
	var jssor_1_options = {
	  $AutoPlay: true,
	  //slider dlugosc
	  $SlideWidth: 1434,
	  $Cols: 2,
	  //dl zdj bocznych
	  $Align: 235,
	  $ArrowNavigatorOptions: {
		$Class: $JssorArrowNavigator$
	  },
	  $BulletNavigatorOptions: {
		$Class: $JssorBulletNavigator$
	  }
	};
	
	var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);
	
	//responsive code begin
	//you can remove responsive code if you don't want the slider scales while window resizing
	function ScaleSlider() {
		var refSize = jssor_1_slider.$Elmt.parentNode.clientWidth;
		if (refSize) {
			refSize = Math.min(refSize, 1904);
			jssor_1_slider.$ScaleWidth(refSize);
		}
		else {
			window.setTimeout(ScaleSlider, 30);
		}
	}
	ScaleSlider();
	$(window).bind("load", ScaleSlider);
	$(window).bind("resize", ScaleSlider);
	$(window).bind("orientationchange", ScaleSlider);
	//responsive code end
});