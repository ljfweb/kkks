//设置cookie  ---name --value ---days
	function setCookie(name,value,days){
		var mydate=new Date();
//		escape ---字符串编码
		mydate.setMinutes(mydate.getMinutes()+days);
		document.cookie=name+"="+escape(value)+
		
		((days==null)?"":";expires="+mydate.toGMTString());
		
		//document.cookie="user=666;expires="+mydate.toGMTString()
	;
				
	}	
//获取cookie
	function getCookie(name){
			//获取所有cookie
//				"user=666; dd=888; dss=777";
//		[user=666,dd=888,dss=777]
//		var z=[user,666]
//		var z=[dd,888]
//		var z=[dss,777]
//			dd==z[0]
//			return unescape(z[1])
		var x=document.cookie;
		
		//分割cookie
		var y=x.split("; ");
		
			//字符串解码unescape
			//循环数组  =分割  name=value
			for(var i=0;i<y.length;i++){
				var z=y[i].split("=");
				//cookie有没有用户传的name
				if(z[0]==name){
					console.log(z[0]);
					return unescape(z[1]);
					break;
				}
			}
			
		}
	
//判断是否存在cookie
	function ishasCookie(name){
		//	返回第一次出现的位置  name=  hh=
		var x=document.cookie.indexOf(name+"=");
		if(x!=-1){
			return true;
		}else{
			return false;
		}
	}
//删除cookie
function delCookie(name){
		var myval=getCookie(name);
		var mydate=new Date();
		mydate.setTime(mydate.getTime()-1);
		//mydate.setDate(0);
		if(myval){
			//设置时间-1  --删除
			document.cookie=name+"="+escape(myval)+";expires="+mydate.toGMTString();
		}
}
//第二种get
function mygetCookie(c_name){
		"user=666; dd=888; dss=777"
		//cookie---string--leng---
				//dd=
		var cookies=document.cookie;
		if(cookies.length>0){
			var c_start=cookies.indexOf(c_name+"=");//10
			//是否找到name=
			if(c_start!=-1){
					c_start=c_start+c_name.length+1;
			
				var c_end=cookies.indexOf(";",c_start);//16
				//是否找到;
				if(c_end==-1){
						c_end=cookies.length;
				}
				return unescape(cookies.substring(c_start,c_end));
		}
			
		}
		return "";
		
}
