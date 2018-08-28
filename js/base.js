//获取cookie字符串--转成数组
function getAll(){
	var listStr=getCookie("datas");
	var listObj=JSON.parse(listStr)
	//返回转成数组
	return listObj;
}
//获取购物车总数方法
function getTotal(){
		//去除存放所有cookie的数组
	var listObj=getAll();
	// {pid:1003,pcount:1}
//	[
//		{pid:1001,pcount:2},
//		{pid:1002,pcount:1},
//		{pid:1003,pcount:2},
//     
//	]
		var total=0; 
	for(var i=0;i<listObj.length;i++){
		
		total=total+listObj[i].pcount;
	}
		return total;
	
}
//判断商品是否存在---//根据商品id来判断是否存在
	function checkishas(id){
		var listObj=getAll();
		var ext=false;
		for(var i=0;i<listObj.length;i++){
			if(listObj[i].pid==id){
				ext=true;
				break;
			}	
		}
		return ext;
	}
//存在后 更新数量
			//1002,1
function updateNum(id,num){
	var listObj=getAll();
	for(var i=0;i<listObj.length;i++){
		if(listObj[i].pid==id){
			listObj[i].pcount+=num;
			
		}
	}
	var lisobj=JSON.stringify(listObj);
	setCookie("datas",lisobj,50);
	
}
//删除函数
function delProduct(id){
	var listObj=getAll();
	for(var i=0;i<listObj.length;i++){
		if(id==listObj[i].pid){
			//通过下标删除
			listObj.splice(i,1);
		}
	}
	var lisobjstr=JSON.stringify(listObj);
	setCookie("datas",lisobjstr,50);

	
}
