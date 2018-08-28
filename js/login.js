$(function(){
	$("#head").load("comHead.html",function(){
		$(".head_QRcode").html("")
		$("#search").empty();
		$("#search").html(
			'<div class="search_logo">'
				+'<a href="home.html"><img src="../img/login/logo.png"/></a>'
			+'</div>'
		)
	});
	var phonenum=/^1[0-9]{10}$/;
	var mail=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	var passwords=/^\w{6,10}$/;
	$("#lc_ID_text").blur(function(){
		if(phonenum.test($(this).val())||mail.test($(this).val())){
			$(".lc_hint").hide();
			$(".urse").hide();
		}else{
			$(".lc_hint").show();
			$(".urse").show();
			$(".pass").hide();
			$(".verify").hide();
		}
	})
	$("#lc_password").blur(function(){
		if(passwords.test($(this).val())){
			$(".lc_hint").hide();
			$(".pass").hide();
		}else{
			$(".lc_hint").show();
			$(".pass").show();
			$(".urse").hide();
			$(".verify").hide();
		}
	})
	$("#lc_verify").blur(function(){
		if($(this).val().toLowerCase()==$(".lc_verify_change").children(0).html().toLowerCase()){
			$(".lc_hint").hide();
			$(".verify").hide();
		}else{
			$(".lc_hint").show();
			$(".verify").show();
			$(".urse").hide();
			$(".pass").hide();
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
	$(".code_ctrl").click(function(){
		var verifys=makecode();
		$(".code_word").html(verifys);
	})
	
	
	$(".lc_submint a").click(function(){
		if(!$(".lc_hint").show()||$("#loginCon input").val()!=""){
			window.location.href="home.html";
		}
	})
	
	$("#base").load("comBase.html");
	$("#toTop").load("gotop.html");
})