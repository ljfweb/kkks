$(function(){
	$("#head").load("comHead.html",function(){
		$(".head_QRcode").html("")
		$("#search").empty();
		$("#search").html(
			'<div class="search_logo">'
				+'<a href="home.html"><img src="../img/home/logo.jpg"/></a>'
			+'</div>'
			+'<div class="search_separate"></div>'
			+'<p class="search_title">用户注册</p>'
		)
	});
	
	var phonenum=/^1[0-9]{10}$/;
	var mail=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	var passwords=/^\w{6,10}$/;
	$("#phone_text").blur(function(){
		if(!phonenum.test($(this).val())){
			$(this).parent().find("p").children(0).show();
			$(this).css("border","1px solid red")
		}else{
			$(this).parent().find("p").children(0).hide();
		}
	})
	$("#mali_text").blur(function(){
		if(!mail.test($(this).val())){
			$(this).parent().find("p").children(0).show();
			$(this).css("border","1px solid red")
		}else{
			$(this).parent().find("p").children(0).hide();
		}
	})
	$("#code_text").blur(function(){
		if($("#code_text").val().toLowerCase()!=$(".code_text_mid").children().html().toLowerCase()){
			$(this).parent().parent().find("p").children(0).show();
		}else{
			$(this).parent().parent().find("p").children(0).hide();
		}
	})
	function makecode(){
		codes="";
		var arr=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
		for(var i=0;i<4;i++){
			//随机从arr中提取一个数
			var index=Math.floor(Math.random()*arr.length);
			codes+=arr[index];
		}
		return codes;
	}
	var verifys=makecode();
	$(".code_text_last a").click(function(){
		var verifys=makecode();
		$(".code_text_mid h1").html(verifys);
	})
	$("#pass_text").blur(function(){
		if(!passwords.test($(this).val())){
			$(this).parent().find("p").children(0).show();
		}else{
			$(this).parent().find("p").children(0).hide();
		}
	})
	$("#con_pass_text").blur(function(){
		if($(this).val()!=$("#pass_text").val()){
			$(this).parent().find("p").children(0).show();
		}else{
			$(this).parent().find("p").children(0).hide();
		}
	})
	$(".le_sub a").click(function(){
		if(!$(".le_phone b").show()||$(".le_phone input").val()!=""){
			window.location.href="login.html";
		}
	})
	
	$("#changeMali").click(function(){
		$("#changePhone").attr("checked",false);
		$(".le_phone_num").hide();
		$(".le_code").hide();
		$(".le_note_code").hide();
		$(".le_Emali").show();
	})
	$("#changePhone").click(function(){
		$("#changeMali").attr("checked",false);
		$(".le_phone_num").show();
		$(".le_code").show();
		$(".le_note_code").show();
		$(".le_Emali").hide();
	})
	
	$("#base").load("comBase.html");
	$("#toTop").load("gotop.html");
	
})