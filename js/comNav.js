$(function(){
	$(".list_all dt").hover(function(){
		$(".all_con em").hover(function(){
			$(this).addClass("underline");
		},function(){
			$(this).removeClass("underline");
		})
		$(".all_tit").hover(function(){
			$(this).addClass("underline");
		},function(){
			$(this).removeClass("underline");
		})
		$(".list_all").hover(function(){
			$(this).addClass("list_all_back");
		},function(){
			$(this).removeClass("list_all_back");
		})
		$(this).next().css("display","block");
		$(this).children().children(0).css("background-position-x","-21px")
		$(".list_all dd").hover(function(){
			$(this).css("display","block");
			$(this).prev().children().children(0).css("background-position-x","-21px")
			$(".memu_list a").hover(function(){
				$(this).addClass("memu_list_unline");
			},function(){
				$(this).removeClass("memu_list_unline");
			})
		},function(){
			$(this).css("display","none");
			$(this).prev().children().children(0).css("background-position-x",0)
		})
	},function(){
		$(this).next().css("display","none");
		$(this).children().children(0).css("background-position-x",0)
	})
	$(".myInfor_car").hover(function(){
		$(".car_con").css("display","block");
	},function(){
		$(".car_con").css("display","none");
	})
	
	$(".myInfor_car").click(function(){
		window.location.href="shopCar.html";
	})
	
	
	
	
	
	
	
	
	
	
	
})