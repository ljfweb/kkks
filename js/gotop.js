$(function(){
	$(window).scroll(function(){
		if($(window).scrollTop()>600){
			$(".stick").fadeIn(600);
		}else{
			$(".stick").fadeOut(600);
		}

	})
	$(".stick").hover(function(){
		$(this).css("background-position","-43px 8px")
	},function(){
		$(this).css("background-position","-43px -43px")
	})
	$(".stick").click(function(){
		$("html,body").animate({scrollTop:"0px"},800);
	})
	$(".QR_code").hover(function(){
		$(".top_QuickMark").show();
		$(this).css("background-position","-96px 4px")
	},function(){
		$(".top_QuickMark").hide();
		$(this).css("background-position","-96px -46px")
	})
	$(".expert").hover(function(){
		$(this).css("background-position","-151px 4px")
	},function(){
		$(this).css("background-position","-151px -46px")
	})
})