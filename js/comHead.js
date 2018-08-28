$(function(){
	$(".head_layer").hover(function(){
		$(".head_province").css({"display":"block","z-index":999});
		$(".search_input").css("z-index","-55");
		$(".head_province").hover(function(){
			$(this).css({"display":"block","z-index":999});
			$(".search_input").css("z-index","-55");
		},function(){
			$(this).css("display","none");
		})
		$(".head_province li").hover(function(){
			$(this).addClass("provincecolor");
		},function(){
			$(this).removeClass("provincecolor");
		})
		$(".head_province li").click(function(){
			$(".head_layer span").html($(this).html());
		})
	},function(){
		$(".head_province").css("display","none");
	})
	$(".head_QRcode").hover(function(){
		$(".head_QRcode img").css({"display":"block","z-index":999});
		$(".search_input").css("z-index","-55");
	},function(){
		$(".head_QRcode img").css("display","none");
	})
	$(".head_phone").hover(function(){
		$(".head_phone img").css({"display":"block","z-index":999});
		$(".search_input").css("z-index","-55");
	},function(){
		$(".head_phone img").css("display","none");
	});
	$(".head_serve").hover(function(){
		$(".head_serve ul").css({"display":"block","z-index":999});
		$(".search_input").css("z-index","-55");
	},function(){
		$(".head_serve ul").css("display","none");
	});
	$(".head_map").hover(function(){
		$(".head_map_content").css({"display":"block","z-index":999});
		$(".search_input").css("z-index","-55");
	},function(){
		$(".head_map_content").css("display","none");
	});
	$("#search_input_text").focus(function(){
		$(".search_input_con").css({"display":"block","z-index":999});
	})
	$("#search_input_text").blur(function(){
		$(".search_input_con").css("display","none");
	})
	
	
	
	
	
	
})