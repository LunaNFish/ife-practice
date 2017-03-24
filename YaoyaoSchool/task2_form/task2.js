var $ = function(id){
				return document.getElementById(id);
			}
			var $$ = function(tagname){
				return document.getElementsByTagName(tagname);
			}
			
			var input_len = $$("input").length;
			var m = 0;
			
			function focusinput(){				
				for(var i = 0; i < input_len; i++){
					$$("input")[i].addEventListener("focus",function(e){
						switch(e.target.id){
							case "user":
								 $("user_tip").innerText = "必填，长度为4~16个字符";
								 $("user_tip").style.color = "#CCCCCC";
							   	 $("user").style.cssText= "outline-color:#31B0D5";
								break;
						case "pswd":
								$("pswd_tip").innerText = "必填，长度不可少于6个字符且不可多于20个字符";
							   	 $("pswd").style.cssText= "outline-color:#31B0D5";
							   	 $("pswd_tip").style.color = "#CCCCCC";
							   	 break;
						case "pswd2":
								$("pswd2").style.cssText= "outline-color:#31B0D5";
							   	 $("pswd2_tip").style.color = "#CCCCCC";
								
								break;
						case "email":
								$("email").style.cssText= "outline-color:#31B0D5";
							   	 $("email").style.color = "#CCCCCC";
								
								break;
						case "phoneNum":
								$("phoneNum").style.cssText= "outline-color:#31B0D5";
							   	 $("phoneNum_tip").style.color = "#CCCCCC";
								
								break;
						}
					})
				}
			}
			
			function checkstring(txt){
				//res为实际上字符长度
				var res =0;
				var len = txt.length;
				for(var i = 0; i < len; i++){
					//使用 String.charCodeAt() 拿到字符编码值
					var codeVal = txt.charCodeAt(i);
					if (codeVal <= 0xFF){
						res += 1;
					}
					//判断32bit编码的中文字符
					else if(codeVal >=0xD800&& codeVal <= 0xDBFF){
						res +=2;
						i++;
					}
					else{
						res += 2;
					}
				}
				return res;
			}
			
			function blurinput(){
				var warning = "#E8504F";
				var warningBdr = "box-shadow: 0 0 0 1px #E8504F;";
				var success = "#5CB85C";
				var successBdr = " box-shadow: 0 0 0 1px #5CB85C;";
				for(var i = 0; i< input_len; i++){
				var j, str,color, txtLen, pswd3;
				$$("input")[i].addEventListener("blur",function(e){
					switch(e.target.id){
						case "user":
							 j = 0;
							 var name = $("user").value;
							 txtLen = checkstring(name);
							if(txtLen == 0){
								$("user_tip").innerText = "名称不能为空";
								$("user_tip").style.color = warning;
								//box-shadow出现了4个数值，分别是水平偏移0, 垂直偏移0，模糊0(纯色), 扩展大小30像素
								$("user").style.cssText= warningBdr;
							}
							else if(txtLen >=4 && txtLen <=16){
								$("user_tip").innerText =  "名称可用";
								$("user_tip").style.color = success;
								$("user").style.cssText= successBdr;
								m ++;
							}
							else{
								$("user_tip").innerText = "请输入正确的名称格式";
								$("user_tip").style.color = warning;
								$("user").style.cssText= warningBdr;
							}
							break;
						case "pswd":
							var pswd = $("pswd").value;
							pswd3 = $("pswd").value;
							txtLen = checkstring(pswd);
							if(txtLen>=6 && txtLen <=20){
								$("pswd_tip").innerText =  "密码可用";
								$("pswd_tip").style.color = success;
								$("pswd").style.cssText= successBdr;
								m ++;
							}else{
								$("pswd_tip").innerText = "请输入正确的名称格式";
								$("pswd_tip").style.color = warning;
								$("pswd").style.cssText= warningBdr;
							}
							break;
						case "pswd2":
							var pswd2 = $("pswd2").value;
							if(pswd2 == pswd3 && pswd2 != ""){
								$("pswd2_tip").innerText = ""
								$("pswd2").style.cssText= successBdr;
								m ++;
							}else if(pswd2 == "" ){
								$("pswd2_tip").innerText = "密码不能为空";
								$("pswd2_tip").style.color = warning;
								$("pswd2").style.cssText= warningBdr;
							}else{
								$("pswd2_tip").innerText = "密码不相同";
								$("pswd2_tip").style.color = warning;
								$("pswd2").style.cssText= warningBdr;
							}
							break;
						case "email":
							var email = $("email").value;
							var reg = new RegExp("^[a-zA-Z0-9_\.\-]+\@([a-zA-Z0-9]+\.)+([a-zA-Z0-9]{2,4})+$");
							if(email != ""){
								if(reg.test(email)){
									$("email_tip").innerText = "";
									$("email").style.cssText= successBdr;
									m ++;
								}else{
									$("email_tip").innerText = "邮箱格式不正确";
									$("email_tip").style.color = warning;
									$("email").style.cssText= warningBdr;
								}
							}else{
								$("email_tip").innerText = "邮箱不能为空";
								$("email_tip").style.color = warning;
								$("email").style.cssText= warningBdr;
							}
							break;
						case "phoneNum":
							var phoneNum = $("phoneNum").value;
							var reg = new RegExp("^1[3-8]{1}\\d{9}$");
							if(phoneNum != ""){
								if(reg.test(phoneNum)){
									$("phoneNum_tip").innerText = "";
									$("phoneNum").style.cssText= successBdr;
									m ++;
								}else{
									$("phoneNum_tip").innerText = "手机格式不正确";
									$("phoneNum_tip").style.color = warning;
									$("phoneNum").style.cssText= warningBdr;
								}
							}else{
								$("phoneNum_tip").innerText = "手机不能为空";
								$("phoneNum_tip").style.color = warning;
								$("phoneNum").style.cssText= warningBdr;
							}
							break;
					}
				})
				}
			}
			
			$("submit").onclick = function (){
				alert(m);
					if(m>4){
						alert("提交成功！");
					}else{
						alert("输入有误！");
					}
				}
			focusinput();
			blurinput();
			