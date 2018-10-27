$(document).ready(function(){
	$(".accordeon-title").click(function(e) {
		e.preventDefault();
		$(".accordeon-title").removeClass('active');
		$(this).addClass('active');
	  })
});




  $(document).ready(function() {
	$('.accordeon-content').hide();
	$('.accordeon-title').click(function() {
		$(this).toggleClass('opened').toggleClass('closed').next().slideToggle(666);

	});
});



function isotope_init(){
	var $grid = $('.grid').isotope({
		// options
		itemSelector: '.grid-item',
		layoutMode: 'fitRows'
		});
	$('.filter-button-group').on('click', 'button', function(){
		$('.is-checked')[0].classList.remove('is-checked');
		$(this)[0].classList.add('is-checked');
		var filterValue = $(this).attr('data-filter');
		$grid.isotope({filter: filterValue});
	})
	}


	function to_top(){
		var btn = $ ('.totop-button');
			$(window).scroll (function(){
				if ($(window).scrollTop() > 300){
					btn.addClass('show');
				}
				else{
					btn.removeClass('show');
				}
			});
	
			btn.on('click', function(e) {
					e.preventDefault();
					$('html, body').animate({scrollTop:0}, '300');
			});
	}
	

	$(document).ready(function(){
		isotope_init();
		to_top();
	});

	
// $(".accordeon-title").click(function(){   
// 	$(this).next(".accordeon-content").toggle().slideToogle(300);
//   });
