$(document).ready(function() {

		$('.top-scroll').click(function() {
			$('html, body').animate({
				scrollTop: 0,
				scrollLeft: 300
			}, 1000)
		})


		var prodSlide = $(".bottom-slide-wrap");
				 prodSlide.owlCarousel({
						items: 3,
						navText: "",
						nav: true,
				  });
				$(".nav .next").click(function() {
						prodSlide.trigger("next.owl.carousel");
					});

					$(".nav .prev").click(function() {
						prodSlide.trigger("prev.owl.carousel");
					});

		


	
				var $container = $(".grid");
			$container.imagesLoaded(function () {
				$container.masonry({
					columnWidth: ".grid-sizer",
				itemSelector: ".grid-item"
			});
		});
	


	var bottomSlide = $(".bottom-slide-wrap");
 bottomSlide.owlCarousel({
		items: 3,
		navText: "",
		nav: true
  });
$(".bottom-slide .next").click(function() {
		bottomSlide.trigger("next.owl.carousel");
	})
	$(".bottom-slide .prev").click(function() {
		bottomSlide.trigger("prev.owl.carousel");
	});

	

	var featSlide = $(".feat-slide-wrap");
 featSlide.owlCarousel({
		items: 3,
		navText: "",
		nav: true
  });
$(".feat-slide-control .prod-next").click(function() {
		featSlide.trigger("next.owl.carousel");
	})
	$(".feat-slide-control .prod-prev").click(function() {
		featSlide.trigger("prev.owl.carousel");
	});



	var bestSlide = $(".best-slide-wrap");
 bestSlide.owlCarousel({
		items: 3,
		navText: "",
		nav: true
  });
$(".best-slide-control .fa-chevron-right").click(function() {
		bestSlide.trigger("next.owl.carousel");
	})
	$(".best-slide-control .fa-chevron-left").click(function() {
		bestSlide.trigger("prev.owl.carousel");
	});




 var prodSlide = $(".prod-slide-wrap");
 prodSlide.owlCarousel({
		items: 3,
		navText: "",
		nav: true
  });
$(".slide-control .fa-chevron-right").click(function() {
		prodSlide.trigger("next.owl.carousel");
	})
	$(".slide-control .fa-chevron-left").click(function() {
		prodSlide.trigger("prev.owl.carousel");
	});



// sidebar 
	$('.top-nav .parent-list li span').click(function() {
		$('.top-nav .parent-list .active').removeClass('active');
		$(this).parent().addClass('active');
		if($('.top-nav .parent-list .men').hasClass('active')) {
		$('.top-nav .men-bar').css({ 'display': 'block' });
			$('.top-nav .women-bar').css({ 'display': 'none' });
		} else if($('.top-nav .parent-list .women').hasClass('active')) {
			$('.top-nav .women-bar').css({ 'display': 'block' });
			$('.top-nav .men-bar').css({ 'display': 'none' });

	} else { $('.top-nav .child-list').css({ 'display': 'none' }) }

	});


	// fixed mob menu icon
	var $menu = $("#nav-icon3");
  $(window).scroll(function(){
      if ( $(this).scrollTop() > 100 && !$menu.hasClass("fixed") ){
          $menu.addClass("fixed");
      } else if($(this).scrollTop() <= 100 && $menu.hasClass("fixed")) {
          $menu.removeClass("fixed");
      }
  });//scroll


 	// slide
  $("#owl-example").owlCarousel({
  	items: 1,
    slideSpeed : 200,
  });
 


	// mobile menu
	 $(".mob-menu").mmenu({
   configuration: {
      pageNodetype: "section",
   }
});
	 
	$('#nav-icon3').click(function(){
		var API = $(".mob-menu").data( "mmenu" );
		API.open();
		API.bind("closed", function() {
			$("#nav-icon3").removeClass("open")});
		$(this).toggleClass('open');
	});


	// preloader options
	$(window).load(function() { 
		$(".loader-inner").fadeOut(); 
		$(".loader").delay(400).fadeOut("slow"); 
	});
	
	// top menu active
	$("header .header-menu ul li a").each(function () {
	if (this.href == location.href) $(this).parent().addClass('active');
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

	

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});
