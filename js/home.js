$(function(){
	$("#head").load("comHead.html");
	$("#nav").load("comNav.html",function(){});
//轮播------------------------------------------------------------4
(function(){
	var numbre=0;
	var timer=null;
	timer=setInterval(move,3000);
	function move(){
		numbre++;
		if(numbre>5){
			numbre=0;
		}
		$("#move a").eq(numbre).fadeIn().siblings().fadeOut();
		$(".point").eq(numbre).addClass("point_color").siblings().removeClass("point_color");
	}
	$(".point").click(function(){
		numbre=$(this).index();
		$("#move a").eq(numbre).fadeIn().siblings().fadeOut();
		$(".point").eq(numbre).addClass("point_color").siblings().removeClass("point_color");
	})
	$("#banner").hover(function(){
		$("#leftArrow").show();
		$("#rightArrow").show();
		clearInterval(timer);
	},function(){
		$("#leftArrow").hide();
		$("#rightArrow").hide();
		timer=setInterval(move,3000);
	})
	$("#leftArrow").click(function(){
		numbre--;
		if(numbre<0){
			numbre=5;
		}
		$("#move a").eq(numbre).fadeIn().siblings().fadeOut();
		$(".point").eq(numbre).addClass("point_color").siblings().removeClass("point_color");
	})
	$("#rightArrow").click(function(){
		move();
	})
})();
//秒杀倒计时-------------------------------------------------------------------------------
$(".seckill_title_menu").hover(function(){
	$(this).children(2).addClass(".seckill_title_line");
	var index=$(this).index();
	$(".con_seckill_con").eq(index).show().siblings().hide();
})
var hour=document.getElementsByClassName("hour")[0];
var mintue=document.getElementsByClassName("minute")[0];
var second=document.getElementsByClassName("second")[0];
var seckills=document.querySelector(".seckill_title_status a span");
function count(){
	var nowDate=new Date().getTime();
	var endDate=new Date(2018,6,4).getTime();
	var diff=endDate-nowDate;
	var hours=parseInt(diff/1000/60/60);
	var minutes=parseInt(diff/1000/60%60);
	var seconds=parseInt(diff/1000%60);
	hour.innerHTML=hours;
	mintue.innerHTML=minutes;
	second.innerHTML=seconds;
	if(hour.innerHTML<=0&&mintue.innerHTML<=0&&second.innerHTML<=0){
		clearInterval(timersec);
		hour.innerHTML=0;
		mintue.innerHTML=0;
		second.innerHTML=0;
	}
	seckills.innerHTML=hours+":"+minutes+":"+seconds;
}
var timersec=setInterval(count,1000);
	$.ajax({
		type:"get",
		url:"../js/shopList.json",
		async:true,
		success:function(res){
			var proarr=res.secondKill;
			var str="";
			var  x="";
			var y="";
			$.each(proarr, function(index,ele) {
				
				if(index==0){
					x="con_phone_first";
					y='<img src="'+ele.imgsrc+'" /><p>'+ele.price+'</p>';
				}else{
					x="skip";
					 y='<div class="con_phone_img"><img src="'+ele.imgsrc+'"/></div>'
						+'<div class="con_phone_int">'
							+'<h3>'+ele.name+'</h3>'
							+'<p class="con_phone_desc">'+ele.introduce+'</p>'
							+'<p class="con_phone_price">'+ele.price+'</p>'
						+'</div>'
				}
				
				
				str+='<li class="'+x+'" pid="'+ele.pid+'">'+y+'</li>';
				
					
			});
			$(".data").html(str);
		}
	}).done(function(){
		$(".skip").click(function(){
			window.location.href="goodsPage.html?pid="+$(this).attr("pid");
		})
		$(".con_phone_first").click(function(){
			window.location.href="goodsPage.html?pid="+$(this).attr("pid");
		})
	})
	
	
	$("#foot").load("comFoot.html");
	$("#base").load("comBase.html");
	$("#toTop").load("gotop.html");
})