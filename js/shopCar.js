$(function(){
	$("#head").load("comHead.html",function(){
		$(".head_QRcode").html("")
		$("#search").empty();
		$("#search").html(
			'<div class="search_logo">'
				+'<a href="home.html"><img src="../img/home/logo.jpg"/></a>'
			+'</div>'
			+'<div class="search_separate"></div>'
			+'<p class="search_title">我的购物车</p>'
			+'<div class="search_progress"><img src="../img/shopCar/img01.png" /></div>'
		)
	});
	
	
	
//获取cookie的数据---datas的数组
var listObj=getAll();
var emptyCon=document.querySelector(".empty_con");
var carContent=document.querySelector(".car_content");
var carEmpty=document.querySelector(".car_empty");
var carData=document.querySelector(".car_data")
//如果数据cookie的数据为空 显示购物车为空--表格隐藏
if(listObj.length==0){
   	emptyCon.style.display="block";
	carContent.style.display="none";
	carEmpty.style.display="none";
}else{
   	emptyCon.style.display="none";
   	carContent.style.display="block";
   	carEmpty.style.display="block";
   	//根据数组动态生成页面
   	var lis="";
   	for(var i=0;i<listObj.length;i++){
   		lis+='<li class="car_database" pid="'+listObj[i].pid+'">'
				+'<div class="car_check">'
					+'<input type="checkbox" name="" id="checkes" value="" />'
				+'</div>'
				+'<div class="car_img">'
					+'<img src="'+listObj[i].imgSrc+'"/>'
				+'</div>'
				+'<div class="car_name">'
					+'<p>'+listObj[i].name+'</p>'
				+'</div>'
				+'<div class="car_price">'
					+'<span>'+listObj[i].price+'</span>'
				+'</div>'
				+'<div class="car_num">'
					+'<img class="down" src="../img/shopCar/001.jpg"/>'
					+'<input type="text" name="" id="shop_num" value="'+listObj[i].pcount+'" />'
					+'<img class="up" src="../img/shopCar/002.jpg"/>'
				+'</div>'
				+'<div class="car_total style="color:red;"">'
					+'￥<span>'+parseInt(listObj[i].pcount)*parseInt(listObj[i].price.substr(1))+'</span>'
				+'</div>'
				+'<div class="car_state">'
					+'<span>有货</span>'
				+'</div>'
				+'<div class="car_collect">'
					+'<img class="del" src="../img/shopCar/003.jpg"/>'
					+'<span>|</span>'
					+'<a>收藏</a>'
				+'</div>'
			+'</li>'
		
			console.log(document.querySelector(".car_data"))
   			carData.innerHTML=lis;
   	}
}
               
//获取总价方法
//取出所有选择框
var showTotal=document.querySelector(".del_price span");
var numTotal=document.querySelector(".del_total_num");
var showTotalsec=document.querySelector(".del_total_sec");
var checkes=document.querySelectorAll("#checkes");
   function getTotalPrice(){
   	checkes=document.querySelectorAll("#checkes");
   	var sum=0;
	for(var i=0;i<checkes.length;i++){
		if(checkes[i].checked==true){
			var lis=checkes[i].parentNode.parentNode;
			var temp=lis.children[5].children[0].innerHTML;
			sum+=Number(temp);
		}
	}
	return sum;
   }
  //获取总数-----------------
  	function getTotalNum(){
   	checkes=document.querySelectorAll("#checkes");
   	var contes=0;
	for(var i=0;i<checkes.length;i++){
		if(checkes[i].checked==true){
			var lis=checkes[i].parentNode.parentNode;
			var temps=lis.children[4].children[1].value;
			contes+=Number(temps);
		}
	}
	return contes;
   }
   //所有复选框的onchange事件
for(var i=0;i<checkes.length;i++){
   	checkes[i].onchange=function(){
   		ischeckAll();
   		showTotal.innerHTML=getTotalPrice();
   		showTotalsec.innerHTML=getTotalPrice();
   		numTotal.innerHTML=getTotalNum();
   	}
}
//全选操作---从新计算总价
var checkall=document.getElementById("checkall");
checkall.onchange=function(){
	for(var i=0;i<checkes.length;i++){
		checkes[i].checked=this.checked;
	}
	showTotal.innerHTML=getTotalPrice();
	showTotalsec.innerHTML=getTotalPrice();
	numTotal.innerHTML=getTotalNum();
}
//判定全选函数
function ischeckAll(){
	var flag=true;
	for(var i=0;i<checkes.length;i++){
		if(checkes[i].checked==false){
			flag=false;
		}
	}
	if(flag){
		checkall.checked=true;
	}else{
		checkall.checked=false;
	}
}
//增加商品数量--------------
var add=document.getElementsByClassName("up");
var minus=document.getElementsByClassName("down");
//所有输入框
var inps=document.querySelectorAll("#shop_num");
//取出删除按钮
var dels=document.querySelectorAll(".del");
for(var i=0;i<add.length;i++){
	//加数量--
	add[i].onclick=function(){
		var txtnum=this.previousElementSibling;
		txtnum.value=Number(txtnum.value)+1;
		var lis=this.parentNode.parentNode;
		var pid=lis.getAttribute("pid");
		updateNum(pid,1);
		//取出价格
		var price=lis.children[3].children[0].innerHTML.substr(1);
		//给小计赋值
		lis.children[5].children[0].innerHTML=Number(txtnum.value)*Number(price);
		//判断是否选中
		var myck=lis.children[0].firstElementChild;
		if(myck.checked==true){
			showTotal.innerHTML=getTotalPrice();
			showTotalsec.innerHTML=getTotalPrice();
			numTotal.innerHTML=getTotalNum();
		}
	}
	//减数量-----
	minus[i].onclick=function(){
		var texnum=this.nextElementSibling;
		texnum.value=Number(texnum.value)-1;
		//更新cookie
		var lis=this.parentNode.parentNode;
		var pid=lis.getAttribute("pid");
		if(texnum.value<1){
			texnum.value=1;
		}else{
			updateNum(pid,-1);
		}
		var price=lis.children[3].children[0].innerHTML.substr(1);
		//小计赋值
		lis.children[5].children[0].innerHTML=Number(texnum.value)*Number(price);
		var mycks=lis.children[0].children[0];
		
		if(mycks.checked==true){
			//获取总价格
			showTotal.innerHTML=getTotalPrice();
			showTotalsec.innerHTML=getTotalPrice();
			numTotal.innerHTML=getTotalNum();
		}
	}
	//输入框事件
	inps[i].onblur=function(){
		var num=parseInt(this.value);
			//输入不能小于1
			this.value=num;
		if(num<1||isNaN(num)){
			alert("输入有误");
			this.value=1;
			return;
		}
		var lis=this.parentNode.parentNode;
	
		var pid=lis.getAttribute("pid");
		var price=lis.children[3].children[0].innerHTML.substr(1);
		lis.children[5].children[0].innerHTML=Number(num)*Number(price);
		var mychek=lis.children[0].children[0];
		if(mychek.checked==true){
			//获取总价格
			showTotal.innerHTML=getTotalPrice();
			showTotalsec.innerHTML=getTotalPrice();
			numTotal.innerHTML=getTotalNum();
		}
		var listObj=getAll();
		for(var j=0;j<listObj.length;j++){
			if(pid==listObj[j].pid){
				listObj[j].pcount=num;
			}
		}
		//改变后从新添加cookie
		listObjstr=JSON.stringify(listObj);
		setCookie("datas",listObjstr,50);
		
	}
	//删除操作--------------------
	dels[i].onclick=function(){
		var lis=this.parentNode.parentNode;
		var pid=lis.getAttribute("pid");
		//删除自己本身-
		lis.remove();
		delProduct(pid);
		//判断没有商品
		if(carData.children.length==0){
			emptyCon.style.display="block";
			carContent.style.display="none";
			carEmpty.style.display="none";
		}
		showTotal.innerHTML=getTotalPrice();
		showTotalsec.innerHTML=getTotalPrice();
		numTotal.innerHTML=getTotalNum();
	}
}
	
	$(".close_buy").click(function(){
		window.location.href="home.html";
	})
	

	$("#base").load("comBase.html");
	$("#toTop").load("gotop.html");
	
	
	
})
