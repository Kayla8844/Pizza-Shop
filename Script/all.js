$(document).ready(function() {
	// 導覽列滾動到該位置
	$(".move").on("click", function(){
		var to = $(this).attr("href");
		$("html").animate({
			scrollTop : $(to).position().top
		}, 700);

		return false;
	});


	//美味秘訣menu
	$('body').show();
	$('.submenu').hide();

	// 美味秘訣menu
	$('.mainmenu-list-yummy').on('mouseover', function() {
		$('.submenu-yummy').slideDown();
	});

	$('.mainmenu-list-yummy').on('mouseleave', function() {
		$('.submenu-yummy').slideUp();
	});
	

	//精選菜單menu
	$('.mainmenu-list-pizza').on('mouseover', function() {
		$('.submenu-pizza').slideDown();
	});

	$('.mainmenu-list-pizza').on('mouseleave', function() {
		$('.submenu-pizza').slideUp();
	});

    //手機導覽列
    //body陰影 
    $('.defocus').hide();

    //展開導覽列 
    $('#mobile-menu-btn').on('click', function() {
    	$('#mobile-nav').animate({
    		width : "250px",
    	}, 300);
    	$('.defocus').fadeIn();


    });

    //收起導覽列 
    $('.close-btn').on('click', function() {
    	$('#mobile-nav').animate({
    		width : "0"
    	}, 300);
    	$('.defocus').fadeOut();

    	return false;
    });


    // 手機精選菜單
    $('.mob-submenu-pizza').hide();

    $('.mob-mainmenu-list-pizza').click(function() {
		$('.mob-submenu-pizza').slideToggle();
		$('.mob-more').toggleClass('more-rotate');
	});

	
	// 試算
	$('.quantity').change(function() {
		update_amounts();
	});

	function update_amounts() {
		var sum = 0;
		$('.quantity').each(function() {
			var price = parseInt( $(this).closest('.calc-pizza').data('price') );
			var quantity = parseInt( $(this).val() );
			var amount = ( price * quantity );
			sum = sum + amount;
		});

		$('.total').text(sum);
	}


	// gotop
	$("#gotop").on('mouseover', function() {
		
		$(this).animate({
			"opacity": 0.8,
		}, 100 );
	});

	$("#gotop").on('mouseleave', function() {
		$(this).animate({
			"opacity": 0.4,
		}, 100 );
	});

	$("#gotop").on('click', function() {
		// $(this).toggleClass('gotop-opacity');
		
		$("html, body").animate({
			scrollTop: 0,   /* 到達網頁最上面 */
		}, 1000 );

	});

	$(window).scroll(function() {

		if ($(window).scrollTop() == 0) {
			$("#gotop").hide();
		}

		if ($(window).scrollTop() >= 400) {
			$("#gotop").show();
		}

	})


});