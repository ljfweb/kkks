$(function(){
	$("#head").load("comHead.html");
	$("#nav").load("comNav.html",function(){
		$(".nav_list_all").hover(function(){
			$(".list_all_con").css("z-index", 999).show(function(){
				$(".list_all_con").hover(function(){
					$(this).css("display","block");
				},function(){
					$(this).css("display","none");
				})
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
			});
		},function(){
			$(".list_all_con").hide();
		})
	});
	

	
	//获取url中的search	
	function GetQueryString(name) { 
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)","i"); 
		
		var r = window.location.search.substr(1).match(reg); 
		
		if (r!=null) return (r[2]); return null; 
	}
	//获取商品pid  同过商品pid发送ajax--请求商品详情数据
	var pid=GetQueryString("pid");
	$.ajax({
		type:"get",
		url:"../js/goodsPage.json",
		async:true,
		success:function(res){
			var proarr=res.secondkills;
			var strShow="";
			var strDetail="";
			var strName="";
			var strPrice="";
			var strInt="";
			$.each(proarr, function(index,ele) {
				if(ele.pid==pid){
					strShow+='<div class="small_box">'
						+'<div class="magnifying_mask"></div>'
						+'<img src="'+ele.imgsrc+'"/>'
					+'</div>'
					+'<div class="big_box">'
						+'<img class="big_img" src="'+ele.imgsrc+'"/>'
					+'</div>'
					$.each(ele.suolue,function(index,ele){
						strDetail+='<li><img src="'+ele+'"/></li>'
					})
					strName+='<h1 pid="'+ele.pid+'">'+ele.name+'</h1>'
						+'<p>'+ele.othername+'</p>'
					strPrice+='<p class="price">富连网价：<span>'+ele.price+'</span></p>'
						+'<p class="notice">降价通知</p>'
					$.each(ele.introduce, function(index,ele) {
						strInt+='<img src="'+ele+'"/>'
					});
				}
			});
			$(".magnifying_box").html(strShow);
			$(".detail").html(strDetail);
			$(".goods_name").html(strName);
			$(".goods_price").html(strPrice);
			$(".first_con").html(strInt);
			
			$(".detail li").hover(function(){
				$(".small_box img").attr("src",$(this).children().attr("src"));
				$(".big_img").attr("src",$(this).children().attr("src"));
			})
			
			
			
			$(".small_box").hover(function(){
				$(".magnifying_mask").show();
				$(".big_box").show();
				
			},function(){
				$(".magnifying_mask").hide();
				$(".big_box").hide();
			})
			
			$(".small_box").mousemove(function(e){
				var e=e||window.event;
				
				var  x=e.pageX-$(".small_box").offset().left-$(".magnifying_mask").width()/2;
				var  y=e.pageY-$(".small_box").offset().top-$(".magnifying_mask").height()/2;
				
				//限制移动范围
				x=x<0?0:x;
				y=y<0?0:y;
				var maxX=$(".small_box").width()-$(".magnifying_mask").width();
				var  maxY=$(".small_box").height()-$(".magnifying_mask").height();
				x=x>maxX?maxX:x;
				y=y>maxY?maxY:y;
				
				
				$(".magnifying_mask").css({top:y,left:x});
				
				//算出大图和小盒子的比例
				var blix=$(".big_box img").width()/$(".small_box").width();
				var bliy=$(".big_box img").height()/$(".small_box").height();
				//设置大盒子的滚动  距离是遮罩*比例
				$(".big_box").scrollTop(bliy*y);
				$(".big_box").scrollLeft(blix*x);			
			})	
			
		}
	})
	
	var and=1;
	$(".goods_minus").click(function(){
		and--;
		if(and<1){
			and=1;
		}
		$("#wantNum").val(and);
	})
	$(".goods_plus").click(function(){
		and++;
		$("#wantNum").val(and);
	})
	$(".nowBuy").click(function(){
		window.location.href="../html/shopCar.html?pid="+pid;
	})
	$(".myInfor_car").click(function(){
		window.location.href="../html/shopCar.html?pid="+pid;
	})
	$(".goods_int_tit span").hover(function(){
		$(this).addClass("backstyle");
	},function(){
		$(this).removeClass("backstyle");
		$(".goods_int_tit span").eq(0).addClass("backstyle");
	})
	
	$(window).scroll(function(){
		if($(window).scrollTop()>=$(".goods_introduce").offset().top){
			$(".goods_int_tit").addClass("fixedul");
		}else{
			$(".goods_int_tit").removeClass("fixedul");
		}
	})
	
//	购物车----------------------------------------------------------------------
var ccount=$(".car_num");
var goCar=document.querySelector(".goCar");
//把上次的cookie拿出
var cookies=getCookie("datas");	
//如果没拿到cookie--第一次添加cookie
if(cookies==undefined){
	//设置cookie=datas=[];
	setCookie("datas","[]",50);
	cookies=getCookie("datas");
}
//获取到的cooKie是字符串--转成数组
var cookiesarr=JSON.parse(cookies);
setTimeout(function(){
	$(".car_num").html(getTotal())
},0)
//按钮点击事件
goCar.onclick=function(){
	//获取要添加到cookie的信息
	var goodsIntro=this.parentNode.parentNode.parentNode.parentNode;
	var pid=goodsIntro.children[0].firstElementChild.getAttribute("pid");
	var name=goodsIntro.children[0].firstElementChild.innerHTML;
	var price=goodsIntro.children[1].firstElementChild.firstElementChild.innerHTML;
	var imgSrc=goodsIntro.parentNode.firstElementChild.firstElementChild.firstElementChild.lastElementChild.src;
	//---判断是否存在商品
	if(checkishas(pid)){
		//把该商品的pcout+1
		updateNum(pid,1);
	}else{
			//存储到obj对象中
		var obj={
			pid:pid,
			imgSrc:imgSrc,
			name:name,
			price:price,
			pcount:1//商品数量
		}
		//设置cooKie--从新获取cookie
		var cookies=getCookie("datas");	
		var cookiesarr=JSON.parse(cookies);
	//像数组中添加本次的商品信息的obj
		cookiesarr.push(obj);	
	//把数组转回字符串
		var cookiesarrstr=JSON.stringify(cookiesarr);
//添加到cookie中
		setCookie("datas",cookiesarrstr,50);
		//点击完成从新获取总数
	}
		$(".car_num").html(getTotal());
		alert("添加成功");
}

	
	
	
	$("#foot").load("comFoot.html");
	$("#base").load("comBase.html");
	$("#toTop").load("gotop.html");
	
	
	
})